module.exports = {
	// Name of this command. Required for all commands.
	name: 'archive',
	
	// [Optional] Description of this command for the help command
	description: 'ADMIN: Moves inactive channels to archive.',
	
	// [Optional] Permits additional command names to be used for this command 
	// aliases: ['alternate_names', ``],
	
	// [Optional] Displays how to use this command in the help command.
	// usage: '<required_args> [optional_args]',
    
	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	permissions: `MANAGE_CHANNELS`,
    
	// [Optional] When True - Requires Arguments Be Provided In Message Object
	args: false,
	
	// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	guildOnly: true,
	
	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,
	execute(msgObject) {
		msgObject.channel.setParent(`716449557642477569`).then(async m=> {
			await m.lockPermissions();
			msgObject.reply({content: `This channel has been archived`});
		})
	},
};
