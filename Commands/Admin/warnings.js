const { MessageEmbed } = require("discord.js");
const { readFile } = require(`fs`);

module.exports = {
	// Name of this command. Required for all commands.
	name: 'warnings',

	// [Optional] Description of this command for the help command
	description: 'ADMIN: Displays a list of all member warnings.',

	// [Optional] Permits additional command names to be used for this command 
	aliases: [`noshows`],

	// [Optional] Displays how to use this command in the help command.
	usage: '[@member]',
	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	permissions: `MANAGE_ROLES`,

	// [Optional] When True - Requires Arguments Be Provided In Message Object
	args: false,

	// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	guildOnly: true,

	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,
	execute(msgObject, args, client) {

		const warningsFile = `./Data/Warnings/current.json`;

		readFile(warningsFile, function (err, data) {
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
