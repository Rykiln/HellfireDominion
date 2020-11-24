"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class Warnings {
    constructor() {
        this._command = "warnings";
    }
    help() {
        return "This command does absolutely nothing!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        const fs = require("fs");
        const Guild = msgObject.Guild
        // let iconGuild = msgObject.guild.iconURL;
        let iconClient = client.user.displayAvatarURL;
        // let mentionedMember = msgObject.mentions.users.first();
        // let mentionedMemberName = mentionedMember.username;
        // let mentionedMemberID = mentionedMember.id
        
        fs.readFile("./noshow.json", function(err, data){
            if (err) throw err;
            const noshows = JSON.parse(data);
            async function getUniqueUserIds(array){
                var Snowflake = []
                array.forEach(v => Snowflake.push(v[`ID`]))
                var UniqueSnowflake = Snowflake.filter((x, i, a) => a.indexOf(x) ==i)
                var UniqueMembers = []
                for(const v of UniqueSnowflake){
                    await client.fetchUser(v).then(u => UniqueMembers.push(u))
                };
                return UniqueMembers;
            }
            
            function getOccurence(array, value){
                var count = 0
                array.forEach((v) => (v[`ID`] === value && count++))
                return count;
            }

            var Members = []
            getUniqueUserIds(noshows).then(d => {
                Members.push(d);
                var Nick = []
                var Counts = []
                // console.log(d)
                for(const m of d){
                    console.log(m)
                    Nick.push(m.username)
                    Counts.push(getOccurence(noshows, m.id))
                }
                let embed = new Discord.RichEmbed()
                    .setTitle(`Guild Member No-Show Warnings Issued`)
                    .setColor(0xFF9900)
                    .setThumbnail(iconClient)
                    .setFooter(client.user.username, iconClient)
                    .setTimestamp()
                    .addField(`Member`, d, true)
                    .addField(`Nickname`, Nick, true)
                    .addField(`Warnings`, Counts, true);
                msgObject.channel.send(embed)
                    .catch(console.error);
                }); 
            });
           

            
            // console.log(MemberIDs);
            
        };
    };
exports.default = Warnings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiel90ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy96X3RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsV0FBVztJQUFoQztRQUNxQixhQUFRLEdBQUcsYUFBYSxDQUFBO0lBZTdDLENBQUM7SUFiRyxJQUFJO1FBQ0EsT0FBTyx1Q0FBdUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUMvRSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzlDLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3BDLENBQUM7S0FBQTtDQUNKO0FBaEJELDhCQWdCQyJ9