module.exports = {
    name: `guildMemberRemove`,
    once: false,
    execute(member) {
        console.log(`[${member.guild.name}] -- [${member.user.username}] has left.`)
    }
}