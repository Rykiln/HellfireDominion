const { MessageEmbed } = require("discord.js");
const Roll = require(`roll`);
roll = new Roll();
module.exports = {
	// Name of this command. Required for all commands.
	name: 'roll',
	
	// [Optional] Description of this command for the help command
	description: 'A Dice Rolling Command.',
	
	// [Optional] Permits additional command names to be used for this command 
	aliases: ['dice'],
	
	// [Optional] Displays how to use this command in the help command.
	usage: '<Dice>D<Sides>[+/-Modifier]',
	
	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	// permissions: `MANAGE_ROLES`,
	
	// [Optional] When True - Requires Arguments Be Provided In Message Object
	args: true,
	
	// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	guildOnly: false,
	
	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,
	execute(msgObject, args, client) {
		const diceRoll = roll.roll(args[0])
		const embed = new MessageEmbed()
			.setAuthor(msgObject.author.tag, msgObject.author.displayAvatarURL())
			.setColor(process.env.HD_COLOR_YELLOW)
			.setTitle(`${msgObject.author.username} Rolled ${diceRoll.result}`)
			.setThumbnail(`https://bestanimations.com/Games/Dice/rolling-dice-gif-3.gif`)
			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp()
			.addField(`Dice`, `[ ${diceRoll.rolled} ]`)
		msgObject.channel.send({ embeds: [embed] })
	},
};
