const { MessageEmbed } = require("discord.js");
module.exports = {
	name: 'warnings',														// Name of this command. Required for all commands.
	description: 'ADMIN: Displays a list of all member warnings.',			// [Optional] Description of this command for the help command
	aliases: [`noshows`],										 			// [Optional] Permits additional command names to be used for this command 
	usage: '[@member]',														// [Optional] Displays how to use this command in the help command.
	permissions: `MANAGE_ROLES`,											// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	args: false,							 								// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 														// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 															// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		const fs = require(`fs`);
		const warningsFile = process.env.HD_JSON_WARNINGS; 				// Hellfire Dominion Warnings JSON File

		fs.readFile(warningsFile, function (err, data) {
			if (err) throw err;
			const warns = JSON.parse(data);
			async function getUniqueUserIds(array) {
				let Snowflake = []
				array.forEach(v => Snowflake.push(v[`ID`]))
				let UniqueSnowflake = Snowflake.filter((x, i, a) => a.indexOf(x) == i)
				let UniqueMembers = []
				for (const v of UniqueSnowflake) {
					await client.users.fetch(v).then(u => UniqueMembers.push(u))
				};
				return UniqueMembers;
			}

			function getOccurence(array, value) {
				let count = 0
				array.forEach((v) => (v[`ID`] === value && count++))
				return count;
			}

			let Members = []
			getUniqueUserIds(warns).then(d => {
				Members.push(d);
				let Nick = []
				let Counts = []
				for (const m of d) {
					// console.log(m)
					Nick.push(m.username)
					Counts.push(getOccurence(warns, m.id))
				}

				let embed = new MessageEmbed()
					.setTitle(`Guild Member Warnings Issued`)
					.setColor(0xFF9900)
					.setThumbnail(client.user.displayAvatarURL())
					.setTimestamp()
					.addField(`Member`, d, true)
					.addField(`Nickname`, Nick, true)
					.addField(`Warnings`, Counts.toString(), true);
				msgObject.channel.send({ embeds: [embed] })
			})
		})
	},
};
