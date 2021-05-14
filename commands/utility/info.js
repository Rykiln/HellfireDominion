const Discord = require("discord.js");
module.exports = {
    name: 'info',						                        // Name of this command. Required for all commands.
    description: 'Displays information about this bot.',		// [Optional] Description of this command for the help command
    aliases: [`client`,`bot`],               			        // [Optional] Permits additional command names to be used for this command 
    // usage: '[@mention]',		                                // [Optional] Displays how to use this command in the help command.
    args: false, 								                // [Optional] When True - Requires Arguments Be Provided In Message Object
    guildOnly: false, 							                // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
    cooldown: 5, 								                // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
    execute(msgObject, args, client) {
        const BotAuthor = client.users.resolve(`254467802705035264`);
        const Copyright = `Copyright © 2019 @Rykiln | All Rights Reserved`
        const embed = new Discord.MessageEmbed()
            .setTitle(client.user.username)
            .setDescription(`This Discord bot was created for use by ${msgObject.guild.name}, an Elder Scrolls Online guild.`)
            .setColor(0x000099)
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .addField(`Author`, BotAuthor)
            .addField(`Guilds`, client.guilds.cache.map(guild => guild.name))
            .addField(`Copyright`, Copyright)
        msgObject.channel.send(embed)
            .catch(console.error);
    }
};