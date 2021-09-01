const { MessageEmbed } = require(`discord.js`);
const { readFile } = require(`fs`);
module.exports = {
    name: `guildMemberUpdate`,
    once: false,
    execute(oldMember, newMember, client) {
        // Get Guild Information From JSON File
        const guildHellfireDominion = `./Data/HellfireDominion/guild.json`;
        readFile(guildHellfireDominion, function (err, data) {
            if (err) throw err;
            const dataHellfireDominion = JSON.parse(data);
            const guildID = newMember.guild.id;
            const roles = dataHellfireDominion.roles;
            const rolesSeparator = roles.separator;
            if (oldMember.pending === true && newMember.pending === false) {
                // `++ ++ [${newMember.username} has accepted the guild rules.]`;
                console.log(`    └ [${newMember.user.tag}] has accepted the guild rules.`);

                // Set Roles To Give When Accepting Membership Screening
                const rolesIDArray = [
                    roles.default,
                    rolesSeparator.cores,
                    rolesSeparator.clears,
                    rolesSeparator.interests,
                    rolesSeparator.prerequisites,
                    rolesSeparator.ranks
                ]
                let rolesArray = []
                console.log(`Assigning Roles:`);

                // Assign Roles To User
                rolesIDArray.forEach(async (role) => {
                    newMember.roles.add(role);
                    const roleObject = client.guilds.resolve(guildID).roles.resolve(role)
                    console.log(roleObject.name)
                    await rolesArray.push(roleObject.name);
                });
                const MemberLogChannel = client.guilds.resolve(guildID).channels.resolve(`579451315051167755`);
                console.log(`Successfully Assigned Roles`);

                // Send Console Log and Embed Notifications
                // console.log(`    └ [${newMember.user.tag}] has accepted the guild rules.`)
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
