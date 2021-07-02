const Discord = require("discord.js");
const { description } = require("./announcement");
module.exports = {
	name: 'wishlist',													// Name of this command. Required for all commands.
	description: 'ADMIN: Create a pool for the content wishlist.',							// [Optional] Description of this command for the help command
	aliases: [`cw`, `wishlist`],						 			// [Optional] Permits additional command names to be used for this command 
	usage: '<Start Date (Month / Day)> <Duration (in days)>',		// [Optional] Displays how to use this command in the help command.
	permissions: `MANAGE_ROLES`,									// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	args: true, 													// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 												// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 													// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		const values = args.join(` `).split(/[,]/);

		const startDate = new Date(values[0]);
		const duration = values[1];

		const now = new Date()
		now.setHours(0, 0, 0, 0)
		startDate.setFullYear(now.getFullYear());
		if (startDate < now) {
			msgObject.channel.send(`Invalid Date! Provide a valid date in the format \`month/date\`. Make sure it is not a past date.`);
			return
		}

		if (duration < 1) {
			msgObject.channel.send(`Invalid Duration! Duration must be at least 1 (one).`);
			return
		}

		sendDisclaimerEmbed(msgObject, client, startDate, duration);

		const fs = require(`fs`);
		const fileRanks = process.env.HD_JSON_RANKS;

		fs.readFile(fileRanks, function(err, data) {
			if (err) throw err;
			const ranksJSON = JSON.parse(data);

			const ranks = Object.keys(ranksJSON);
			ranks.forEach(index => {
				const rank = ranksJSON[index];
				createTrainingEmbed(msgObject, client, rank)
			});
		});
	},
};

function createTrainingEmbed(msgObject, client, rank) {
	var description = "";

	rank.trials.forEach((trial, _) => {
		description = description.concat(`> ${trial.emoji} **${trial.shortName}**‎‎‎\n`);
	});

	const lineFiller = `‎‎‎                                     ‎‎‎    ‎‎‎          ‎‎‎    `;
	const embed = new Discord.MessageEmbed()
		.setTitle(`${rank.name} Training`)
		.setColor(rank.color)
		.setThumbnail(rank.image)
		.addField(lineFiller, description);


	msgObject.channel.send(embed).then(e => {
		rank.trials.forEach((trial, _) => {
			e.react(trial.emoji);
		});
	});
}


function sendDisclaimerEmbed(msgObject, client, startDate, duration) {

	duration = parseInt(duration)

	var endDate = new Date(startDate.getTime());
	endDate.setDate(endDate.getDate() + duration - 1);

	const headline = `Please react in the messages below to vote on which trials you would like to see run the following week:\n` +
		`From **${startDate.toDateString()}** until **${endDate.toDateString()}**.\n` +
		`\nIf you are interested in farm, score, trifecta, arena or any other type of runs post below.`;

	const embed = new Discord.MessageEmbed()
		.setTitle(`Content Wishlist Pool`)
		.setColor(process.env.HD_COLOR_YELLOW)
		.setThumbnail(client.user.displayAvatarURL())
		.setFooter(client.user.username, client.user.displayAvatarURL())
		.setTimestamp()
		.addField(` ‎ `, `${headline}`);

	msgObject.delete(10000);
	msgObject.channel.send(embed);
}
