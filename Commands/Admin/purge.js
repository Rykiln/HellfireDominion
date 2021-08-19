module.exports = {
	// Name of this command. Required for all commands.
	name: 'purge',
	
	// [Optional] Description of this command for the help command
	description: 'ADMIN: Deletes multiple messages at a time.',
	
	// [Optional] Permits additional command names to be used for this command 
	aliases: ['clear', `cleanup`, `wipe`],
	
	// [Optional] Displays how to use this command in the help command.
	usage: '[#num of messages to delete]',
	
	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
	permissions: `MANAGE_MESSAGES`,
	
	// [Optional] When True - Requires Arguments Be Provided In Message Object
	args: true,
	
	// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	guildOnly: true,
	
	// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	cooldown: 5,
	async execute(msgObject, args) {

		// Delete Intializing Message From User
		msgObject.delete()
			.catch(console.error);
		// Validate User Input Was A Number
		let numberOfMessagesToDelete = Number(args[0]);
		if (numberOfMessagesToDelete == NaN || numberOfMessagesToDelete < 1 || numberOfMessagesToDelete > 100) {
			msgObject.channel.send({content: `Sorry, ${msgObject.author}, but that is not a valid number.`})
				.then(msg => {
					setTimeout(() => msg.delete(), 5000)
						.catch(console.error);
				});
			return;
		}
		// Get Array Of Messages To Delete
		try {
			const fetched = await msgObject.channel.messages.fetch({ limit: numberOfMessagesToDelete });
			const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned); // Checks For Pinned Messages And Removes Them From The Array
			await msgObject.channel.bulkDelete(notPinned, true); // Delete Messages
		} catch (error) {
			console.log(error);
		}
	},
};
