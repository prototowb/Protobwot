module.exports = async (bot, messageReaction, user) => {

    const msg = messageReaction.message;
    const channel = msg.guild.channels.find(c => c.name == 'welcome');
    const member = msg.guild.members.get(user.id);
    if (member.user.bot) return;

    const a = msg.guild.roles.get('637405729460060180'); // GameDev
    const b = msg.guild.roles.get('637405735919157279'); // MobileDev
    const c = msg.guild.roles.get('637405738280550400'); // AppDev
    const d = msg.guild.roles.get('637405739769659397'); // WebDev
    const e = msg.guild.roles.get('637405741795377200'); // GraphicDesign

    if (['📋', '📜', '📃', '📑', '🗒'].includes(messageReaction.emoji.name) && msg.channel.id === channel.id) {
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
            case '🗒':
                member.addRole(e).catch(console.error);
                break;
            default:
                break;                                              
        }
    }
};