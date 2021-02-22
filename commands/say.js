exports.run = (bot, msg, args) => {

    if (msg.member.roles.cache.has('636262882618769428')) {

        const response = args.join(' ');
        msg.delete();
        msg.channel.send(response);
    } else {
        msg.delete();
        msg.channel.send('#...#').then(m => m.delete({ timeout: 5000 }));
    }
};

exports.help = {
    name: 'say'
};