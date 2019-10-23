const { prefix } = require('../config');

module.exports = (bot, msg) => {
    //Ignore the message if it was sent by the bot
    if (msg.author.bot) return;
    //Ignore the message if it was sent in DMs
    if(msg.channel.type == "dm"){ return; }

    //Ignore messages that don't start with prefix
    //if(!msg.content.startsWith(config.prefix)) return;

    //handle the command
    //split the String into the command and all arguments
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = bot.commands.get(command);
    if (!cmd) return;

    cmd.run(bot, msg, args);
};