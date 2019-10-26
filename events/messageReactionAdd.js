module.exports = async (bot, messageReaction, user) => {

    const msg = messageReaction.message;
    const channel = msg.guild.channels.find(c => c.name == 'roles');
    const member = msg.guild.members.get(user.id);
    if (member.user.bot) return;

    const a = msg.guild.roles.get('559036576378781726'); // GameDev
    const b = msg.guild.roles.get('635154697963044865'); // MobileDev
    const c = msg.guild.roles.get('635154523752628227'); // AppDev
    const d = msg.guild.roles.get('596657590759456780'); // WebDev
    const e = msg.guild.roles.get('636187174013763584'); // GraphicDesign

    if (['📋', '📜', '📃', '📑', '🎨'].includes(messageReaction.emoji.name) && msg.channel.id === channel.id) {
        switch (messageReaction.emoji.name) {
            case '📋':
                member.addRole(a).catch(console.error);
                break;
            case '📜':
                member.addRole(b).catch(console.error);
                break;
            case '📃':
                member.addRole(c).catch(console.error);
                break;
            case '📑':
                member.addRole(d).catch(console.error);
                break;
            case '🎨':
                member.addRole(e).catch(console.error);
                break;
            default:
                break;                                              
        }
    }
};