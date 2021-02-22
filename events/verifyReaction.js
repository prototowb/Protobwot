module.exports = async(bot, messageReaction, user) => {

    const msg = messageReaction.message;
    const welcomeChannel = msg.guild.channels.cache.find(c => c.name == 'welcome');
    const member = msg.guild.members.cache.resolve(user.id);
    if (member.user.bot) return;

    const memberRole = msg.guild.roles.cache.resolve('635765691374370826');
    const aboutTag = msg.guild.roles.cache.resolve('636469815267033109');
    const learnTag = msg.guild.roles.cache.resolve('661313746316034069');

    const verifiedEmoji = bot.emojis.cache.get('813136374068281344');

    //Verify
    if (messageReaction.emoji.id === verifiedEmoji.id && msg.channel.id === welcomeChannel) {
        member.roles.add(memberRole).catch(console.error);
        member.roles.add(aboutTag).catch(console.error);
        member.roles.add(learnTag).catch(console.error);
        return messageReaction.users.remove().catch(console.error);
    };
};