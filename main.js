const Discord = require(`discord.js`);
const fs = require('fs');
const Enmap = require('enmap');
require('dotenv-flow').config();
const bot = new Discord.Client();
const config = {
    token: process.env.TOKEN,
    prefix: process.env.PREFIX
}

bot.commands = new Enmap();

bot.on("guildMemberAdd", member => {

    let welcomeChannel = member.guild.channels.find(channel => channel.name === "welcome");
    welcomeChannel.send(`Welcome ${member.displayName}! You are our ${member.guild.memberCount}. Member! :tada:`);
    welcomeChannel.send(`Nice to have you here! o/`);
    
    //let memberRole = member.guild.roles.find(role => role.id == "");
    //member.addRole(memberRole);
    
    //member.send("");
})
    
bot.on("guildMemberRemove", member => {
    
    let welcomeChannel = member.guild.channels.find(channel => channel.name === "cheerio");
    welcomeChannel.send(` ${member.displayName} just left :open_mouth:`);
})

/*function helpCommand(args, msg) {
    if (args.length == 0) {
        msg.channel.send("um..? try ~help [topic]");
    } else {
        msg.channel.send("It looks like you need help with " + args)
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

bot.login(config.token);