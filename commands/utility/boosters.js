const { MessageEmbed } = require("discord.js");
module.exports = {
	name: 'boosters',																					// Name of this command. Required for all commands.
	description: 'Displays a list of members who have boosted the server using Discord Nitro.',			// [Optional] Description of this command for the help command
	aliases: ['boost', `booster`, `nitro`], 															// [Optional] Permits additional command names to be used for this command 
	args: false, 								            										    // [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 																					// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 																						// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		const boostRoleID = process.env.HD_ROLE_SERVERBOOSTER
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
	},
};