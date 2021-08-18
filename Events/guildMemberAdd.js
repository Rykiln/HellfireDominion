module.exports = {
    name: `guildMemberAdd`,
    once: false,
    execute(member){
        console.log(`++ [${member.user.username}] has joined [${member.guild.name}].`)
    }
}