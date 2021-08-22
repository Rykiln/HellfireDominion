const { MessageEmbed } = require("discord.js");
module.exports = {
    // Name of this command. Required for all commands.
    name: 'info',

    // [Optional] Description of this command for the help command
    description: 'Displays information about this bot.',

    // [Optional] Permits additional command names to be used for this command 
    aliases: [`client`, `bot`],

    // [Optional] Displays how to use this command in the help command.
    // usage: '[@mention]',

    // [Optional] When True - Requires Arguments Be Provided In Message Object
    args: false,

    // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
    guildOnly: false,

    // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
    cooldown: 5,
    execute(msgObject, args, client) {
        const BotAuthor = client.users.resolve(`254467802705035264`);
        const Copyright = `Copyright © 2019 @Rykiln | All Rights Reserved`
        const embed = new MessageEmbed()
            .setTitle(client.user.username)
            .setDescription(`This Discord bot was created for use by ${msgObject.guild.name}, an Elder Scrolls Online guild.`)
            .setColor(0x000099)
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .addFields(
                { name: `Author`, value: BotAuthor.toString(), inline: false },
                { name: `Guilds`, value: client.guilds.cache.map(guild => guild.name), inline: false },
                { name: `Copyright`, value: Copyright, inline: false }
            )

        msgObject.channel.send({ embeds: [embed] })
            .catch(console.error);
    }
};
