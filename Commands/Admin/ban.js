const { MessageEmbed } = require("discord.js");
module.exports = {
	// Name of this command. Required for all commands.
	name: 'ban',
	
	// [Optional] Description of this command for the help command
	description: 'ADMIN: Immediately bans a member from the guild.',
	
	// [Optional] Permits additional command names to be used for this command 
	aliases: [`banhammer`, `gtfo`, `kick`],
	
	// [Optional] Displays how to use this command in the help command.
	usage: '<@mention> [reason]',
	
	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	permissions: `BAN_MEMBERS`,
	
	// [Optional] When True - Requires Arguments Be Provided In Message Object
	args: true,
	
	// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	guildOnly: true,
	
	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,
	execute(msgObject, args, client) {
		// Retreive Input Of Member And Reason For Ban		
		const banAccount = msgObject.mentions.members.first();
		const banReason = args.slice(1).join(" ") || "";
		let banNickname = banAccount.banNickname;
		if (!banNickname) { banNickname = banAccount.user.username };

		msgObject.delete();

		// BAN Member From Guild, Delete 7 Days Of Messages, And Include The Reason Provided
		banAccount.ban({ days: 7, reason: banReason });

		// Console Log The BAN Event
		console.log(`-- [${banAccount.user.tag} (${banAccount.user.id})] was banned from [${msgObject.guild.name}] for [${banReason}]`);

		// Send Embed To Ban Channel To Notify Discord Partners Of The Ban
		const channelBan = msgObject.guild.channels.resolve(process.env.HD_CHANNELS_BANS);
		const embed = new MessageEmbed()
			.setTitle(`Member Account Banned`)
			.setColor(0xff0000)
			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp()
			.setThumbnail(banAccount.user.displayAvatarURL())
			.addField(`Discord Tag`, banAccount.user.tag.toString(), true)
			.addField(`Nickname`, banNickname, true)
			.addField(`Discord ID`, banAccount.user.id.toString(), true)
			.addField(`Joined Guild`, banAccount.joinedAt.toString(), false)
			.addField(`Banned By`, msgObject.author, false)
			.addField(`Reason For Ban`, banReason, false);
		channelBan.send({ embeds: [embed] });
	},
};
