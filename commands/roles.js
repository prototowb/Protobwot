const { RichEmbed } = require('discord.js');
const { prefix } = require('../config');

exports.run = async (bot, msg, args) => {

    await msg.delete().catch(O_o=>{});

    const a = msg.guild.roles.get('637405729460060180'); // GameDev
    const b = msg.guild.roles.get('637405735919157279'); // MobileDev
    const c = msg.guild.roles.get('637405738280550400'); // AppDev
    const d = msg.guild.roles.get('637405739769659397'); // WebDev
    const e = msg.guild.roles.get('637405741795377200'); // GraphicDesign

    const filter = (reaction, user) => ['📋', '📜', '📃', '📑', '🗒'].includes(reaction.emoji.name) && user.id === msg.author.id;

    const embed = new RichEmbed()
        .setTitle('Available Roles')
        .setDescription(`
        
        📋 ${a.toString()}
        📜 ${b.toString()}
        📃 ${c.toString()}
        📑 ${d.toString()}
        🗒 ${e.toString()}

        `)
        .setColor(0xaaecf0)
        .setFooter(`ID: ${msg.author.id}`);


    msg.channel.send(embed).then(async message => {

        await message.react('📋');
        await message.react('📜');
        await message.react('📃');
        await message.react('📑');
        await message.react('🗒');

        message.awaitReactions(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
        }).then(collected => { 

            const reaction = collected.first();

            switch (reaction.emoji.name) {
                case '📋':
                    if (msg.member.roles.has(a.id)) {
                        message.delete(2000);
                        return msg.channel.send('You are already in this role.').then(m => m.delete(3000));
                    }
                    msg.member.addRole(a).catch(err => {
                        console.log(err);
                        return msg.channel.send(`Error adding you to this role: **${err.message}**.`)
                    });
                    msg.channel.send(`You have been added to the **${a.name}** role!`).then(m => m.delete(3000));
                    message.delete(); // <<<-------- ?*
                    break;
                case '📜':
                        if (msg.member.roles.has(b.id)) {
                            message.delete(2000);
                            return msg.channel.send('You are already in this role.').then(m => m.delete(3000));
                        }
                        msg.member.addRole(b).catch(err => {
                            console.log(err);
                            return msg.channel.send(`Error adding you to this role: **${err.message}**.`)
                        });
                        msg.channel.send(`You have been added to the **${b.name}** role!`).then(m => m.delete(3000));
                        message.delete(); // <<<-------- ?*
                    break;
                case '📃':
                        if (msg.member.roles.has(c.id)) {
                            message.delete(2000);
                            return msg.channel.send('You are already in this role.').then(m => m.delete(3000));
                        }
                        msg.member.addRole(c).catch(err => {
                            console.log(err);
                            return msg.channel.send(`Error adding you to this role: **${err.message}**.`)
                        });
                        msg.channel.send(`You have been added to the **${c.name}** role!`).then(m => m.delete(3000));
                        message.delete(); // <<<-------- ?*
                    break;
                case '📑':
                        if (msg.member.roles.has(d.id)) {
                            message.delete(2000);
                            return msg.channel.send('You are already in this role.').then(m => m.delete(3000));
                        }
                        msg.member.addRole(d).catch(err => {
                            console.log(err);
                            return msg.channel.send(`Error adding you to this role: **${err.message}**.`)
                        });
                        msg.channel.send(`You have been added to the **${d.name}** role!`).then(m => m.delete(3000));
                        message.delete(); // <<<-------- ?*
                    break;
                case '🗒':
                        if (msg.member.roles.has(e.id)) {
                            message.delete(2000);
                            return msg.channel.send('You are already in this role.').then(m => m.delete(3000));
                        }
                        msg.member.addRole(e).catch(err => {
                            console.log(err);
                            return msg.channel.send(`Error adding you to this role: **${err.message}**.`)
                        });
                        msg.channel.send(`You have been added to the **${e.name}** role!`).then(m => m.delete(3000));
                        message.delete(); // <<<-------- ?*
                    break;
            }

        }).catch(collected => {
            return msg.channel.send(`I couldn't add you to this role.`);
        });
    });

};

exports.help = {
    name: 'roles'
};