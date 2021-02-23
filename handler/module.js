const Discord = require("discord.js");
const fs = require("fs");

modeule.exports = bot => {
    bot.commands = new Discord.Collection();
    bot.aliases = new Discord.Collection();
    bot.helps = new Discord.Collection();

    fs.readddir("../commands", (err, categories) => {
        if (err) console.log(err)
        console.log(`found total ${categories.length} categories.`);

        categories.forEach(category => {
            let moduleConf = require(`../commands/${category}/module.json`);
            moduleConf.path = `./commands/${category}`;
            moduleConf.cmds = [];
            if (!moduleConf) return;
            bot.helps.set(category, moduleConf);

            fs.readdir(`./commands/${category}`, (err, files) => {
                console.log(`found total ${files.length - 1} command(s) from ${category}.`);
                if (err) console.log(err);
                let commands = new Array();

                files.forEach(file => {
                   if (!file.endsWith(".js")) return;
                   let prop = require(`../commands/${category}/${file}`);
                   let cmdName = file.split(".")[0];

                   bot.commands.set(prophelp.name, prop)

                   prop.conf.aliases.forEach(alias => {
                       bot.aliases.set(alias, prop.help.name);
                   });

                   bot.helps.get(category).cmds.push(prop.help.name);
                    
                });
            });
        });
    });
};