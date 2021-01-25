const Discord = require(`discord.js`);
const fs = require('fs');
const Enmap = require('enmap');
require('dotenv-flow').config();

const bot = new Discord.Client();

bot.commands = new Enmap();

/*function helpCommand(args, msg) {
    if (args.length == 0) {
        msg.channel.send("um..? try ~help [topic]");
    } else {
        msg.channel.send("It looks like you need help with " + args);
    }
}*/

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

bot.login();