exports.run = (bot, msg, args) => {
    msg.channel.send('Pong!').catch(console.error);
};

exports.help = {
    name: 'ping',
    description: 'nope',
    usage: "~help [command]",
    example: '~halp'
};

exports.conf = {
    aliases: ['ping'],
    cooldown: 3
};