exports.run = (bot, msg, args) => {

    const response = args.join(' ');
    msg.delete();
    msg.channel.send(response);
};

exports.help = {
    name: 'say'
};