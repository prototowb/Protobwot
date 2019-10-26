module.exports = bot => {
    console.log("Connected as " + bot.user.tag);
    bot.user.setActivity("FREE HONGKONG", {type: "WATCHING"});

    const welcome = bot.channels.find(c => c.name == 'welcome');
    welcome.fetchMessages({ limit: 10}).then(collected => console.log('Fetched' + collected.size + 'messages.')).catch(console.err);
};