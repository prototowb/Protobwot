const { RichEmbed } = require('discord.js');   
const fetch = require('node-fetch');

exports.run = async (bot, msg, args) => {
    
    let meow = await fetch('http://aws.random.cat/meow')
        .then(res => res.json())
        .then(json => json.file);

    let embed = new RichEmbed()
        .setAuthor(msg.member.user.tag, msg.member.user.avatarURL)
        .setColor('0x9c6303')
        .setImage(meow)
        .setFooter('A random kitten!')
        .setTimestamp();

    msg.channel.send(embed);

};

exports.help = {
    name: 'meow'
};