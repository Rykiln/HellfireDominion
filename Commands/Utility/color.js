const { MessageEmbed } = require("discord.js");
module.exports = {
	// Name of this command. Required for all commands.
	name: 'color',
	
	// [Optional] Description of this command for the help command
	description: `Displays a random color with it's Hexidecimal and RGB values.`,
	
	// [Optional] Permits additional command names to be used for this command 
	aliases: ['colour', `rgb`],
	
	// [Optional] Displays how to use this command in the help command.
    // usage: '[@mention]',

    // [Optional] When True - Requires Arguments Be Provided In Message Object
    args: false,

    // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
    guildOnly: false,
	
	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,
	execute(msgObject, args, client) {

		const hex = Math.floor(Math.random() * 16777215).toString(16);
		String.prototype.convertToRGB = function () {
			let aRgbHex = this.match(/.{1,2}/g);
			let aRgb = [
				parseInt(aRgbHex[0], 16),
				parseInt(aRgbHex[1], 16),
				parseInt(aRgbHex[2], 16),
			];
			return aRgb;
		}
		let embed = new MessageEmbed()
			.setColor(`#` + hex)
			.setTitle(`Random Color`)
			.addFields(
				{ name: `RGB`, value: `[ ${hex.convertToRGB()} ]`, inline: true },
				{ name: `Hexidecimal`, value: `#` + hex, inline: true }
			)
		msgObject.channel.send({ embeds: [embed] })
			.catch(console.error);

	},
};
