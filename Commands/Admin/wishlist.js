const { MessageEmbed } = require("discord.js");
const {readFile} = require(`fs`);

module.exports = {
	// Name of this command. Required for all commands.
	name: 'wishlist',
	
	// [Optional] Description of this command for the help command
	description: 'ADMIN: Create a pool for the content wishlist.',
	
	// [Optional] Permits additional command names to be used for this command 
	aliases: [`cw`, `wishlist`],
	
	// [Optional] Displays how to use this command in the help command.
	usage: '<Start Date (Month / Day)> <Duration (in days)>',
	
	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	permissions: `MANAGE_ROLES`,
	
	// [Optional] When True - Requires Arguments Be Provided In Message Object
	args: true,
	
	// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	guildOnly: true,
	
	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,
	execute(msgObject, args, client) {
		// Get Current Date @ 0 Hours: 0 Minutes: 0 Seconds: 0 Miliseconds
		const dateNow = new Date();
		dateNow.setHours(0, 0, 0, 0);

		// Get Target Start Date From User Date Input
		const dateStart = new Date(args[0]);
		dateStart.setFullYear(dateNow.getFullYear());
		const dateStartEpoch = dateStart.getTime()/1000;

		// Get Target End Date From User Duration Input
		const duration = args[1] - 1;
		const dateEnd = new Date(dateStart.getTime());
		dateEnd.setDate(dateEnd.getDate() + duration);
		const dateEndEpoch = dateEnd.getTime()/1000;

		// Check user input for a valid date in the future
		if (dateStart < dateNow) {
			msgObject.reply({ content: `Invalid Date! Provide a valid date in the format \`month/date\`. Make sure it is not a past date.` });
			return;
		}

		// Chech user input to ensure duration is at least 1 day long
		if (duration < 1) {
			msgObject.reply({ content: `Invalid Duration! Duration must be at least 1 (one).` });
			return;
		}

		// Create and Format The Instruction Embed
		const instructions = `Please react in the messages below to vote on which trials you would like to see run the following week:\n` +
			`From **<t:${dateStartEpoch}:D>** until **<t:${dateEndEpoch}:D>**.\n\n` +
			`If you are interested in farm, score, trifecta, arena or any other type of runs post below.`;

		// Get Guild Information From JSON File
		const guildHellfireDominion = `./Data/hd.json`;
		readFile(guildHellfireDominion, function (err, data) {
			if (err) throw err;
			const dataHellfireDominion = JSON.parse(data);
			const guildYellow = dataHellfireDominion.colors.yellow;

			const embed = new MessageEmbed()
				.setTitle(`Content Wishlist Pool`)
				.setDescription(instructions)
				.setColor(guildYellow)
				.setThumbnail(client.user.displayAvatarURL())
				.setFooter(client.user.username, client.user.displayAvatarURL())
				.setTimestamp()

			setTimeout(() => msgObject.delete(), 10000);
			msgObject.channel.send({ embeds: [embed] });

			// Get Rank and Trial Info From Data Files
			const HDRanks = `./Data/HellfireDominion/ranks.json`;
			readFile(HDRanks, function (err, data) {
				if (err) throw err;
				const HDRanksJSON = JSON.parse(data);

				// Loop Through Each Rank And Create An Embed
				const ranks = Object.keys(HDRanksJSON);
				ranks.forEach(index => {
					const rank = HDRanksJSON[index];
					const trialArray = [];
					rank.trials.forEach((trial, _) => {
						trialArray.push(`> ${trial.emoji} **${trial.shortName}**‎‎‎`);
					});
					// Format An Send The Message Embed
					const embed = new MessageEmbed()
						.setTitle(rank.name)
						.setColor(rank.color)
						.setThumbnail(rank.image)
						.addField(`\u200b`, trialArray.join(`\n`));
					msgObject.channel.send({ embeds: [embed] })
						// React With Emojis For Each Trial To be Used As Voting Buttons
						.then(e => {
							rank.trials.forEach((trial, _) => {
								e.react(trial.emoji);
							});
						});
				});
			});
		});
	},
};