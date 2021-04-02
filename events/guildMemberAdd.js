module.exports = (bot, member) => {
    bot.once("guildMemberAdd", member => {

        const minicatpat = bot.emojis.cache.find(emoji => emoji.name === "minicatpat");
        let welcomeChannel = member.guild.channels.cache.get('651816461983285268');
        welcomeChannel.send("\n" +
        `░▒▓██  **${member.displayName}** has joined proto**pode** :tada: \n` +
        "Welcome <@" + member.id + ">! You are our " + `${member.guild.memberCount}.` + `Member! ${minicatpat} \n` +
        "឵឵ ឵឵឵\n");
        
        //let memberRole = member.guild.roles.find(role => role.id == "");
        //member.roles.add(memberRole);
        
        //member.send("");
    });

};
