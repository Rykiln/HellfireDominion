module.exports = {
	// Name of this command. Required for all commands.
	name: 'ghostping',

	// [Optional] Description of this command for the help command
	description: 'ADMIN: Shhh - nobody sees this.',
	
	// [Optional] Permits additional command names to be used for this command 
	aliases: [`ghost`, `gp`],
	
	// [Optional] Displays how to use this command in the help command.
	usage: '<@member>',
    
	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	permissions: `MANAGE_ROLES`,
    
	// [Optional] When True - Requires Arguments Be Provided In Message Object
	args: true,
	
	// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	guildOnly: true,
	
	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,
	execute(msgObject) {
		msgObject.delete();
	},
};
