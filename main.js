const Discord = require(`discord.js`);
const { Client, Intents } = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
require('dotenv-flow').config();

const myIntents = new Intents();
myIntents.add('GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS');
const bot = new Client({ partials: ['USER', 'GUILD_MEMBER', 'MESSAGE', 'CHANNEL', 'REACTION'] }, { ws: { intents: myIntents } });

bot.commands = new Enmap();

fs.readdir('./events/', async (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`Loaded '${evtName}'.`);
        bot.on(evtName, evt.bind(null, bot));
    });
});

fs.readdir('./commands', async (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`);
        let cmdName = file.split('.')[0];
        console.log(`Loaded command '${cmdName}'.`);
        bot.commands.set(cmdName, props);
    });
});


bot.package = require("./package.json");
bot.on("warn", console.warn);
bot.on("error", console.error);
bot.login(process.env.CLIENT_TOKEN).catch(console.error);