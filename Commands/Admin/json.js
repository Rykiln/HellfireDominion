const Discord = require("discord.js");
const { readFile } = require(`fs`);
module.exports = {
	// Name of this command. Required for all commands.
	name: 'json',

	// [Optional] Description of this command for the help command
	description: 'Testing JSON Architecture.',

	// [Optional] Permits additional command names to be used for this command 
	aliases: [`test`],

	// [Optional] Displays how to use this command in the help command.
	// usage: '<required_args> [optional_args]',

	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	permissions: `MANAGE_ROLES`,

	// [Optional] When True - Requires Arguments Be Provided In Message Object
	// args: true,

	// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	// guildOnly: true,

	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,

	execute(msgObject, args, client) {
		const hdJSON = `./Data/HellfireDominion/guild.json`;
		if(!hdJSON) {
			console.log(`file not found`);
			return;
		};
		readFile(hdJSON, function (err, data) {
			if (err) throw err;
			console.log(data)
			const hdData = JSON.parse(data);
			console.log(`-----`);
			console.log(hdData);
			console.log(`-----`);
			console.log(hdData.roles.separator.cores);
			const today = new Date()
			today.setHours(0, 0, 0, 0);
			const epoch = today.getTime()/1000
			console.log(today)
			msgObject.reply({content: `<t:${epoch}:D>`})
		})
	},
};
