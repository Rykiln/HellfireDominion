const { MessageEmbed } = require(`discord.js`);
const { readFile } = require(`fs`);
module.exports = {
    // Name of this command. Required for all commands.
    name: 'fixroles',

    // [Optional] Description of this command for the help command
    description: 'ADMIN: Adds Separator Roles To Members Who Have Passed Membership Screening.',

    // [Optional] Permits additional command names to be used for this command 
    aliases: ['fix', `fr`],

    // [Optional] Displays how to use this command in the help command.
    // usage: '',

    // [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    permissions: `permissions.FLAGS.MANAGE_ROLES`,

    // [Optional] When True - Requires Arguments Be Provided In Message Object
    // args: true,

    // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
    guildOnly: true,

    // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
    cooldown: 5,

    execute(msgObject) {
        const guildHellfireDominion = `./Data/HellfireDominion/guild.json`;
        readFile(guildHellfireDominion, function (err, data) {
            if (err) throw err;
            const dataHellfireDominion = JSON.parse(data);
            const roles = dataHellfireDominion.roles;
            const rolesSeparator = roles.separator;
            const rolesIDArray = [
                roles.default,
                rolesSeparator.cores,
                rolesSeparator.clears,
                rolesSeparator.interests,
                rolesSeparator.prerequisites,
                rolesSeparator.ranks
            ];
        
            // Get All Members Of The Guild
            const allMembers = msgObject.guild.members;
            allMembers.forEach(member => {
                if(member.pending === true){
                    rolesIDArray.forEach(async (role) => {
                        member.roles.add(role);
                        const roleObject = msgObject.guild.roles.resolve(role);
                        console.log(`Assigning Role: [${roleObject.name}] to [${member.user.tag}]`);
                    });
                };
                console.log(`Successfully Assigned Roles`);
                msgObject.reply({content: `Assigning Roles, Please Allow Up To 20 Minutes To Complete.`});
            });
        });
    },
};