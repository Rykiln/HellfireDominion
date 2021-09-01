module.exports = {
    name: `guildMemberAdd`,
    once: false,
    execute(member){
        console.log(`[${member.guild.name}] ++ [${member.user.username}] has joined.`)
    }
}