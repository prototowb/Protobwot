module.exports = bot => {
    
    console.log("Connected as " + bot.user.tag);
    bot.user.setActivity(`${bot.config.prefix}help | soon.tm` ,{type: "WATCHING"});

    const roles = bot.channels.cache.get('652120907279761408'); //define permanent role picker channel
    const welcome = bot.channels.cache.get('811372639133630475'); //define permanent "verify" welcome channel

    const fetchedChannels = [roles, welcome];
    fetchedChannels.forEach(c => {
        c.messages.fetch().then(collected => console.log(`Fetched ${collected.size} message in ${c.name}.`)).catch(console.error);
     });
};
