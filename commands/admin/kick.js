const Discord = require("discord.js");
module.exports = {
	name: 'kick',															// Name of this command. Required for all commands.
	description: 'ADMIN: Immediately bans a member from the guild.',		// [Optional] Description of this command for the help command
	aliases: ['ban', `banhammer`, `gtfo`],			 						// [Optional] Permits additional command names to be used for this command 
	usage: '<@mention> [reason]',											// [Optional] Displays how to use this command in the help command.
    permissions: `BAN_MEMBERS`,												// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    args: true, 															// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 														// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5,		 													// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		// Retreive Input Of Member And Reason For Ban		
		const banAccount = msgObject.mentions.members.first();
		const banReason = args.slice(1).join(" ") || "";
		let banNickname = banAccount.banNickname;
			if (!banNickname) { banNickname = banAccount.user.username };

		msgObject.delete();

		// BAN Member From Guild, Delete 7 Days Of Messages, And Include The Reason Provided
		banAccount.ban({ days : 7, reason: banReason});
		
		// Console Log The BAN Event
		console.log(`-- [${banAccount.user.tag} (${banAccount.user.id})] was banned from [${msgObject.guild.name}] for [${banReason}]`);
        
		// Send Embed To Ban Channel To Notify Discord Partners Of The Ban
		const channelBan = msgObject.guild.channels.resolve(process.env.HD_CHANNELS_BANS);
		const embed = new Discord.MessageEmbed()
			.setTitle(`Member Account Banned`)
			.setColor(0xff0000)
			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp()
			.setThumbnail(banAccount.user.displayAvatarURL())
			.addField(`Discord Tag`, banAccount.user.tag, true)
			.addField(`Nickname`, banNickname, true)
			.addField(`Discord ID`, banAccount.user.id, true)
			.addField(`Joined Guild`, banAccount.joinedAt, false)
			.addField(`Banned By`, msgObject.author, false)
			.addField(`Reason For Ban`, banReason, false);
		channelBan.send(embed);
	},
};