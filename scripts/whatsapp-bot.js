/**
 * Cliente ultra minimalista para WhatsApp Business
 * Requiere: npm install whatsapp-web.js qrcode-terminal
 */

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

class PaxaPOSWhatsAppBot {
    constructor(apiUrl = 'http://localhost:5174/documentation/api/chat') {
        this.apiUrl = apiUrl;
        this.client = new Client({
            authStrategy: new LocalAuth(),
            puppeteer: { headless: true, args: ['--no-sandbox'] }
        });
        
        this.setupHandlers();
    }

    setupHandlers() {
        this.client.on('qr', qr => {
            console.log('🤖 Escanea este QR con WhatsApp Business:');
            qrcode.generate(qr, { small: true });
        });

        this.client.on('ready', () => {
            console.log('✅ PaxaPOS ChatBot conectado a WhatsApp!');
        });

        this.client.on('message', async message => {
            // Solo responder mensajes de texto privados
            if (message.type === 'chat' && !message.from.includes('@g.us') && !message.fromMe) {
                await this.handleMessage(message);
            }
        });
    }

    async handleMessage(message) {
        try {
            // Indicar que estamos escribiendo
            await this.client.sendSeen(message.from);
            
            // Llamar a la misma API pero para WhatsApp
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: message.body,
                    platform: 'whatsapp'
                })
            });

            const data = await response.json();
            
            if (data.success) {
                await message.reply(data.response);
            } else {
                await message.reply('Lo siento, hubo un error procesando tu consulta 😔');
            }

        } catch (error) {
            console.error('Error:', error);
            await message.reply('Error técnico. Intenta de nuevo en unos minutos.');
        }
    }

    start() {
        this.client.initialize();
    }
}

// Usar el bot
const bot = new PaxaPOSWhatsAppBot();
bot.start();

// Manejo de cierre
process.on('SIGINT', () => {
    console.log('\n🔴 Cerrando bot...');
    process.exit(0);
});
