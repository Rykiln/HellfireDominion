const { MessageEmbed } = require("discord.js");
module.exports = {
	// Name of this command. Required for all commands.
	name: 'boosters',
	
	// [Optional] Description of this command for the help command
	description: 'Displays a list of members who have boosted the server using Discord Nitro.',
	
	// [Optional] Permits additional command names to be used for this command 
	aliases: ['boost', `booster`, `nitro`],
	
	// [Optional] Displays how to use this command in the help command.
    // usage: '[@mention]',

	// [Optional] When True - Requires Arguments Be Provided In Message Object
	args: false,
	
	// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	guildOnly: true,
	
	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,
	execute(msgObject, args, client) {
		// Get Guild Information From JSON File
		const guildHellfireDominion = `./Data/HellfireDominion/guild.json`;
		readFile(guildHellfireDominion, function (err, data) {
			if (err) throw err;
			const dataHellfireDominion = JSON.parse(data);
		
			const boostRoleID = dataHellfireDominion.roles.serverBooster;
			const boostColor = msgObject.guild.roles.cache.get(boostRoleID).color;
			const boosters = msgObject.guild.roles.cache.get(boostRoleID).members.map(m => m.user.tag);
			const embed = new MessageEmbed()
				.setTitle(`${msgObject.guild.name} Server Boosters`)
				.setColor(boostColor)
				.setFooter(client.user.username, client.user.displayAvatarURL())
				.setTimestamp()
				.setThumbnail(client.user.displayAvatarURL())
				.addFields(
					{ name: `Boost Level ${msgObject.guild.premiumTier}`, value: `This server has ${msgObject.guild.premiumSubscriptionCount} boosts.` },
					{ name: `Server Boosters`, value: boosters.join(`\n`) }
				)
			msgObject.delete();
			msgObject.channel.send({ embeds: [embed] })
		});
	},
};
