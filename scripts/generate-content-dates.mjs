#!/usr/bin/env node
/**
 * Guarda en .content-dates.json la fecha del primer y último commit de cada .md.
 * Corre en `pnpm generate` y en CI antes del build de Docker (la imagen no
 * tiene .git, así que usa el archivo que deja este paso).
 */
import { computeGitContentDates, loadContentDates, CONTENT_DATES_FILE } from './shared-utils.mjs';

const fromGit = computeGitContentDates() !== null;
const dates = loadContentDates();
const count = Object.keys(dates).length;

if (fromGit) {
	console.log(`📅 Fechas de ${count} archivos tomadas de git → ${CONTENT_DATES_FILE}`);
} else if (count) {
	console.log(`📅 Sin historial de git: uso ${CONTENT_DATES_FILE} (${count} archivos)`);
} else {
	console.warn('⚠️ Sin historial de git ni .content-dates.json: el sitemap va sin <lastmod>.');
}
