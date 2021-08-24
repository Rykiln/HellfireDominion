const { MessageEmbed } = require("discord.js");
module.exports = {
    // Name of this command. Required for all commands.
    name: 'guild',
    
    // [Optional] Description of this command for the help command
    description: 'Displays information about the guild.',
    
    // [Optional] Permits additional command names to be used for this command 
    aliases: [`guildinfo`],
    
    // [Optional] Displays how to use this command in the help command.
    // usage: '[@mention]',
    
    // [Optional] When True - Requires Arguments Be Provided In Message Object
    args: false,
    
    // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
    guildOnly: true,
    
    // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
    cooldown: 5,
    execute(msgObject, args, client) {

        // Get Guild Information From JSON File
		const guildHellfireDominion = `./Data/hd.json`;
		readFile(guildHellfireDominion, function (err, data) {
			if (err) throw err;
			const dataHellfireDominion = JSON.parse(data);
			const guildYellow = dataHellfireDominion.colors.yellow;
            // Format and Send Embed To Channel
            const embed = new MessageEmbed()
                .setTitle(msgObject.guild.name)
                .setDescription(`.`)
                .setColor(guildYellow)
                .setThumbnail(msgObject.guild.iconURL())
                .setFooter(client.user.username, msgObject.guild.iconURL())
                .setTimestamp()
                .addField("Created On", msgObject.guild.createdAt, true);
            msgObject.channel.send({ embeds: [embed] })
        });
    }
};
