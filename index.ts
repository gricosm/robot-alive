import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log('El bot está listo // The bot is ready');
})

client.on('messageCreate', (message) => {
    if(message.content === 'Marco') {
        message.reply({
            content: 'Polo',
        })
    }
})

client.login(process.env.TOKEN);