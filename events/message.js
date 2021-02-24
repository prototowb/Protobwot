const Discord = require("discord.js"), cooldowns = new Discord.Collection();

module.exports = async (bot, message) => {
    //Ignore the message if it was sent by the bot
    if (message.author.bot) return;
    //Ignore the message if it was sent in DMs
    if(message.channel.type == "dm"){ return; }
    //Ignore messages that don't start with prefix
    let prefix = bot.config.prefix;
    if(!message.content.startsWith(prefix)) return;

    //handle the command
    //split the String into the command and all arguments
    // const args = message.content.slice(prefix.length).trim().split(/ +/g);
    // const command = args.shift().toLowerCase();
    // const cmd = bot.commands.get(command);
    // if (!cmd) return;

    // cmd.run(bot, message, args);


    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let msg = message.content.toLowerCase();
    let cmd = args.shift().toLowerCase();
    let sender = message.author;

    message.flags = []
    while (args[0] && args[0][0] === "-") {
        message.flags.push(args.shift().slice(1));
    }

    let commandFile = bot.commands.get(cmd)  || bot.commands.get(bot.aliases.get(cmd));
    if (!commandFile) return;

    if (!cooldowns.has(commandFile.help.name)) cooldowns.set(commandFile.help.name, new Discord.Collection());

    const member = message.member,
        now = Date.now(),
        timestamps = cooldowns.get(commandFile.help.name),
        cooldownAmount = (commandFile.conf.cooldown || 3) * 1000;

    if (!timestamps.has(member.id)) {
        if(!bot.config.owners.includes(message.author.id)) {

            timestamps.set(member.id, now);
        }
    }   else    {
        const expirationTime = timestamps.get(member.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeleft = (expirationTime - now) / 1000;
            return message.channel.send(`Calm down bruh - please wait **${timeLefttoFixed(1)}** seconds before trying the command again.`);
        }

        timestamps.set(member.id, now);
        setTimeout(() => timestamps.delete(member.id), cooldownAmount);
    }

    try {
        if (!commandFile) return;
        commandFile.run(bot, message, args);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log(`${sender.tag} (${sender.id}) ran a command: ${cmd}`)
    }
};