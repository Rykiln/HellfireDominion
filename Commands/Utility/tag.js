const { MessageEmbed } = require("discord.js");
module.exports = {
	// Name of this command. Required for all commands.
	name: 'tag',

	// [Optional] Description of this command for the help command
	description: 'Allow players to apply to open cores.',

	// [Optional] Permits additional command names to be used for this command 
	aliases: [`farmtag`, `apply`],

	// [Optional] Displays how to use this command in the help command.
	usage: '<CharacterName> <Trial Role> <URL To ESO Logs>',

	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	// permissions: `MANAGE_ROLES`,

	// [Optional] When True - Requires Arguments Be Provided In Message Object
	args: true,

	// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	guildOnly: true,

	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,
	async execute(msgObject, args, client) {
		const channelLogs = msgObject.guild.channels.cache.get(process.env.HD_CHANNEL_TRIALTAGRESULTS) // #open-cores-application-feedback channel
		const roleAnalyzer = `<@&${process.env.HD_ROLE_ANALYZER}>`
		const values = args.join(` `).split(/[,]/);

		const requestCharacterName = values[0].trim();
		const requestCharacterRole = values[1].trim();
		const requestTrial = values[2].trim();
		const requestCharacterLog = values[3].trim();
		const requestComments = values[4] || "None Provided";

		const embed = new MessageEmbed()
			.setTitle(`Trial Tag Request`)
			.setAuthor(msgObject.author.tag, msgObject.author.displayAvatarURL())
			.setColor(0xffff00)
			.setThumbnail(`https://images.uesp.net/thumb/7/7e/ON-icon-heraldry-Deities_Akatosh.png/100px-ON-icon-heraldry-Deities_Akatosh.png`)
			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp()
			.addFields(
				{ name: `Applicant`, value: msgObject.author.toString(), inline: false },
				{ name: `Character Name`, value: requestCharacterName, inline: false },
				{ name: `Role`, value: requestCharacterRole, inline: false },
				{ name: `Trial`, value: requestTrial, inline: false },
				{ name: `Logs`, value: requestCharacterLog, inline: false },
				{ name: `Comments`, value: requestComments, inline: false }
			)
    
		channelLogs.send({ embeds: [embed] })
			.then(e => e.react(`✅`))
			.then(e => {
				e.message.react(`❌`);
				channelLogs.threads.create({
					name: `${requestTrial} as ${requestCharacterRole} | ${requestCharacterName}`,
					autoArchiveDuration: 'MAX',
					reason: 'Needed a separate thread for food',
					startMessage: e.message,
				}).then(threadChannel => {
					threadChannel.send(`<@&${process.env.HD_ROLE_ANALYZER}>, you have a new log.`);
				});
			});
		msgObject.reply({ content: `Thank you ${msgObject.author}! Your request has been submitted for review!` })
			.then(reply => {
				setTimeout(() => {
					reply.delete();
					msgObject.delete();
				}, 10000);
			});
	},
};
