const Discord = require("discord.js");
module.exports = {
    name: 'guild',						                        // Name of this command. Required for all commands.
    description: 'Displays information about the guild.',		// [Optional] Description of this command for the help command
    aliases: [`guildinfo`],               			            // [Optional] Permits additional command names to be used for this command 
    // usage: '[@mention]',		                                // [Optional] Displays how to use this command in the help command.
    args: false, 								                // [Optional] When True - Requires Arguments Be Provided In Message Object
    guildOnly: true, 							                // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
    cooldown: 5, 								                // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
    execute(msgObject, args, client) {
        // let officersSR = msgObject.guild.roles.find(role => role.name === "Officer").members.map(m => m.user);
        // let officersJR = msgObject.guild.roles.find(role => role.name === "Raid Lead").members.map(m => m.user);
        // let membercount = msgObject.guild.roles.find(role => role.name === "Guildmate").members.map(m => m.user).length;
        // let guestcount = msgObject.guild.members.filter(member => !member.user.bot).size - membercount;
        let embed = new Discord.MessageEmbed()
            .setTitle(msgObject.guild.name)
            .setDescription(`.`)
            .setColor(0xff9900)
            .setThumbnail(msgObject.guild.iconURL())
            .setFooter(client.user.username, msgObject.guild.iconURL())
            .setTimestamp()
            // .addField("Guild Members", membercount, true)
            // .addField("Discord Guests", guestcount, true)
            // .addField("Officers (Guild Admins)", officersSR.sort(), false)
            // .addField("Raid Leads (Event Leaders)", officersJR.sort(), false)
            .addField("Created On", msgObject.guild.createdAt, true);
        msgObject.channel.send(embed)
    }
};