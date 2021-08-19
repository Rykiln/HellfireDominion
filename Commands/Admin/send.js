module.exports = {
	// Name of this command. Required for all commands.
	name: 'send',
	
	// [Optional] Description of this command for the help command
	description: 'ADMIN: Sends a message with the bot as the author.',
	
	// [Optional] Displays how to use this command in the help command.
	usage: '[#channel] <message>',
	
	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	permissions: `MANAGE_MESSAGES`,
	
	// [Optional] When True - Requires Arguments Be Provided In Message Object
	args: true,
	
	// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	guildOnly: true,
	
	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,
	execute(msgObject, args) {
		const firstArgument = args[0].replace(/<|#|>/g, "")
		const channel_destination = msgObject.mentions.channels.first() || msgObject.channel;
		if(firstArgument === channel_destination.id){ // Parse Message When Channel Is Not Mentioned
			var msg = args.slice(1).join(" ") || "";
			channel_destination.send(msg);
		} else { // Parse Message When Channel Is Not Mentioned
			var msg = args.join(" ") || "";
			msgObject.channel.send({content: msg});
		};
		msgObject.delete();
	},
};
