module.exports = async (bot, messageReaction, user) => {

    const msg = messageReaction.message;
    const rolesChannel = msg.guild.channels.find(c => c.name == 'roles');
    const welcomeChannel = msg.guild.channels.find(c => c.name == 'welcome');
    const member = msg.guild.members.get(user.id);
    if (member.user.bot) return;
/*  
    const a = msg.guild.roles.get('637405729460060180'); // GameDev
    const b = msg.guild.roles.get('637405735919157279'); // MobileDev
    const c = msg.guild.roles.get('637405738280550400'); // AppDev
    const d = msg.guild.roles.get('637405739769659397'); // WebDev
    const e = msg.guild.roles.get('637405741795377200'); // GraphicDesign

    const verify = msg.guild.roles.get('637606594367979530'); // Verified */

    //ProtoHub Live:
    const verify = msg.guild.roles.get('635765691374370826');
    
    const a = msg.guild.roles.get('559036576378781726'); // GameDev
    const b = msg.guild.roles.get('635154697963044865'); // MobileDev
    const c = msg.guild.roles.get('635154523752628227'); // AppDev
    const d = msg.guild.roles.get('596657590759456780'); // WebDev
    const e = msg.guild.roles.get('636187174013763584'); // GraphicDesign 

    if (messageReaction.emoji.name == '✅' && msg.channel.id == welcomeChannel.id) {
        member.addRole(verify).catch(console.error);
        messageReaction.remove(member).catch(console.error);
        return messageReaction.remove(member).catch(console.error);
    }

    

    if (['🎮', '📲', '💾', '💠', '🎨'].includes(messageReaction.emoji.name) && msg.channel.id === rolesChannel.id) {
        switch (messageReaction.emoji.name) {
            case '🎮':
                member.addRole(a).catch(console.error);
                break;
            case '📲':
                member.addRole(b).catch(console.error);
                break;
            case '💾':
                member.addRole(c).catch(console.error);
                break;
            case '💠':
                member.addRole(d).catch(console.error);
                break;
            case '🎨':
                member.addRole(e).catch(console.error);
                break;
            default:
                break;                                              
        }
        return;
    }
};