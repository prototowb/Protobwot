const { RichEmbed } = require('discord.js');   
const fetch = require('node-fetch');

exports.run = async (bot, msg, args) => {
    
    let doggo = await fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => json.message);

    let embed = new RichEmbed()
        .setAuthor(msg.member.user.tag, msg.member.user.avatarURL)
        .setColor(0x9c6303)
        .setImage(doggo)
        .setFooter('A random doggo!')
        .setTimestamp();

    msg.channel.send(embed);

};

exports.help = {
    name: 'doggo'
};