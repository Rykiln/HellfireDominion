const Discord = require("discord.js");
module.exports = {
	name: 'send',																// Name of this command. Required for all commands.
	description: 'ADMIN: Sends a message with the bot as the author.',			// [Optional] Description of this command for the help command
	usage: '[#channel] <message>',												// [Optional] Displays how to use this command in the help command.
	permissions: `MANAGE_MESSAGES`,												// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	args: true, 																// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 															// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 																// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		const channel_destination = msgObject.mentions.channels.first() || msgObject.channel;
		switch(channel_destination){ // Parse Message When Channel Is Not Mentioned
			case msgObject.channel:
				var msg = args.join(" ") || "";
				break;
			default: // Parse Message When Channel Is Not Mentioned
				var msg = args.slice(1).join(" ") || "";
		}
		msgObject.delete();
		channel_destination.send(msg)
	},
};