/** Levanta `node server.js` contra el `build/` real en un puerto libre (tests de integración). */
import { spawn, type ChildProcess } from 'node:child_process';
import { existsSync } from 'node:fs';
import { createServer } from 'node:net';
import { join } from 'node:path';

export const ROOT = join(import.meta.dirname, '..', '..');
export const BUILD = join(ROOT, 'build');
export const hasBuild = existsSync(join(BUILD, 'handler.js'));

export function freePort(): Promise<number> {
	return new Promise((resolve, reject) => {
		const srv = createServer();
		srv.on('error', reject);
		srv.listen(0, '127.0.0.1', () => {
			const address = srv.address();
			srv.close(() => resolve(typeof address === 'object' && address ? address.port : 0));
		});
	});
}

export interface RunningServer {
	child: ChildProcess;
	base: string;
	/** Todo lo que escribió el proceso por stdout hasta ahora. */
	stdout: () => string;
}

export async function startServer(env: Record<string, string> = {}): Promise<RunningServer> {
	const port = await freePort();
	const child = spawn(process.execPath, ['server.js'], {
		cwd: ROOT,
		env: { ...process.env, PORT: String(port), HOST: '127.0.0.1', ...env },
		stdio: ['ignore', 'pipe', 'pipe'],
	});
	let out = '';
	let err = '';
	child.stdout?.on('data', (chunk: Buffer) => (out += chunk.toString('utf-8')));
	child.stderr?.on('data', (chunk: Buffer) => (err += chunk.toString('utf-8')));
	const base = `http://127.0.0.1:${port}`;
	for (let i = 0; i < 100; i++) {
		if (child.exitCode !== null)
			throw new Error(`server.js terminó (${child.exitCode}): ${err}`);
		try {
			const res = await fetch(`${base}/health`);
			if (res.ok) return { child, base, stdout: () => out };
		} catch {
			// todavía no escucha
		}
		await new Promise((r) => setTimeout(r, 100));
	}
	child.kill();
	throw new Error('server.js no respondió /health');
}

/** Corre `server.js` esperando que NO arranque: devuelve el código de salida y el stderr. */
export async function runServerExpectingExit(
	env: Record<string, string>,
): Promise<{ code: number | null; stderr: string }> {
	const port = await freePort();
	const child = spawn(process.execPath, ['server.js'], {
		cwd: ROOT,
		env: { ...process.env, PORT: String(port), HOST: '127.0.0.1', ...env },
		stdio: ['ignore', 'pipe', 'pipe'],
	});
	let stderr = '';
	child.stderr?.on('data', (chunk: Buffer) => (stderr += chunk.toString('utf-8')));
	const timer = setTimeout(() => child.kill('SIGKILL'), 10_000);
	const code = await new Promise<number | null>((resolve) => child.on('exit', resolve));
	clearTimeout(timer);
	return { code, stderr };
}

export function stop(child?: ChildProcess) {
	child?.kill('SIGTERM');
}
