const Discord = require(`discord.js`);
const weather = require('weather-js');
exports.run = (bot, msg, args) => {

    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
        if (err) msg.channel.send(err);

        var current = result[0].current;
        var location = result[0].location;


        const embed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(0xaaecf0)
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', location.degreetype, true)
            .addField('Temperature', `${current.temperature} Degrees`, true)
            .addField('Feels like', `${current.feelslike} Degrees`, true)
            .addField('Winds', current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)

            msg.channel.send({embed});
    });
};

exports.help = {
    name: 'weather'
};