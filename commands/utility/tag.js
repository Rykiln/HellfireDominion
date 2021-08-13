const Discord = require("discord.js");
module.exports = {
	name: 'tag',													// Name of this command. Required for all commands.
	description: 'Allow players to apply to open cores.',							// [Optional] Description of this command for the help command
	aliases: [`farmtag`, `apply`],						 			// [Optional] Permits additional command names to be used for this command 
	usage: '<CharacterName> <Trial Role> <URL To ESO Logs>',		// [Optional] Displays how to use this command in the help command.
    // permissions: `MANAGE_ROLES`,									// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    args: true, 													// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 												// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 													// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		const channelLogs = msgObject.guild.channels.cache.get(process.env.HD_CHANNEL_TRIALTAGRESULTS) // #trial-tag-results channel
		const values = args.join(` `).split(/[,]/);
		const requestCharacterName = values[0] || "None Provided";
		const requestCharacterRole = values[1] || "None Provided";
		const requestCharacterLog = values[2] || "None Provided";
		const requestComments = values[3] || "N.A.";
		const embed = new Discord.MessageEmbed()
			.setTitle(`Trial Tag Request`)
			.setAuthor(msgObject.author.tag, msgObject.author.displayAvatarURL())
			.setColor(process.env.HD_COLOR_YELLOW)
			.setThumbnail(`https://images.uesp.net/thumb/7/7e/ON-icon-heraldry-Deities_Akatosh.png/100px-ON-icon-heraldry-Deities_Akatosh.png`)
			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp()
			.addField(`Applicant`, msgObject.author)
			.addField(`Character Name`, requestCharacterName)
			.addField(`Trial Role`, requestCharacterRole)
			.addField(`Trial Logs`, requestCharacterLog)
			.addField(`Comments`, requestComments);
		msgObject.reply(`Thank you ${msgObject.author}! Your request has been submitted for review!`);
		channelLogs.send(embed)
			.then(e => e.react(`✅`))
			.then(e => e.message.react(`❌`))
	},
};
