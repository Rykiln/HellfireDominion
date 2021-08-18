module.exports = {
    name: `guildMemberUpdate`,
    once: false,
    execute(oldMember, newMember, client) {
        const GuildID = process.env.HD_GUILDID
        const { MessageEmbed } = require(`discord.js`)
        if (oldMember.pending === true && newMember.pending === false) {
            `++ ++ [${newMember.username} has accepted the guild rules.]`;
            // Define Default Role
            const roleDefault = process.env.HD_ROLE_DEFAULT;
            // Define Role Separators 
            const roleSeparatorCores = process.env.HD_ROLE_SEPARATOR_CORES;
            const roleSeparatorClears = process.env.HD_ROLE_SEPARATOR_CLEARS;
            const roleSeparatorInterests = process.env.HD_ROLE_SEPARATOR_INTERESTS;
            const roleSeparatorPrerequisites = process.env.HD_ROLE_SEPARATOR_PREREQUISITES;
            const roleSeparatorRanks = process.env.HD_ROLE_SEPARATOR_RANKS;
            const rolesIDArray = [roleDefault, roleSeparatorCores, roleSeparatorClears, roleSeparatorInterests, roleSeparatorPrerequisites, roleSeparatorRanks]
            let rolesArray = []
            rolesIDArray.forEach(async (role) => {
                newMember.roles.add(role);
                await rolesArray.push(client.guilds.resolve(GuildID).roles.resolve(role).name);
            });
            const MemberLogChannel = client.guilds.resolve(GuildID).channels.resolve(process.env.HD_CHANNEL_MEMBERLOGS);
            // Send Console Log and Embed Notifications
            console.log(`    └ [${newMember.user.tag}] has accepted the guild rules.`)
            const embed = new MessageEmbed()
                .setAuthor(newMember.user.tag.toString(), newMember.user.displayAvatarURL())
                .setColor(0x00ff00)
                .setDescription(`${newMember.toString()} has accepted the guild rules.`)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .addField('Name', `${newMember.user.tag.toString()} (${newMember.user.id}) ${newMember.toString()}`)
                .addField('Granted Roles', rolesArray.join('\n'));
            MemberLogChannel.send({ embeds: [embed] });
        }
    }
}