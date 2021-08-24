module.exports = {
    name: `guildMemberUpdate`,
    once: false,
    execute(oldMember, newMember, client) {
        // Get Guild Information From JSON File
		const guildHellfireDominion = `./Data/hd.json`;
		readFile(guildHellfireDominion, function (err, data) {
			if (err) throw err;
			const dataHellfireDominion = JSON.parse(data);
            const guildID = dataHellfireDominion.guildID;
            const roles = dataHellfireDominion.roles;
            const rolesSeparator = roles.separator;
            const { MessageEmbed } = require(`discord.js`)
            if (oldMember.pending === true && newMember.pending === false) {
                `++ ++ [${newMember.username} has accepted the guild rules.]`;
                // Set Roles To Give When Accepting Membership Screening
                const rolesIDArray = [
                    roles.default,
                    rolesSeparator.cores,
                    rolesSeparator.clears,
                    rolesSeparator.interests,
                    rolesSeparator.prerequisites,
                    rolesSeparator.ranks]
                let rolesArray = []
                // Assign Roles To User
                rolesIDArray.forEach(async (role) => {
                    newMember.roles.add(role);
                    await rolesArray.push(client.guilds.resolve(guildID).roles.resolve(role).name);
                });
                const MemberLogChannel = client.guilds.resolve(guildID).channels.resolve(`579451315051167755`);

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
        });
    }
}