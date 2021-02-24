const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../config');

exports.run = async (bot, msg, args) => {
    await msg.delete().catch(O_o => {});

    const js1 = msg.guild.roles.cache.get('630345655017275392'); // Pro
    const js2 = msg.guild.roles.cache.get('636233826766553110'); // experienced
    const js3 = msg.guild.roles.cache.get('630345241672548392'); // advanced
    const js4 = msg.guild.roles.cache.get('636233704511111168'); // learning
    const js5 = msg.guild.roles.cache.get('630345013192294428'); // hobby 

    const embed = new MessageEmbed()
        .setTitle('Available JavaScript Roles')
        .setDescription(`
        
        Please select a JavaScript skill-level

        ⏭  ${js1.toString()}
        ⏩  ${js2.toString()}
        ➡  ${js3.toString()}
        ↪  ${js4.toString()}
        🔄  ${js5.toString()}

        `)
        .setColor(0xaaecf0)
        .setFooter(`.`);

        msg.channel.send(embed).then(async message => {

            await message.react('⏭');
            await message.react('⏩');
            await message.react('➡');
            await message.react('↪');
            await message.react('🔄');
        });

};

exports.help = {
    name: 'jsskill',
    description: 'nope',
    usage: "~help [command]",
    example: '~halp'
};

exports.conf = {
    aliases: ['jsskill'],
    cooldown: 3
};