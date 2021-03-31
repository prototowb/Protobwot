module.exports = async(bot, messageReaction, user) => {

    const msg = messageReaction.message;
    const rolesChannel = msg.guild.channels.cache.get('652120907279761408');
    const member = msg.guild.members.cache.get(user.id);
    if (member.user.bot) return;

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

    const py1 = msg.guild.roles.cache.get('630366623987138590'); // Pro
    const py2 = msg.guild.roles.cache.get('636234196091666440'); // experienced
    const py3 = msg.guild.roles.cache.get('636234078911332382'); // advanced
    const py4 = msg.guild.roles.cache.get('630366576868065290'); // learning
    const py5 = msg.guild.roles.cache.get('630365193129558027'); // hobby 

    if (['🎮', '📲', '💾', '💠', '🎨'].includes(messageReaction.emoji.name) && msg.channel.id === rolesChannel.id) {
        switch (messageReaction.emoji.name) {
            case '🎮':
                member.roles.remove(a).catch(console.error);
                msg.channel
                    .send(`You have been **removed** from the **${a.name}** role!`)
                    .catch((err) => {
                        console.log(err);
                    })
                    .then((m) => m.delete({ timeout: 2100 }));
                break;
            case '📲':
                member.roles.remove(b).catch(console.error);
                msg.channel
                    .send(`You have been **removed** from the **${b.name}** role!`)
                    .catch((err) => {
                        console.log(err);
                    })
                    .then((m) => m.delete({ timeout: 2100 }));
                break;
            case '💾':
                member.roles.remove(c).catch(console.error);
                msg.channel
                    .send(`You have been **removed** from the **${c.name}** role!`)
                    .catch((err) => {
                        console.log(err);
                    })
                    .then((m) => m.delete({ timeout: 2100 }));
                break;
            case '💠':
                member.roles.remove(d).catch(console.error);
                msg.channel
                    .send(`You have been **removed** from the **${d.name}** role!`)
                    .catch((err) => {
                        console.log(err);
                    })
                    .then((m) => m.delete({ timeout: 2100 }));
                break;
            case '🎨':
                member.roles.remove(e).catch(console.error);
                msg.channel
                    .send(`You have been **removed** from the **${e.name}** role!`)
                    .catch((err) => {
                        console.log(err);
                    })
                    .then((m) => m.delete({ timeout: 2100 }));
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
                member.roles.remove(js1).catch(console.error);
                break;
            case '⏩':
                member.roles.remove(js2).catch(console.error);
                break;
            case '➡':
                member.roles.remove(js3).catch(console.error);
                break;
            case '↪':
                member.roles.remove(js4).catch(console.error);
                break;
            case '🔄':
                member.roles.remove(js5).catch(console.error);
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
                member.roles.remove(py1).catch(console.error);
                break;
            case '⏩':
                member.roles.remove(py2).catch(console.error);
                break;
            case '➡':
                member.roles.remove(py3).catch(console.error);
                break;
            case '↪':
                member.roles.remove(py4).catch(console.error);
                break;
            case '🔄':
                member.roles.remove(py5).catch(console.error);
                break;
            default:
                break;
        }
        return;
    };
};