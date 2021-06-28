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
		now.setHours(0,0,0,0)
		startDate.setFullYear( now.getFullYear() );
		if (startDate < now ) {
			msgObject.channel.send(`Invalid Date! Provide a valid date in the format \`month/date\`. Make sure it is not a past date.`);
			return
		}

		if (duration < 1 ) {
			msgObject.channel.send(`Invalid Duration! Duration must be at least 1 (one).`);
			return
		}
	
		sendDisclaimerEmbed(msgObject, client, startDate, duration);


		const raider = new Rank("Raider", process.env.HD_COLOR_FINE, getTrialsRaider(), "https://images.uesp.net/thumb/f/f6/ON-npc-The_Mage.jpg/200px-ON-npc-The_Mage.jpg");
		const veteran = new Rank("Veteran", process.env.HD_COLOR_SUPERIOR, getTrialsVeteran(), "https://images.uesp.net/thumb/c/c4/ON-creature-Z%27Maja.jpg/200px-ON-creature-Z%27Maja.jpg");
		const vanguard = new Rank("Vanguard", process.env.HD_COLOR_EPIC, getTrialsVanguard(), "https://images.uesp.net/thumb/e/e0/ON-creature-Rakkhat.jpg/200px-ON-creature-Rakkhat.jpg");
		const champion = new Rank("Champion", process.env.HD_COLOR_LEGENDARY, getTrialsChampion(), "https://images.uesp.net/thumb/b/bf/ON-creature-Nahviintaas_03.jpg/200px-ON-creature-Nahviintaas_03.jpg");

		sendTrainingEmbed(msgObject, client, raider);
		sendTrainingEmbed(msgObject, client, veteran);
		sendTrainingEmbed(msgObject, client, vanguard);
		sendTrainingEmbed(msgObject, client, champion);

	},
};

function sendDisclaimerEmbed(msgObject, client, startDate, duration) {

	duration = parseInt(duration)

	var endDate = new Date(startDate.getTime());
	endDate.setDate( endDate.getDate() + duration - 1 );

	const headline = `Please react in the messages below to vote on which trials you would like to see run the following week:\n`+
									 `From **${startDate.toDateString()}** until **${endDate.toDateString()}**.\n`+
									 `\nIf you are interested in farm, score, trifecta, arena or any other type of runs post below.`;

	const embed = new Discord.MessageEmbed()
		.setTitle(`Content Wishlist Pool`)
		.setColor(process.env.HD_COLOR_YELLOW)
		.setThumbnail(client.user.displayAvatarURL())
		.setFooter(client.user.username, client.user.displayAvatarURL())
		.setTimestamp()
		.addField(` ‎ `, `${headline}`);

	msgObject.channel.send(embed);
}

function sendTrainingEmbed(msgObject, client, rank) {
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

function getTrialsRaider() {
	return [
		new Trial("Aetherian Archive", "vAA HM", "🧙‍♀️", ),
		new Trial("Hel Ra Citadel", "vHRC HM", "⚔️", ),
		new Trial("Sanctum ophidia", "vSO HM", "🐍", )
	];
}

function getTrialsVeteran(){
	return [
		new Trial("Maw Of Lorkhaj", "vMOL", "🐈‍⬛"),
		new Trial("Halls Of Fabrication", "vHOF", "🤖"),
		new Trial("Asylum Sanctorium", "vAS", "⚙️"),
		new Trial("Cloudrest", "vCR", "🦅"),
		new Trial("Sunspire", "vSS", "🐲"),
		new Trial("Kyne's Aegis", "vKA", "🧛"),
		new Trial("Rockgrove", "vRG", "🦎")
	];
}

function getTrialsVanguard(){
	return [
		new Trial("Maw Of Lorkhaj", "vMOL HM", "🐈‍⬛"),
		new Trial("Halls Of Fabrication", "vHOF HM", "🤖"),
		new Trial("Asylum Sanctorium", "vAS+1 Llothis", "☠️"),
		new Trial("Asylum Sanctorium", "vAS+1 Felms", "🥓"),
		new Trial("Cloudrest", "vCR +1 (Lighting)", "⚡"),
		new Trial("Cloudrest", "vCR +1 (Ice)", "❄️"),
		new Trial("Cloudrest", "vCR +1 (Fire)", "🧨"),
		new Trial("Cloudrest", "vCR +2 (Lighting + Ice)", "🌩️"),
		new Trial("Cloudrest", "vCR +2 (Fire + Lighting)", "🌋"),
		new Trial("Cloudrest", "vCR +2 (Fire + Ice)", "🌡️"),
		new Trial("Sunspire", "vSS Fire", "🧊"),
		new Trial("Sunspire", "vSS Ice", "🔥"),
		new Trial("Kyne's Aegis", "vKA Yandir HM", "🔪"),
		new Trial("Kyne's Aegis", "vKA Vrol HM", "🏴‍☠️"),
		new Trial("Rockgrove", "vRG Oaxiltso HM", "🦎"),
		// new Trial("Rockgrove", "vRG Bahsei HM", "💀")
	];
}



function getTrialsChampion(){
	return [
		new Trial("Asylum Sanctorium", "vAS+2", "⚙️"),
		new Trial("Cloudrest", "vCR+3", "🦅"),
		new Trial("Sunspire", "vSS HM", "🐲"),
		new Trial("Kyne's Aegis", "vKA HM", "🧛"),
		// new Trial("Rockgrove", "vRG HM", "🦎")
	];
}

class Rank {
	constructor (name, color, trials, image) {
		this.name = name;
		this.color = color;
		this.trials = trials;
		this.image = image;
	}
}

class Trial {
	constructor (name, shortName, emoji) {
		this.name = name;
		this.shortName = shortName;
		this.emoji = emoji;
	}
}
