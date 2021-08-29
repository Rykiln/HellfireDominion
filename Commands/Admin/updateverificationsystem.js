const { MessageEmbed } = require("discord.js");
const {promises: {readFile}} = require("fs");

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
		//const guildHellfireDominion = `./Data/hd.json`;

		const guildIcon = client.user.displayAvatarURL();

		// Filler to correct embed width. Each embed has ~72 spacings.
		const spacing = `\b　`;
		const embedWidth = 36;


		function sendEmbed(title, description, color, fields = null, thumbnail = false, timestamp = false) {
			let embed = new MessageEmbed()
				.setTitle(title)
				.setDescription(description)
				.setColor(color || process.env.HD_COLOR_ORANGE)
				.setFooter(client.user.username, client.user.displayAvatarURL())

			if (fields) {
				embed.setFields(fields);
			}
			if (thumbnail) {
				embed.setThumbnail(guildIcon)
			}
			if(timestamp) {
				embed.setTimestamp()
			}

			msgObject.channel.send({embeds: [ embed ]});
		}

		Promise.all([
			readFile(fileVerificationSystem),
			readFile(filePrerequisites),
			readFile(filePrerequisitesAdditionalGear),
			readFile(fileRanks),
			readFile(fileMythicRank),
		]).then(([verificationSystemData, prerequisitesData, prerequisitesAdditionalData, ranksData, rankMythicData], ) => {
			const verficationJSONObject = JSON.parse(verificationSystemData);

			// General Verification System Information
			const verificationSystem = verficationJSONObject["verificationSystem"];
			sendEmbed(verificationSystem.title, verificationSystem.description.join('\n'), null, false, true);

			// Prerequisites Information
			const prerequisitesSystem = verficationJSONObject["prerequisites"];
			sendEmbed(prerequisitesSystem.title, prerequisitesSystem.description.join('\n'));

			
			// Get Prerequisites
			const prerequisitesJSONObject = JSON.parse(prerequisitesData);
			const prerequisiteKeys = Object.keys(prerequisitesJSONObject);
			const prerequisiteAdditionalJSONObject = JSON.parse(prerequisitesAdditionalData);
			
			prerequisiteKeys.forEach(key => {
				const subkeys = prerequisitesJSONObject[key];
				const role = msgObject.guild.roles.resolve(subkeys.roleID);
				const ddID = msgObject.guild.roles.resolve(subkeys.ddID);
				const healerID = msgObject.guild.roles.resolve(subkeys.healerID);
				const tankID = msgObject.guild.roles.resolve(subkeys.tankID);
				const dpsMag = `${subkeys.dpsMag}K for Magicka`;
				const dpsStam = `${subkeys.dpsStam}K for Stamina`;
				const healerGear = Object.keys(subkeys.gearHealer)
																 .map(setName => `[${subkeys.gearHealer[setName].setName}](${subkeys.gearHealer[setName].setURL})`);
				const tankGear = Object.keys(subkeys.gearTank).map(setName => `[${subkeys.gearTank[setName].setName}](${subkeys.gearTank[setName].setURL})`);
				const restrictions = [
					`No Mythic Items`, 
					`No [Blood for Blood](https://eso-hub.com/en/skills/world/vampire/blood-for-blood)`, 
					`No [Blood Frenzy](https://eso-hub.com/en/skills/world/vampire/blood-frenzy)`]
				
				const previousHealerGear = subkeys.previousHealerID? `\nAll ${msgObject.guild.roles.resolve(subkeys.previousHealerID)} sets`: ``;
				const previousTankGear = subkeys.previousTankID? `\nAll ${msgObject.guild.roles.resolve(subkeys.previousTankID)} sets`: ``;

				const fieldSpace = spacing.repeat( embedWidth / 3 );

				const prerequisiteFields = [
						{ name: `Damage Dealers`, value: `${ddID}\n${fieldSpace}\n**${dpsMag}**\n**${dpsStam}**\n${restrictions.join(`\n`)}`, inline: true },
						{ name: `Healers`, value: `${healerID}\n${fieldSpace}\n${healerGear.join(`\n`)}${previousHealerGear}`, inline: true },
						{ name: `Tanks`, value: `${tankID}\n${fieldSpace}\n${tankGear.join(`\n`)}${previousTankGear}`, inline: true }	
				];

				// Get Note
				if(subkeys.note) {
					prerequisiteFields.push(
						{name: "Note:", value: subkeys.note, inline: false}
					)
				}

				sendEmbed(`${role.name} Prerequisite`, "", role.color, prerequisiteFields);

				// Get Additional and Recommended Gear
				if(subkeys.appendix) {
					const appendix = prerequisiteAdditionalJSONObject[subkeys.appendix];

					const fieldSpace = spacing.repeat( embedWidth / appendix.fields.length );

					let appendixFields = Object.keys(appendix.fields).map(index => {
						const gearList = appendix.fields[index].gearList;
						gearListArray = Object.keys(gearList).map(setName => `[${gearList[setName].setName}](${gearList[setName].setURL})`);

						return {
							name: appendix.fields[index].name, 
							value: `\n${fieldSpace}\n${appendix.fields[index].value}${gearListArray.join(`\n`)}`, 
							inline: appendix.fields[index].inline
						}
					 });
					const role = msgObject.guild.roles.resolve(appendix.roleID);
					sendEmbed(appendix.title, appendix.description, role.color, appendixFields);
				}
			});

			function createRankEmbed(rank) {
				const ddID = msgObject.guild.roles.resolve(rank.ddID);
				const healerID = msgObject.guild.roles.resolve(rank.healerID);
				const tankID = msgObject.guild.roles.resolve(rank.tankID);
				
				const requirementsDescription = rank.requirementsDescription? rank.requirementsDescription : `Requirements:`;
				const requirements = Object.keys(rank.requirements).map(index => `${msgObject.guild.roles.resolve(rank.requirements[index].roleID)}`);
				
				
				const fieldSpace = `\b  `.repeat(43);
				
				const rankFields = [
					{ name: `Damage Dealers`, value: `${ddID}\n${fieldSpace}\n`, inline: true },
					{ name: `Healers`, value: `${healerID}\n${fieldSpace}\n`, inline: true },
					{ name: `Tanks`, value: `${tankID}\n${fieldSpace}\n`, inline: true }	,
					{ name: requirementsDescription, value: `> ${requirements.join(`\n> `)}`, inline: false }
				];

				// if( rank.optional ) {
				// 	const pptionalDescription = rank.requirementsDescription? rank.requirementsDescription : `Optional:`;
				// 	const optionalRequirements = Object.keys(rank.optional).map(index => `${msgObject.guild.roles.resolve(rank.optional[index].roleID)}`);

				// 	const optionalField =  { name: pptionalDescription, value: `> ${optionalRequirements.join(`\n> `)}`, inline: false };
				// 	rankFields.push(optionalField);
				// }
				
				sendEmbed(rank.title, "", ddID.color, rankFields);
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

