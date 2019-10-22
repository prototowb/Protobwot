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

bot.on('ready', () => {
    console.log("Connected as " + bot.user.tag);
    bot.user.setActivity("FREE HONGKONG", {type: "WATCHING"});

    /*bot.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
        })
    })*/
})

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

bot.on("message", msg => {

    //Ignore the message if it was sent by the bot
    if (msg.author.bot) return;
    //Ignore the message if it was sent in DMs
    if(msg.channel.type == "dm"){ return; }

    //Ignore messages that don't start with prefix
    //if(!msg.content.startsWith(config.prefix)) return;

    //handle the command

    //split the String into the command and all arguments
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = bot.commands.get(command);
    if (!cmd) return;

    cmd.run(bot, msg, args);

});

/*function helpCommand(args, msg) {
    if (args.length == 0) {
        msg.channel.send("um..? try ~help [topic]");
    } else {
        msg.channel.send("It looks like you need help with " + args)
    }
}*/

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