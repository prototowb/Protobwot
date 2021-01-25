module.exports = bot => {
    console.log("Connected as " + bot.user.tag);
    bot.user.setActivity("you guys", {type: "WATCHING"});

    const roles = bot.channels.find(c => c.name == 'roles'); //define permanent role picker channel
    const welcome = bot.channels.find(c => c.name == 'welcome'); //define permanent "verify" welcome channel

    const fetchedChannels = [roles, welcome];
    fetchedChannels.forEach(c => {
        c.fetchMessages({ limit: 10 }).then(collected => console.log(`Fetched ${collected.size} message in ${c.name}.`));
    });
};
