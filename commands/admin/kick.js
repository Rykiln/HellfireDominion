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
		
		const memberToBan = msgObject.mentions.members.first();
		const reasonForBan = args.slice(1).join(" ") || "";
		msgObject.delete();
		msgObject.guild.member(memberToBan).ban({ days : 7, reason: reasonForBan})
                .then(console.log)
                .catch(console.error);
	},
};