module.exports = (bot, member) => {
    bot.once("guildMemberAdd", member => {

        const minicatpat = bot.emojis.cache.find(emoji => emoji.name === "minicatpat");
        let welcomeChannel = member.guild.channels.cache.find(channel => channel.name === "welcome");
        welcomeChannel.send("\n" +
        `░▒▓██  **${member.displayName}** has joined Proto**Code** :tada: \n` +
        "Welcome <@" + member.id + ">! You are our " + `${member.guild.memberCount}.` + "Member! ${minicatpat} \n" +
        "឵឵ ឵឵឵\n");
        
        //let memberRole = member.guild.roles.find(role => role.id == "");
        //member.roles.add(memberRole);
        
        //member.send("");
    });

};
