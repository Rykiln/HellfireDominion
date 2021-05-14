const Discord = require("discord.js");
module.exports = {
    name: 'member',						                        // Name of this command. Required for all commands.
    description: 'Gets Guild Information Of A Member.',			// [Optional] Description of this command for the help command
    aliases: ['userinfo', `user`, `memberinfo`],           	    // [Optional] Permits additional command names to be used for this command 
    usage: '[@mention]',		                                // [Optional] Displays how to use this command in the help command.
    args: false, 								                // [Optional] When True - Requires Arguments Be Provided In Message Object
    guildOnly: true, 							                // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
    cooldown: 5, 								                // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
    execute(msgObject, args, client) {
        msgObject.guild.members.fetch(msgObject.mentions.users.first() || msgObject.author)
            // msgObject.guild.fetchMember(args.mentions.users.first() || msgObject.author)
            .then(usrMember => {
                let nick = usrMember.nickname;
                if (!nick) { nick = usrMember.user.username };
                // let rolesArray = [`389273680334815242`, `389273982546739200`, `389274052885348372`, `389274119717388290`, `629438634386259968`, `629439033923207168`, `694707033110478849`, `629439039396642827`, `612483656241643525`] // OOPS ROLES
                // let rankId = rolesArray.find(id => usrMember.roles.keyArray().includes(id))

                // Retrieve JSON Data For Warning and No-Show Information
                const fs = require(`fs`);
                fs.readFile(process.env.HD_JSON_WARNINGS, function(err, data){
                    if (err) throw err;

                    const warns = JSON.parse(data);
                    // Function To Get A Count Of Total Warnings For The Member
                    function getOccurence(array, value){
                        let count = 0
                        array.forEach((v) => (v[`ID`] === value && count++))
                        return count;
                    }
                    // Function To Get The Names Of Channels The Member Was Marked As A No-Show In For The Member
                    function getEvents(array, value){
                        let events = []
                        array.forEach((v) => (v[`ID`] === value && events.push(v[`event`])))
                        return events;
                    }
                    // Function To Get The Names Of The Raid Lead Or Officer That Submitted The No-Show For The Member
                    function getWarnedBy(array, value){
                        let events = []
                        array.forEach((v) => (v[`ID`] === value && events.push(v[`warnedby`])))
                        return events;
                    }
                    // Store Variables And Format As Text If Blank To Prevent Null Values In MessageEmbed
                    let loggedwarnings = getOccurence(warns, usrMember.id);
                    let loggedevent = getEvents(warns, usrMember.id);
                    let warnedby = getWarnedBy(warns, usrMember.id);
                    if(loggedwarnings.length==0){loggedwarnings="None"};
                    if(loggedevent.length==0){loggedevent="None"};
                    if(warnedby.length==0){warnedby="None"};

                    let embed = new Discord.MessageEmbed()
                        .setColor(usrMember.displayHexColor)
                        .setTitle("Member Information")
                        .setThumbnail(usrMember.user.displayAvatarURL())
                        .setFooter(client.user.username, client.user.displayAvatarURL())
                        .setTimestamp()
                        .addField("Server Nickname", nick, true)
                        .addField("Account Name", usrMember.user.username, true)
                        .addField("Discord ID", usrMember.user.tag, true)
                        // .addField("Your Guild Rank", usrMember.roles.get(rankId))
                        .addField(`Your Guild Rank`, usrMember.roles.highest)
                        .addField("You Joined The Guild", usrMember.joinedAt)
                        
                        .addField(`Warnings`, loggedwarnings)
                        .addField(`Events`, loggedevent, true)
                        .addField(`Warned By`, warnedby, true);
                    msgObject.channel.send(embed);
                })
            });


    }
};