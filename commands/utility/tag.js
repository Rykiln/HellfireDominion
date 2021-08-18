const { MessageEmbed } = require("discord.js");
module.exports = {
	name: 'tag',													// Name of this command. Required for all commands.
	description: 'Allow players to apply to open cores.',			// [Optional] Description of this command for the help command
	aliases: [`farmtag`, `apply`],						 			// [Optional] Permits additional command names to be used for this command 
	usage: '<CharacterName> <Trial Role> <URL To ESO Logs>',		// [Optional] Displays how to use this command in the help command.
	// permissions: `MANAGE_ROLES`,									// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	args: true, 													// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 												// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 													// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		const channelLogs = msgObject.guild.channels.cache.get(process.env.HD_CHANNEL_TRIALTAGRESULTS) // #open-cores-application-feedback channel
		// const channelLogs = msgObject.guild.channels.cache.get(`833481968318545940`)
		const values = args.join(` `).split(/[,]/);

		const displayEmptyMessage = "None Provided";
		const requestCharacterName = values[0].trim() || displayEmptyMessage;
		const requestCharacterRole = values[1].trim() || displayEmptyMessage;
		const requestCharacterLog = values[2].trim() || displayEmptyMessage;
		const requestComments = values[3].trim() || displayEmptyMessage;

		console.log(msgObject.author.tag);
		console.log(msgObject.author.toString());
		console.log(requestCharacterName);
		console.log(requestCharacterRole);
		console.log(requestCharacterLog);
		console.log(requestComments);

		const embed = new MessageEmbed()
			.setTitle(`Trial Tag Request`)
			.setAuthor(msgObject.author.tag.toString(), msgObject.author.displayAvatarURL())
			.setColor(0xffff00)
			.setThumbnail(`https://images.uesp.net/thumb/7/7e/ON-icon-heraldry-Deities_Akatosh.png/100px-ON-icon-heraldry-Deities_Akatosh.png`)
			// .setFooter(client.user.username, client.user.displayAvatarURL())
			// .setTimestamp()
			.addFields(
				{ name: `Applicant`, value: msgObject.author.toString(), inline: false },
				{ name: `Character Name`, value: requestCharacterName.toString(), inline: false },
				{ name: `Trial Role`, value: requestCharacterRole.toString(), inline: false },
				{ name: `Trial Logs`, value: requestCharacterLog.toString(), inline: false },
				{ name: `Comments`, value: requestComments.toString(), inline: false }
			)
		
		channelLogs.send({ embeds: [embed] })
			.then(e => e.react(`✅`))
			.then(e => e.message.react(`❌`));
		msgObject.reply({ content: `Thank you ${msgObject.author}! Your request has been submitted for review!` });
	},
};
