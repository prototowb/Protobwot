module.exports = async(bot, messageReaction, user) => {

    const msg = messageReaction.message;
    const rolesChannel = msg.guild.channels.find(c => c.name == 'roles');
    const member = msg.guild.members.get(user.id);
    if (member.user.bot) return;

    //ProtoHub Live:

    const py1 = msg.guild.roles.get('630366623987138590'); // Pro
    const py2 = msg.guild.roles.get('636234196091666440'); // experienced
    const py3 = msg.guild.roles.get('636234078911332382'); // advanced
    const py4 = msg.guild.roles.get('630366576868065290'); // learning
    const py5 = msg.guild.roles.get('630365193129558027'); // hobby 

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