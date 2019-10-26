const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');

exports.run = async (bot, msg, args) => {

    await msg.delete().catch(O_o => {});

    const a = msg.guild.roles.get('637405729460060180'); // GameDev
    const b = msg.guild.roles.get('637405735919157279'); // MobileDev
    const c = msg.guild.roles.get('637405738280550400'); // AppDev
    const d = msg.guild.roles.get('637405739769659397'); // WebDev
    const e = msg.guild.roles.get('637405741795377200'); // GraphicDesign

    const filter = (reaction, user) => ['📋', '📜', '📃', '📑', '🎨'].includes(reaction.emoji.name) && user.id === msg.author.id;

    const embed = new RichEmbed()
        .setTitle('Available Roles')
        .setDescription(`
        
        Welcome to **${msg.guild.name}**! You may choose from out list of roles you can join/leave from:

        📋 ${a.toString()}
        📜 ${b.toString()}
        📃 ${c.toString()}
        📑 ${d.toString()}
        🎨 ${e.toString()}

        `)
        .setColor(0xdd9323)
        .setFooter(`Guild ID: ${msg.guild.id}`);

        msg.channel.send(embed).then(async message => {

            await message.react('📋');
            await message.react('📜');
            await message.react('📃');
            await message.react('📑');
            await message.react('🎨');
        });

};

exports.help = {
    name: 'welcomeroles'
};