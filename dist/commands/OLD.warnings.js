"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return __awaiter(this, void 0, void 0, function* () {
            let iconGuild = msgObject.guild.iconURL;
            let iconClient = client.user.displayAvatarURL;
            let mentionedMember = msgObject.mentions.users.first();
            let mentionedMemberName = mentionedMember.username;
            let mentionedMemberID = mentionedMember.id 
            const fs = require("fs");
            fs.readFile("./noshow.json", function(err, data){
                if (err) throw err;
            const noshows = JSON.parse(data);
            function getOccurence(array, value){
                var count = 0
                array.forEach((v) => (v[`ID`] === value && count++))
                return count;
            }
            function getEvents(array, value){
                var events = []
                array.forEach((v) => (v[`ID`] === value && events.push(v[`event`])))
                return events;
            }
            function getWarnedBy(array, value){
                var events = []
                array.forEach((v) => (v[`ID`] === value && events.push(v[`warnedby`])))
                return events;
            }
            var loggedwarnings = getOccurence(noshows, mentionedMemberID);
            var loggedevent = getEvents(noshows, mentionedMemberID);
            var warnedby = getWarnedBy(noshows, mentionedMemberID);
            if(loggedwarnings.length==0){loggedwarnings="None"};
            if(loggedevent.length==0){loggedevent="None"};
            if(warnedby.length==0){warnedby="None"};
            let embed = new Discord.RichEmbed()
                .setTitle(`Guild Member No-Show Warnings Issued`)
                .setColor(0xFF9900)
                .setThumbnail(mentionedMember.displayAvatarURL)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField(`Member`, mentionedMember, true)
                .addField(`Warnings`, loggedwarnings, true)
                .addBlankField()
                .addField(`Events`, loggedevent, true)
                .addField(`Warned By`, warnedby, true);
            msgObject.channel.send(embed)
                .catch(console.error);
            });
        });
    }
}
exports.default = Warnings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiel90ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy96X3RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsV0FBVztJQUFoQztRQUNxQixhQUFRLEdBQUcsYUFBYSxDQUFBO0lBZTdDLENBQUM7SUFiRyxJQUFJO1FBQ0EsT0FBTyx1Q0FBdUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUMvRSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzlDLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3BDLENBQUM7S0FBQTtDQUNKO0FBaEJELDhCQWdCQyJ9