const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');

exports.run = async (bot, msg, args) => {

    await msg.delete().catch(O_o => {});

    /* const a = msg.guild.roles.get('637405729460060180'); // 1st role
    const b = msg.guild.roles.get('637405735919157279'); // 2ns role
    const c = msg.guild.roles.get('637405738280550400'); // 3rd role
    const d = msg.guild.roles.get('637405739769659397'); // 4th role
    const e = msg.guild.roles.get('637405741795377200'); // 5th role */

    const a = msg.guild.roles.get('559036576378781726'); // GameDev
    const b = msg.guild.roles.get('635154697963044865'); // MobileDev
    const c = msg.guild.roles.get('635154523752628227'); // AppDev
    const d = msg.guild.roles.get('596657590759456780'); // WebDev
    const e = msg.guild.roles.get('636187174013763584'); // GraphicDesign

    const filter = (reaction, user) => ['🎮', '📲', '💾', '💠', '🎨'].includes(reaction.emoji.name) && user.id === msg.author.id;

    const embed = new RichEmbed()
        .setTitle('Available Roles')
        .setDescription(`
        
        Welcome to the **${msg.guild.name}**! You may choose out of a set of roles you can join/leave from:

        🎮 ${a.toString()}
        📲 ${b.toString()}
        💾 ${c.toString()}
        💠 ${d.toString()}
        🎨 ${e.toString()}

        `)
        .setColor(0xaaecf0)
        .setFooter(`Guild ID: ${msg.guild.id}`);

        msg.channel.send(embed).then(async message => {

            await message.react('🎮');
            await message.react('📲');
            await message.react('💾');
            await message.react('💠');
            await message.react('🎨');
        });

};

exports.help = {
    name: 'devroles'
};