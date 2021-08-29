const { MessageEmbed } = require("discord.js");
const {promises: {readFile}, read} = require("fs");

module.exports = {
	// Name of this command. Required for all commands.
	name: 'updateverificationsystem',

	// [Optional] Description of this command for the help command
	description: 'ADMIN: Post Embeded Verification System In Current Channel.',

	// [Optional] Permits additional command names to be used for this command 
	aliases: [`verification`, `vs`],

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
	execute(msgObject, _, client) {
		const fileVerificationSystem = `./Data/HellfireDominion/verification_system.json`;
		const filePrerequisites = `./Data/HellfireDominion/prerequisites.json`;
		const filePrerequisitesAdditionalGear = `./Data/HellfireDominion/prerequisites_additional_gear.json`;
		const fileRanks = `./Data/HellfireDominion/ranks.json`;
		const fileMythicRank = `./Data/HellfireDominion/ranks_mythic.json`;

		// Get Guild Information From JSON File
		const guildHellfireDominion = `./Data/HellfireDominion/guild.json`;

		const guildIcon = client.user.displayAvatarURL();

		Promise.all([
			readFile(fileVerificationSystem),
			readFile(filePrerequisites),
			readFile(filePrerequisitesAdditionalGear),
			readFile(fileRanks),
			readFile(fileMythicRank),
			readFile(guildHellfireDominion)
		]).then(([verificationSystemData, prerequisitesData, prerequisitesAdditionalData, ranksData, rankMythicData, guildInfoData], ) => {
			const embedWidth = 150;
			const fieldSpace = `\u200b `;
			
			const guildInfo = JSON.parse(guildInfoData);

			function sendEmbed(title, description, color, fields = null, thumbnail = false, timestamp = false) {
				let embed = new MessageEmbed()
					.setTitle(title)
					.setDescription(description)
					.setColor(color || guildInfo.colors.orange)
					.setFooter(client.user.username, client.user.displayAvatarURL())
					.setTimestamp();

				if (fields) {
					embed.setFields(fields);
				}
				if (thumbnail) {
					embed.setThumbnail(guildIcon)
				}
				msgObject.channel.send({embeds: [ embed ]});
			}

			const verficationJSONObject = JSON.parse(verificationSystemData);

			// General Verification System Information
			const verificationSystem = verficationJSONObject["verificationSystem"];
			sendEmbed(verificationSystem.title, verificationSystem.description.join('\n'), null, false, true, true);

			// Prerequisites Information
			const prerequisitesSystem = verficationJSONObject["prerequisites"];
			sendEmbed(prerequisitesSystem.title, prerequisitesSystem.description.join('\n'));
			
			// Get Prerequisites
			const prerequisitesJSONObject = JSON.parse(prerequisitesData);
			const prerequisiteKeys = Object.keys(prerequisitesJSONObject);
			const prerequisiteAdditionalJSONObject = JSON.parse(prerequisitesAdditionalData);
			
			prerequisiteKeys.forEach(key => {
				const prerequisite = prerequisitesJSONObject[key];
				const role = msgObject.guild.roles.resolve(prerequisite.roleID);
				const ddID = msgObject.guild.roles.resolve(prerequisite.ddID);
				const healerID = msgObject.guild.roles.resolve(prerequisite.healerID);
				const tankID = msgObject.guild.roles.resolve(prerequisite.tankID);
				const dpsMag = `${prerequisite.dpsMag}K for Magicka`;
				const dpsStam = `${prerequisite.dpsStam}K for Stamina`;
				const healerGear = Object.keys(prerequisite.gearHealer)
																 .map(setName => `[${prerequisite.gearHealer[setName].setName}](${prerequisite.gearHealer[setName].setURL})`);
				const tankGear = Object.keys(prerequisite.gearTank).map(setName => `[${prerequisite.gearTank[setName].setName}](${prerequisite.gearTank[setName].setURL})`);
				
				const previousHealerGear = prerequisite.previousHealerID? `\nAll ${msgObject.guild.roles.resolve(prerequisite.previousHealerID)} sets`: ``;
				const previousTankGear = prerequisite.previousTankID? `\nAll ${msgObject.guild.roles.resolve(prerequisite.previousTankID)} sets`: ``;
			
				const spacing = fieldSpace.repeat(50);

				const prerequisiteFields = [
						{ name: `Damage Dealers`, value: `${ddID}\n${spacing}\n**${dpsMag}**\n**${dpsStam}**`, inline: true },
						{ name: `Healers`, value: `${healerID}\n${spacing}\n${healerGear.join(`\n`)}${previousHealerGear}`, inline: true },
						{ name: `Tanks`, value: `${tankID}\n${spacing}\n${tankGear.join(`\n`)}${previousTankGear}`, inline: true },
				];
			
				// Get Note
				if(prerequisite.note) {
					prerequisiteFields.push(
						{name: "Note:", value: prerequisite.note, inline: false}
					)
				}

				const description = prerequisite.description? prerequisite.description + `\n${fieldSpace}` : ""; 
			
				sendEmbed(`${role.name} Prerequisite`, description, role.color, prerequisiteFields);
			
				// Get Additional and Recommended Gear
				if(prerequisite.appendix) {
					const appendix = prerequisiteAdditionalJSONObject[prerequisite.appendix];

					const spacing = fieldSpace.repeat(embedWidth / appendix.fields.length);
			
					let appendixFields = Object.keys(appendix.fields).map(index => {
						const gearList = appendix.fields[index].gearList;
						gearListArray = Object.keys(gearList).map(setName => `[${gearList[setName].setName}](${gearList[setName].setURL})`);
			
						return {
							name: appendix.fields[index].name, 
							value: `${spacing}\n${gearListArray.join(`\n`)}`, 
							inline: appendix.fields[index].inline
						}
					 });

					const role = msgObject.guild.roles.resolve(appendix.roleID);
					const description = appendix.description + fieldSpace.repeat(embedWidth - appendix.description.length);

					sendEmbed(appendix.title, description, role.color, appendixFields);
				}
			});

			function createRankEmbed(rank) {
				const role = msgObject.guild.roles.resolve(rank.roleID);
				const ddID = msgObject.guild.roles.resolve(rank.ddID);
				const healerID = msgObject.guild.roles.resolve(rank.healerID);
				const tankID = msgObject.guild.roles.resolve(rank.tankID);
				
				const requirementsDescription = rank.requirementsDescription? rank.requirementsDescription : `Requirements:`;
				const requirements = Object.keys(rank.requirements).map(index => `${msgObject.guild.roles.resolve(rank.requirements[index].roleID)}`);
				
				const spacing = fieldSpace.repeat(50);
				
				const rankFields = [
					{ name: `Damage Dealers`, value: `${ddID}\n${spacing}\n`, inline: true },
					{ name: `Healers`, value: `${healerID}\n${spacing}\n`, inline: true },
					{ name: `Tanks`, value: `${tankID}\n${spacing}\n`, inline: true }	,
					{ name: requirementsDescription, value: `> ${requirements.join(`\n> `)}`, inline: false }
				];

				// if( rank.optional ) {
				// 	const pptionalDescription = rank.requirementsDescription? rank.requirementsDescription : `Optional:`;
				// 	const optionalRequirements = Object.keys(rank.optional).map(index => `${msgObject.guild.roles.resolve(rank.optional[index].roleID)}`);

				// 	const optionalField =  { name: pptionalDescription, value: `> ${optionalRequirements.join(`\n> `)}`, inline: false };
				// 	rankFields.push(optionalField);
				// }
				const description = rank.description + fieldSpace.repeat(embedWidth - rank.description.length);
				
				sendEmbed(rank.title, description, role.color, rankFields);
			}

			// Get Rank information
			const ranks = verficationJSONObject["ranks"];
			sendEmbed(ranks.title, ranks.description.join('\n'));

			// Get Ranks
			const ranksJSONObject = JSON.parse(ranksData);
			const ranksKeys = Object.keys(ranksJSONObject);

			ranksKeys.forEach(key => {
				const subkeys = ranksJSONObject[key];
				createRankEmbed(subkeys);
			});

			// Get Mythic Rank
			const mythic = verficationJSONObject["mythic"];
			sendEmbed(mythic.title, mythic.description.join('\n'));

			const rankMythicJSONObject = JSON.parse(rankMythicData);
			createRankEmbed(rankMythicJSONObject);


		}).catch(error => {
			console.error(error.message);
		});
		
	},
};

