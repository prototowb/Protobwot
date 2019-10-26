const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');

exports.run = async (bot, msg, args) => {

    await msg.delete().catch(O_o => {});

    const j1 = msg.guild.roles.get('630345655017275392'); // Pro
    const j2 = msg.guild.roles.get('636233826766553110'); // experienced
    const j3 = msg.guild.roles.get('630345241672548392'); // advanced
    const j4 = msg.guild.roles.get('636233704511111168'); // learning
    const j5 = msg.guild.roles.get('630345013192294428'); // hobby 

    const filter = (reaction, user) => ['⏭', '⏩', '➡', '↪', '🔄'].includes(reaction.emoji.name) && user.id === msg.author.id;

    const embed = new RichEmbed()
        .setTitle('Available Roles')
        .setDescription(`
        
        Welcome to **${msg.guild.name}**! You may choose out of listed roles:

        ⏭ ${j1.toString()}
        ⏩ ${j2.toString()}
        ➡ ${j3.toString()}
        ↪ ${j4.toString()}
        🔄 ${j5.toString()}

        `)
        .setColor(0xaaecf0)
        .setFooter(`Guild ID: ${msg.guild.id}`);

        msg.channel.send(embed).then(async message => {

            await message.react('⏭');
            await message.react('⏩');
            await message.react('➡');
            await message.react('↪');
            await message.react('🔄');
        });

};

exports.help = {
    name: 'jsskill'
};