const { MessageEmbed } = require("discord.js");
module.exports = {
	// Name of this command. Required for all commands.
	name: 'announcement',
	
	// [Optional] Description of this command for the help command
	description: 'ADMIN: Sends An Important Guild Announcement.',
	
	// [Optional] Permits additional command names to be used for this command 
	aliases: [`announce`, `bulletin`, `important`],
	
	// [Optional] Displays how to use this command in the help command.
	usage: '<Announcement Message>',
	
	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	permissions: `MANAGE_ROLES`,
	
	// [Optional] When True - Requires Arguments Be Provided In Message Object
	args: true,
	
	// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	guildOnly: true,
	
	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,
	execute(msgObject, args, client) {
		// Get Guild Information From JSON File
		const guildHellfireDominion = `./Data/HellfireDominion/guild.json`;
		readFile(guildHellfireDominion, function (err, data) {
			if (err) throw err;
			const dataHellfireDominion = JSON.parse(data);

			const channelAnnounce = client.channels.cache.get(`748266587584331806`);
			const notifyPing = msgObject.guild.roles.resolve(dataHellfireDominion.roles.notify);
			const embed = new MessageEmbed()
				.setTitle(`Important Announcement`)
				.setColor(dataHellfireDominion.colors.yellow)
				.setAuthor(msgObject.author.username, msgObject.author.displayAvatarURL())
				.setThumbnail(client.user.displayAvatarURL())
				.setFooter(client.user.username, client.user.displayAvatarURL())
				.setTimestamp()
				.setDescription(args.join(` `));
			setTimeout(() => msgObject.delete(), 3000);
			channelAnnounce.send({ content: notifyPing, embeds: [embed] })
				.then(announcement => announcement.pin());
		});
	},
};
