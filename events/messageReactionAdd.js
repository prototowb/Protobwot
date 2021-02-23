module.exports = async(bot, messageReaction, user) => {

    const msg = messageReaction.message;
    const rolesChannel = msg.guild.channels.cache.find(c => c.name === 'mod-spam');
    const welcomeChannel = msg.guild.channels.cache.find(c => c.name == 'welcome');
    const member = msg.guild.members.cache.get(user.id);
    if (member.user.bot) return;

    //################################
    //## ProtoCode Member Auth & Roles
    //################################
    const memberRole = msg.guild.roles.cache.get('635765691374370826');
    const aboutTag = msg.guild.roles.cache.get('636469815267033109');
    const learnTag = msg.guild.roles.cache.get('661313746316034069');
    //const verifiedEmoji = bot.emojis.cache.get('813136374068281344');

    // Verification added Profile Roles
    if (messageReaction.emoji.name === '✅' && msg.channel.id === welcomeChannel.id) {
        member.roles.add(memberRole).catch(error => console.error('Failed to add role: ', error));
        member.roles.add(aboutTag).catch(error => console.error('Failed to add role: ', error));
        member.roles.add(learnTag).catch(error => console.error('Failed to add role: ', error));
        return messageReaction.users.remove().catch(error => console.error('Failed to add role: ', error));
    };

    //#######################
    //## ProtoCode Dev-Roles
    //#######################
    const a = msg.guild.roles.cache.get('559036576378781726'); // GameDev
    const b = msg.guild.roles.cache.get('635154697963044865'); // MobileDev
    const c = msg.guild.roles.cache.get('635154523752628227'); // AppDev
    const d = msg.guild.roles.cache.get('596657590759456780'); // WebDev
    const e = msg.guild.roles.cache.get('636187174013763584'); // GraphicDesign 

    const js1 = msg.guild.roles.cache.get('630345655017275392'); // Pro
    const js2 = msg.guild.roles.cache.get('636233826766553110'); // experienced
    const js3 = msg.guild.roles.cache.get('630345241672548392'); // advanced
    const js4 = msg.guild.roles.cache.get('636233704511111168'); // learning
    const js5 = msg.guild.roles.cache.get('630345013192294428'); // hobby 

    // Dev-Roles Processing
    if (['🎮', '📲', '💾', '💠', '🎨'].includes(messageReaction.emoji.name) && msg.channel.id === rolesChannel.id) {
        switch (messageReaction.emoji.name) {
            case '🎮':
                member.roles.add(a).catch(console.error);
                break;
            case '📲':
                member.roles.add(b).catch(console.error);
                break;
            case '💾':
                member.roles.add(c).catch(console.error);
                break;
            case '💠':
                member.roles.add(d).catch(console.error);
                break;
            case '🎨':
                member.roles.add(e).catch(console.error);
                break;
            default:
                break;
        }
        return;
    };

    // JavaScript
    if (['⏭', '⏩', '➡', '↪', '🔄'].includes(messageReaction.emoji.name) && msg.channel.id == rolesChannel.id) {
        switch (messageReaction.emoji.name) {
            case '⏭':
                member.roles.add(js1).catch(console.error);
                break;
            case '⏩':
                member.roles.add(js2).catch(console.error);
                break;
            case '➡':
                member.roles.add(js3).catch(console.error);
                break;
            case '↪':
                member.roles.add(js4).catch(console.error);
                break;
            case '🔄':
                member.roles.add(js5).catch(console.error);
                break;
            default:
                break;
        }
        return;
    };

};