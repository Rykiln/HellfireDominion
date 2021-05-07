const Discord = require("discord.js");
var Roll = require(`roll`);
roll = new Roll();
module.exports = {
	name: 'roll',									// Name of this command. Required for all commands.
	description: 'A Dice Rolling Command.',			// [Optional] Description of this command for the help command
	aliases: ['dice'], 								// [Optional] Permits additional command names to be used for this command 
	usage: '<Dice>D<Sides>[+/-Modifier]',			// [Optional] Displays how to use this command in the help command.
	// permissions: `MANAGE_ROLES`,					// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	args: true, 									// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: false, 								// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 									// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		const diceRoll = roll.roll(args[0])
			// console.log(`${msgObject.author.username} used the roll command with: ${args}`)	
			// console.log(diceRoll)
			// console.log(`---------------`)

		let embed = new Discord.MessageEmbed()
			.setAuthor(msgObject.author.tag, msgObject.author.displayAvatarURL())
			.setColor(`0xbaf2ef`)
			.setTitle(`${msgObject.author.username} Rolled ${diceRoll.result}`)
			.setThumbnail(`https://bestanimations.com/Games/Dice/rolling-dice-gif-3.gif`)
			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp()
			.addField(`Dice`, `[ ${diceRoll.rolled} ]`)
		msgObject.channel.send(embed)
	},
};