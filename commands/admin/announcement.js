const Discord = require("discord.js");
module.exports = {
	name: 'announcement',											// Name of this command. Required for all commands.
	description: 'ADMIN: Sends An Important Guild Announcement.',			// [Optional] Description of this command for the help command
	aliases: [`announce`, `bulletin`], 								// [Optional] Permits additional command names to be used for this command 
	usage: '<Announcement Message>',								// [Optional] Displays how to use this command in the help command.
    permissions: `MANAGE_ROLES`,									// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    args: true, 													// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 												// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 													// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	async execute(msgObject, args, client) {
		const channelAnnounce = client.channels.cache.get(`748266587584331806`);
		const messageAnnounce = args.join(` `);
		const notifyPing = `<@&367476580391452674>`;
		const embed = new Discord.MessageEmbed()
			.setTitle(`Important Announcement`)
			.setColor(0xff9900)
			.setAuthor(msgObject.author.username, msgObject.author.displayAvatarURL())
			.setThumbnail(client.user.displayAvatarURL())
			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp()
			.setDescription(messageAnnounce)
		msgObject.delete(3000);
		await channelAnnounce.send(notifyPing);
		await channelAnnounce.send(embed)
			.then(m => m.pin());
		
	},
};