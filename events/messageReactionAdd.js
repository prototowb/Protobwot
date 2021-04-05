module.exports = async(bot, messageReaction, user) => {

    const msg = messageReaction.message;
    const rolesChannel = msg.guild.channels.cache.get('652120907279761408');
    const welcomeChannel = msg.guild.channels.cache.get('811372639133630475');
    const member = msg.guild.members.cache.get(user.id);
    if (member.user.bot) return;

    //################################
    //## ProtoCode Member Auth & Roles
    //################################
    const memberRole = msg.guild.roles.cache.get('635765691374370826');
    const aboutTag = msg.guild.roles.cache.get('636469815267033109');
    const learnTag = msg.guild.roles.cache.get('661313746316034069');
    //const verifiedEmoji = bot.emojis.cache.get('813136374068281344');

    // Verification **added** Profile Roles
    if (messageReaction.emoji.name === '✅' && msg.channel.id === welcomeChannel.id) {
        member.roles.add(memberRole).catch(error => console.error('Failed to add role: ', error));
        member.roles.add(aboutTag).catch(error => console.error('Failed to add role: ', error));
        member.roles.add(learnTag).catch(error => console.error('Failed to add role: ', error));
        return messageReaction.users.remove(member).catch(error => console.error('Failed to remove reaction: ', error));
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
                if (member.roles.cache.has(a.id)) {
                    //message.delete(2000);
                    return msg.channel
                        .send('You are already in this role.')
                        .then((m) => m.delete({ timeout: 2100 }));
                }
                member.roles.add(a).catch((err) => {
                    console.log(err);
                    return msg.channel.send(`Error adding you to this role: **${err.message}**.`);
                });
                msg.channel
                    .send(`You have been **added** to the **${a.name}** role!`)
                    .catch((err) => {
                        console.log(err);
                    })
                    .then((m) => m.delete({ timeout: 2100 }));
                break;
            case '📲':
                if (member.roles.cache.has(b.id)) {
                    //message.delete(2000);
                    return msg.channel
                        .send('You are already in this role.')
                        .then((m) => m.delete({ timeout: 2100 }));
                }
                member.roles.add(b).catch((err) => {
                    console.log(err);
                    return msg.channel.send(`Error adding you to this role: **${err.message}**.`);
                });
                msg.channel
                    .send(`You have been **added** to the **${b.name}** role!`)
                    .catch((err) => {
                        console.log(err);
                    })
                    .then((m) => m.delete({ timeout: 2100 }));
                break;
            case '💾':
                if (member.roles.cache.has(c.id)) {
                    //message.delete(2000);
                    return msg.channel
                        .send('You are already in this role.')
                        .then((m) => m.delete({ timeout: 2100 }));
                }
                member.roles.add(c).catch((err) => {
                    console.log(err);
                    return msg.channel.send(`Error adding you to this role: **${err.message}**.`);
                });
                msg.channel
                    .send(`You have been **added** to the **${c.name}** role!`)
                    .catch((err) => {
                        console.log(err);
                    })
                    .then((m) => m.delete({ timeout: 2100 }));
                break;
            case '💠':
                if (member.roles.cache.has(d.id)) {
                    //message.delete(2000);
                    return msg.channel
                        .send('You are already in this role.')
                        .then((m) => m.delete({ timeout: 2100 }));
                }
                member.roles.add(d).catch((err) => {
                    console.log(err);
                    return msg.channel.send(`Error adding you to this role: **${err.message}**.`);
                });
                msg.channel
                    .send(`You have been **added** to the **${d.name}** role!`)
                    .catch((err) => {
                        console.log(err);
                    })
                    .then((m) => m.delete({ timeout: 2100 }));
                break;
            case '🎨':
                if (member.roles.cache.has(e.id)) {
                    //message.delete(2000);
                    return msg.channel
                        .send('You are already in this role.')
                        .then((m) => m.delete({ timeout: 2100 }));
                }
                member.roles.add(e).catch((err) => {
                    console.log(err);
                    return msg.channel.send(`Error adding you to this role: **${err.message}**.`);
                });
                msg.channel
                    .send(`You have been **added** to the **${e.name}** role!`)
                    .catch((err) => {
                        console.log(err);
                    })
                    .then((m) => m.delete({ timeout: 2100 }));
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