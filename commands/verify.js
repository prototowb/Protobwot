const Discord = require(`discord.js`);
const { prefix } = require('../config');

exports.run = (bot, msg, args) => {

    msg.delete({ timeout: 500 })

    const embed = new Discord.MessageEmbed()
        .setDescription(`Hello! Welcome to the ${msg.guild.name} Discord server! Please read the <#659499488427376656> and react to this message to verify you have agreed with them. Then you will automatically receive your member role.`)
        .setColor(0xaaecf0);

    msg.channel.send(embed).then(m => m.react('✅')).catch(console.error);
};

exports.help = {
    name: 'verify'
};