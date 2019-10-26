const Discord = require(`discord.js`);
const { prefix } = require('../config');

exports.run = (bot, msg, args) => {

    const { RichEmbed } = require('discord.js');

    const embed = new Discord.RichEmbed()
        .setDescription(`Hello! Welcome to ${msg.guild.name}! Please read the #rules-and-ℹnfo channel and react to this message to verify you have agreed with them. Then you will automatically receive your member role.`)
        .setColor(0xaaecf0);

    msg.channel.send(embed).then(m => m.react('✅')).catch(console.error);
};

exports.help = {
    name: 'verifymessage'
};