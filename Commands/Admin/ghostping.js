module.exports = {
	name: 'ghostping',						// Name of this command. Required for all commands.
	description: 'ADMIN: Shhh - nobody sees this.',			// [Optional] Description of this command for the help command
	aliases: [`ghost`, `gp`], 			// [Optional] Permits additional command names to be used for this command 
	usage: '<@member>',		// [Optional] Displays how to use this command in the help command.
    permissions: `MANAGE_ROLES`,				// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    args: true, 								// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 							// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 								// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		msgObject.delete();
	},
};
