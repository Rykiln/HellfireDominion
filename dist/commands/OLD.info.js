"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class Info {
    constructor() {
        this._command = "info";
    }
    help() {
        return "Displays Bot Information.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        // console.log(msgObject);
            msgObject.guild.fetchMember(msgObject.mentions.users.first() || msgObject.author)
                .then(usrMember => {
                    let iconClient = client.user.displayAvatarURL;
                    let nick = usrMember.nickname;
                    if(!nick){nick = usrMember.user.username};
                    let rolesArray = [`556562196629422152`,`729371837733273723`,`428231621435719682`,`714271732684292217`,`675934451892617216`,`367476580391452674`,`412335363705667585`,`749604917357838366`,`749091021308166236`]
                    let rankId = rolesArray.find(id => usrMember.roles.keyArray().includes(id))
                    let embed = new Discord.RichEmbed()
                    
                    .setColor(usrMember.displayHexColor)
                    .setTitle("Member Information")
                    .setFooter(usrMember, iconClient)
                    .setTimestamp()
                    .setThumbnail(usrMember.user.displayAvatarURL)
                    .addField("Server Nickname", nick, true)
                    .addField("Your Guild Rank", usrMember.roles.get(rankId), true)
                    .addField("Account Name", usrMember.user.username, true)
                    .addField("Discord ID", usrMember.user.tag, true)
                    .addField("You Joined The Guild", usrMember.joinedAt);
                    msgObject.channel.send(embed)
                        .catch(console.error);
                });
        ;
    }
}
exports.default = Info;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUNxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBMEJ0QyxDQUFDO0lBeEJHLElBQUk7UUFDQSxPQUFPLDJCQUEyQixDQUFBO0lBQ3RDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBQy9FLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDcEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUM5QixRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7aUJBQzFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDOUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztpQkFDM0MsWUFBWSxFQUFFO2lCQUNkLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2lCQUMvQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDO2lCQUM5RCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO2lCQUMvRCxRQUFRLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztpQkFDekQsUUFBUSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7aUJBQ2xELFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDO0tBQUE7Q0FDSjtBQTNCRCx1QkEyQkMifQ==