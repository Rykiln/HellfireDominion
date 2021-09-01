const { MessageEmbed } = require("discord.js");
const { readFile } = require(`fs`);

module.exports = {
	// Name of this command. Required for all commands.
	name: 'updatewelcome',

	// [Optional] Description of this command for the help command
	description: 'ADMIN: Sends embed for welcome page with guild rules.',

	// [Optional] Permits additional command names to be used for this command 
	aliases: ['welcome', `w`],

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
	execute(msgObject, args, client) {
		// Get Guild Information From JSON File
		const guildHellfireDominion = `./Data/HellfireDominion/guild.json`;
		readFile(guildHellfireDominion, function (err, data) {
			if (err) throw err;
			const dataHellfireDominion = JSON.parse(data);
			
			// Define The Fields That Will Be Used In The Message	
			const guildIcon = client.user.displayAvatarURL();
			const guildInviteURL = dataHellfireDominion.inviteURL;
			const guildOrange = dataHellfireDominion.colors.orange;
			// const guildWebsiteURL = `https://www.oopsipulled.com`;
			const guildWelcomeMessage = `Welcome To Hellfire Dominion`;
			const guildDescription = `Since our founding on October 11th, 2017, we have been a **PC/NA** trial guild, offering everything from trial training and farm runs to veteran hard-mode progression raids. Our goal is to build an active roster of raiders interested in helping others and bettering themselves as players. Whether you are an experienced player looking for a solid end-game team, an intermediate player wanting and willing to learn more about veteran content, or completely new to 12-player content, we’ve got you covered!`;
			const guildRules = [
				`🔹 No harassment, bullying, discriminatory jokes or hate speech of any kind. Be respectful!`,
				`🔹 Be kind and helpful when giving constructive advice. No shaming!`,
				`🔹 Commit to your sign-ups. Don't be late and don't ditch half way through an event.`,
				`🔹 Be willing and open to follow build advice and requirements from raid leads.`,
				`🔹 Use proper MMO etiquette. Listen to and comply with your raid or event leader. Keep comms clear and don't backseat lead. If you would like to suggest a different way of doing something then talk to the raid lead privately.`,
				`🔹 ESO is Rated M for Mature (17+) for Blood and Gore, Sexual Themes, Use of Alcohol, and Violence. Online Interactions are Not Rated. As such, similar content will be present in this discord. While we do moderate chat and keep things friendly, we do recommend that you consider this rating when joining, as chat can sometimes get vulgar or inappropriate for children.`,
				`🔹 Avoid any discussion of promoting or encouraging actions against [The Elder Scrolls Online](https://account.elderscrollsonline.com/terms-of-service) or [Steam](https://store.steampowered.com/eula/471710_eula_0) terms of service.`,
			];
			const guildRulesConsequences = `➡️ Failing to follow these rules may lead to a ban and removal from this server`;
			const guildVerification = `🔹 Check <#${dataHellfireDominion.channels.verificationSystem}> to learn our requirements and obtain roles tags related to in-game information.‎ Those tags will be required in order to participate in our trials.`;
			const guildNicknameMessage = `Please [Change Your Nickname](https://support.discord.com/hc/en-us/articles/219070107-Server-Nicknames) in Discord to match your in-game UserID.`

			// Format Embeded Message For The Welcome Channel In Discord
			const embedWelcome = new MessageEmbed()
				.setTitle(guildWelcomeMessage)
				.setDescription(guildDescription)
				.setColor(guildOrange)
				.setThumbnail(guildIcon)
				.addFields(
					{ name: `Let Us Know Who You Are`, value: guildNicknameMessage, inline: false }
				)
			const embedRules = new MessageEmbed()
				.setTitle(`Guild Rules`)
				.setDescription(`>>> ${guildRules.join(`\n\n`)}`)
				.addFields(
					{ name: `\u200B`, value: guildRulesConsequences, inline: false }
				)
				.setColor(guildOrange)
			const embedVerification = new MessageEmbed()
				.setTitle(`Verification System`)
				.setDescription(guildVerification)
				.setColor(guildOrange)
			// Send the Embed And The Guild Invite Link
			msgObject.delete(3000);
			msgObject.channel.send({embeds: [embedWelcome, embedRules, embedVerification]})
				.then(msgObject.channel.send(guildInviteURL));
		});
	},

};
