const Discord = require("discord.js");
module.exports = {
	name: 'noshow',																					// Name of this command. Required for all commands.
	description: 'ADMIN: Notifies a member that they missed an event that they signed up for.',		// [Optional] Description of this command for the help command
	// aliases: [``, ``], 																			// [Optional] Permits additional command names to be used for this command 
	usage: '<@member>',																				// [Optional] Displays how to use this command in the help command.
    permissions: `MANAGE_ROLES`,																	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    args: true, 																					// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 																				// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 																					// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		msgObject.guild.members.fetch(msgObject.mentions.users.first())
			.then(noshowMember => {
				const noshowMemberName = noshowMember.username;
				const noshowMemberID = noshowMember.id;

				const eventName = msgObject.channel.name;
				const warnedBy = msgObject.author.username;

				const channelNoShow = client.channels.resolve(process.env.HD_CHANNEL_WARNINGS); // Hellfire Dominion Warnings Warnings Channel
				// const channelNoShow = client.channels.resolve(process.env.TEST_CHANNEL_WARNINGS); // Test Server Warnings Warnings Channel
				console.log(channelNoShow.name)
				const fs = require(`fs`);
				fs.readFile(process.env.HD_JSON_WARNINGS, function(err, data){
					if (err) throw err;

					let warns = JSON.parse(data);
					console.log(warns);
					let newObject = {
						Member: (noshowMemberName),
						ID: (noshowMemberID),
						event: (eventName),
						warnedby: (warnedBy),
						reason: (`No-Show`),
						date: (Date()),
					};
					warns.push(newObject);
					console.log(warns);
					fs.writeFile(process.env.HD_JSON_WARNINGS, JSON.stringify (warns, null, 4), err => {
						if (err) throw err;
					});
				msgObject.delete();
				let embed = new Discord.MessageEmbed()
					.setTitle(`Guild Member Added To No Show List`)
					.setColor(0xFF0000)
					.setThumbnail(noshowMember.user.displayAvatarURL())
					.setFooter(client.user.username, client.user.displayAvatarURL())
					.setTimestamp()
					.addField(`Guild Member`, noshowMember)
					.addField(`Event`, eventName)
					.addField(`Warned By`, warnedBy);

				let embedDM = new Discord.MessageEmbed()
					.setTitle(`We Missed You Today!`)
					.setColor(0xFF9900)
					.setFooter(client.user.username, client.user.displayAvatarURL())
					.setTimestamp()
					.setDescription(`Hello ${noshowMember}. You missed a guild event that you signed up for in our Discord. We hope that everything is okay. As per our guild rules, this is considered as a no-show, and three (3) no-shows can result in you being excluded from future events, or possibly even removed from the guild. Please see our [Guild Info](https://discordapp.com/channels/694306288250781699/728692333280886884/728693715794788373) channel to review the guild rules. With this said, we do understand that life happens. Just let us know when you're not going to make it. Also if you missed this because of an emergency, we're not heartless, message an officer and let one of us know, we don't need the private details, but we can remove this no-show for valid reasons.`)
					.addField(`Event`, eventName);

				channelNoShow.send(embed);
				noshowMember.send(embedDM);
				})
			})
	},
};