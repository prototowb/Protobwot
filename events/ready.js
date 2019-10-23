module.exports = bot => {
    console.log("Connected as " + bot.user.tag);
    bot.user.setActivity("FREE HONGKONG", {type: "WATCHING"});
};