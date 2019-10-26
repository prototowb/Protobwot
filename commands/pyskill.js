const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');

exports.run = async (bot, msg, args) => {

    await msg.delete().catch(O_o => {});

    const py1 = msg.guild.roles.get('630366623987138590'); // Pro
    const py2 = msg.guild.roles.get('636234196091666440'); // experienced
    const py3 = msg.guild.roles.get('636234078911332382'); // advanced
    const py4 = msg.guild.roles.get('630366576868065290'); // learning
    const py5 = msg.guild.roles.get('630365193129558027'); // hobby 

    const filter = (reaction, user) => ['⏭', '⏩', '➡', '↪', '🔄'].includes(reaction.emoji.name) && user.id === msg.author.id;

    const embed = new RichEmbed()
        .setTitle('Available Roles')
        .setDescription(`
        
        Please select a JavaScript skill-level

        ⏭  ${py1.toString()}
        ⏩  ${py2.toString()}
        ➡  ${py3.toString()}
        ↪  ${py4.toString()}
        🔄  ${py5.toString()}

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
    name: 'pyskill'
};