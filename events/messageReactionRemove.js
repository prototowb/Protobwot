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
    const e = msg.guild.roles.get('637405741795377200'); // GraphicDesign */

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

    const py1 = msg.guild.roles.get('630366623987138590'); // Pro
    const py2 = msg.guild.roles.get('636234196091666440'); // experienced
    const py3 = msg.guild.roles.get('636234078911332382'); // advanced
    const py4 = msg.guild.roles.get('630366576868065290'); // learning
    const py5 = msg.guild.roles.get('630365193129558027'); // hobby 

    if (['🎮', '📲', '💾', '💠', '🎨'].includes(messageReaction.emoji.name) && msg.channel.id === rolesChannel.id) {
        switch (messageReaction.emoji.name) {
            case '🎮':
                member.removeRole(a).catch(console.error);
                break;
            case '📲':
                member.removeRole(b).catch(console.error);
                break;
            case '💾':
                member.removeRole(c).catch(console.error);
                break;
            case '💠':
                member.removeRole(d).catch(console.error);
                break;
            case '🎨':
                member.removeRole(e).catch(console.error);
                break;
            default:
                break;                                              
        }
        return;
    };

    //Skill-Set JavaScript
    if (['⏭', '⏩', '➡', '↪', '🔄'].includes(messageReaction.emoji.name) && embed.title.includes(`JavaScript`)) {
        switch (messageReaction.emoji.name) {
            case '⏭':
                member.removeRole(js1).catch(console.error);
                break;
            case '⏩':
                member.removeRole(js2).catch(console.error);
                break;
            case '➡':
                member.removeRole(js3).catch(console.error);
                break;
            case '↪':
                member.removeRole(js4).catch(console.error);
                break;
            case '🔄':
                member.removeRole(js5).catch(console.error);
                break;
            default:
                break;                                              
        }
        return;
    };

    //Skill-Set Python
    if (['⏭', '⏩', '➡', '↪', '🔄'].includes(messageReaction.emoji.name) && embed.title.includes(`Python`)) {
        switch (messageReaction.emoji.name) {
            case '⏭':
                member.removeRole(py1).catch(console.error);
                break;
            case '⏩':
                member.removeRole(py2).catch(console.error);
                break;
            case '➡':
                member.removeRole(py3).catch(console.error);
                break;
            case '↪':
                member.removeRole(py4).catch(console.error);
                break;
            case '🔄':
                member.removeRole(py5).catch(console.error);
                break;
            default:
                break;                                              
        }
        return;
    };
};