module.exports = (bot, member) => {
    bot.once("guildMemberAdd", member => {

        let welcomeChannel = member.guild.channels.find(channel => channel.name === "arrival");
        welcomeChannel.send("\n" +
        `██▓▒░ **${member.displayName}** has joined Proto**Hub** ░▒▓██\n` +
        "Welcome <@" + member.id + ">! You are our " + `${member.guild.memberCount}.` + "Member! :tada:\n" +
        "឵឵ ឵឵឵\n");
        
        //let memberRole = member.guild.roles.find(role => role.id == "");
        //member.addRole(memberRole);
        
        //member.send("");
    });

};
