const { MessageEmbed } = require("discord.js");
const { readFile } = require(`fs`);

module.exports = {
	// Name of this command. Required for all commands.
	name: 'updateprerequisites',

	// [Optional] Description of this command for the help command
	description: 'ADMIN: Post Embeded Prerequisites In Current Channel.',

	// [Optional] Permits additional command names to be used for this command 
	aliases: [`prerequisites`, `pr`],

	// [Optional] Displays how to use this command in the help command.
	// usage: '<required_args> [optional_args]',

	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	permissions: `MANAGE_ROLES`,

	// [Optional] When True - Requires Arguments Be Provided In Message Object
	args: false,

	// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	guildOnly: true,

	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,
	execute(msgObject) {
		const filePrerequisites = `./Data/Guild/prerequisites.json`;

		readFile(filePrerequisites, function (err, data) {
			if (err) throw err;
			const prerequisites = JSON.parse(data);
			function getRoleData(JSONObject, value) {
				// Get Object Keys
				const keys = Object.keys(JSONObject);
				keys.forEach(key => {
					const subkeys = JSONObject[key];
					const role = msgObject.guild.roles.resolve(subkeys.roleID);
					const ddID = msgObject.guild.roles.resolve(subkeys.ddID);
					const healerID = msgObject.guild.roles.resolve(subkeys.healerID);
					const tankID = msgObject.guild.roles.resolve(subkeys.tankID);
					const dpsMag = `${subkeys.dpsMag}K for Magicka`;
					const dpsStam = `${subkeys.dpsStam}K for Stamina`;
					const healerGear = Object.keys(subkeys.gearHealer).map(setName => `[${subkeys.gearHealer[setName].setName}](${subkeys.gearHealer[setName].setURL})`);
					const tankGear = Object.keys(subkeys.gearTank).map(setName => `[${subkeys.gearTank[setName].setName}](${subkeys.gearTank[setName].setURL})`);
					const restrictions = [
						`No Mythic Items`, `No [Blood for Blood](https://eso-hub.com/en/skills/world/vampire/blood-for-blood)`, `No [Blood Frenzy](https://eso-hub.com/en/skills/world/vampire/blood-frenzy)`]
					const embed = new MessageEmbed()
						.setTitle(role.name)
						.setColor(role.color)
						.addFields(
							{ name: `DPS`, value: `${ddID}\n\n${dpsMag}\n${dpsStam}\n${restrictions.join(`\n`)}`, inline: true },
							{ name: `Healer`, value: `${healerID}\n\n${healerGear.join(`\n`)}`, inline: true },
							{ name: `Tank`, value: `${tankID}\n\n${tankGear.join(`\n`)}`, inline: true }
						)
					msgObject.channel.send({ embeds: [embed] })
				});

			}
			getRoleData(prerequisites, `fine`)
		});

	},
};
