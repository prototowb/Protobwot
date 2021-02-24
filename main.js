const Discord = require(`discord.js`);
const { Client, Intents } = require('discord.js');
const clientBuild = require("./handler/ClientBuilder.js");
const myIntents = new Intents();
myIntents.add('GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS');
const bot = new clientBuild({ partials: ['USER', 'GUILD_MEMBER', 'MESSAGE', 'CHANNEL', 'REACTION'] }, { ws: { intents: myIntents } });

require('dotenv-flow').config();
require("./handler/module.js")(bot);
require("./handler/events.js")(bot);

bot.package = require("./package.json");
bot.on("warn", console.warn);
bot.on("error", console.error);
bot.login(process.env.CLIENT_TOKEN).catch(console.error);