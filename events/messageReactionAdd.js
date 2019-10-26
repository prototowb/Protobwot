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
    const verifiedTag = msg.guild.roles.get('635765691374370826');
    const aboutTag = msg.guild.roles.get('636469815267033109');
    const gamesTag = msg.guild.roles.get('635755204884561940');
    
    const a = msg.guild.roles.get('559036576378781726'); // GameDev
    const b = msg.guild.roles.get('635154697963044865'); // MobileDev
    const c = msg.guild.roles.get('635154523752628227'); // AppDev
    const d = msg.guild.roles.get('596657590759456780'); // WebDev
    const e = msg.guild.roles.get('636187174013763584'); // GraphicDesign 

    const js1 = msg.guild.roles.get('630345655017275392'); // Pro
    const js2 = msg.guild.roles.get('636233826766553110'); // experienced
    const js3 = msg.guild.roles.get('630345241672548392'); // advanced
    const js4 = msg.guild.roles.get('636233704511111168'); // learning
    const js5 = msg.guild.roles.get('630345013192294428'); // hobby 


    //Verify
    if (messageReaction.emoji.name == '✅' && msg.channel.id == welcomeChannel.id) {
        member.addRole(verifiedTag).catch(console.error);
        member.addRole(aboutTag).catch(console.error);
        member.addRole(gamesTag).catch(console.error);
        messageReaction.remove(member).catch(console.error);
        return messageReaction.remove(member).catch(console.error);
    };
  
    //Dev-roles
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
    };

    //Skill-Set JavaScript
    if (['⏭', '⏩', '➡', '↪', '🔄'].includes(messageReaction.emoji.name) && msg.channel.id === rolesChannel.id) {
        switch (messageReaction.emoji.name) {
            case '⏭':
                member.addRole(js1).catch(console.error);
                break;
            case '⏩':
                member.addRole(js2).catch(console.error);
                break;
            case '➡':
                member.addRole(js3).catch(console.error);
                break;
            case '↪':
                member.addRole(js4).catch(console.error);
                break;
            case '🔄':
                member.addRole(js5).catch(console.error);
                break;
            default:
                break;                                              
        }
        return;
    };

    //Skill-Set Python
    if (['⏭', '⏩', '➡', '↪', '🔄'].includes(messageReaction.emoji.name) && msg.channel.id === rolesChannel.id) {
        switch (messageReaction.emoji.name) {
            case '⏭':
                member.addRole(py1).catch(console.error);
                break;
            case '⏩':
                member.addRole(py2).catch(console.error);
                break;
            case '➡':
                member.addRole(py3).catch(console.error);
                break;
            case '↪':
                member.addRole(py4).catch(console.error);
                break;
            case '🔄':
                member.addRole(py5).catch(console.error);
                break;
            default:
                break;                                              
        }
        return;
    };
};