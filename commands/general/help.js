const Discord = require("discord.js");

exports.run = (bot, msg, args) => {


    if (!args[0]) {
        let module = bot.helps.array();

        if (!bot.config.owners.includes(msg.author.id)) module = bot.helps.array().filter(x => !x.hide);
        const embed = new Discord.MessageEmbed()
        .setColor(0x1d1d1d)
        .setTimestamp(new Date())
        .setDescription(`um..? try \`${bot.config.prefix}help [command] to get more specific information about a command\``)
        .setTitle("A Bot")

        for (const mod of module) {
            embed.addField(`${mod.name}`, mod.cmds.map(x => `\`${x}\``).join(" | "));
        }

        return msg.channel.send(embed);

    } else {

        let cmd = args[0];

        if (bot.commands.has(cmd) || bot.commands.get(bot.aliases.get(cmd))) {
            let command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
            let name = command.help.name;
            let desc = command.help.description;
            let cooldown = command.conf.cooldown + " seconds";
            let aliases = command.conf.aliases.join(", ") ? command.conf.aliases.join(", ") : "No aliases provided.";
            let usage = command.help.usage ? command.help.usage : "No usage provided.";
            let example = command.help.example ? command.help.example : "No example provided.";

            let embed = new Discord.MessageEmbed()
            .setColor(0x7289da)
            .setTitle(name)
            .setDescription(desc)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter("[] optional, <> required. Don't include these while typing a command.")
            .addField("Cooldown", cooldown)
            .addField("Aliases", aliases, true)
            .addField("Usage", usage, true)
            .addField("Example", example, true)

            return msg.channel.send(embed);
        } else {
            // if wrong command ->
            return msg.channel.send({embed: {color: "RED", description: "Unknown command."}});
        };
    };
};

exports.help = {
    name: 'help',
    description: 'hope it helps.',
    usage: "~help [command]",
    example: '~halp',
    execute() {
        msg.channel.send('Plong~').catch(console.error);
    }
};

exports.conf = {
    aliases: ['help','halp'],
    cooldown: 3
};