module.exports = (bot, member) => {
    bot.on("guildMemberAdd", member => {

        let welcomeChannel = member.guild.channels.find(channel => channel.name === "arrival");
        welcomeChannel.send("឵឵ ឵឵឵");
        welcomeChannel.send(`██▓▒░ ${member.displayName} has joined **${member.guild}** ░▒▓██`);
        welcomeChannel.send("Welcome <@" + member.id + ">! You are our " +`${member.guild.memberCount}.`+"Member! :tada:");
        welcomeChannel.send("឵឵ ឵឵឵");
        
        //let memberRole = member.guild.roles.find(role => role.id == "");
        //member.addRole(memberRole);
        
        //member.send("");
    });

};