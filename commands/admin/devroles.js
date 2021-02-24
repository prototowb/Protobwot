const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../config');

exports.run = async (bot, msg, args) => {
	await msg.delete().catch((O_o) => {});

	const a = msg.guild.roles.cache.get('559036576378781726'); // GameDev
	const b = msg.guild.roles.cache.get('635154697963044865'); // MobileDev
	const c = msg.guild.roles.cache.get('635154523752628227'); // AppDev
	const d = msg.guild.roles.cache.get('596657590759456780'); // WebDev
	const e = msg.guild.roles.cache.get('636187174013763584'); // GraphicDesign

	const embed = new MessageEmbed()
		.setTitle('Available Developer Roles')
		.setDescription(
			`

        You may choose out of this set of roles.
        
        🎮 ${a.toString()}
        📲 ${b.toString()}
        💾 ${c.toString()}
        💠 ${d.toString()}
        🎨 ${e.toString()}

        `
		)
		.setColor(0xaaecf0)
		.setFooter(`ID: ${msg.author.id}`);

	msg.channel.send(embed).then(async (message) => {
		await message.react('🎮');
		await message.react('📲');
		await message.react('💾');
		await message.react('💠');
		await message.react('🎨');

		// message
		// 	.awaitReactions(filter, {
		// 		max: 1,
		// 		time: 30000,
		// 		errors: ['time'],
		// 	})
		// 	.then((collected) => {
		// 		const reaction = collected.first();

				
		// 	}).catch(collected => {
		// 		console.log(err);
		// 		return msg.channel.send(`couldn't add your role: **${err.message}**.`);
		// 	});
	});
};

exports.help = {
	name: 'devroles',
	description: 'nope',
	usage: '~help [command]',
	example: '~halp',
};

exports.conf = {
	aliases: ['roles'],
	cooldown: 3,
};
