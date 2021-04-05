module.exports = (bot, member) => {
    bot.once("guildMemberAdd", member => {

        const catcoolblush = bot.emojis.cache.find(emoji => emoji.name === "catcoolblush");
        let arrivalChannel = bot.channels.cache.get('651816461983285268');
        arrivalChannel.send("\n" +
        `░▒▓██  **${member.displayName}** has joined proto**code** :tada: \n` +
        "Welcome <@" + member.id + ">! You are our " + `${member.guild.memberCount}.` + `Member! ${catcoolblush} \n` +
        "឵឵ ឵឵឵\n");
        
        //let memberRole = member.guild.roles.find(role => role.id == "");
        //member.roles.add(memberRole);
        
        //member.send("");
    });

};
