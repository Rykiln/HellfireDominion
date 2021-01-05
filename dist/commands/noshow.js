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
class NoShow {
    constructor() {
        this._command = "noshow";
    }
    help() {
        return "This command does absolutely nothing!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            // Require Raid Lead, Officer, or GM to use this command
            if(!msgObject.member.hasPermissions("MANAGE_ROLES")){
                msgObject.delete();
                msgObject.reply(`You do not have permissions to use this command.`).then(r => r.delete(5000));
                channelNoShow.send(`${msgObject.author} has attempted to use the .noshow command and was denied`);
                return ;
            }
            // Disallow Julius from using this command
            if(msgObject.member.id === "566817192901869568"){
                msgObject.delete();
                msgObject.reply(`Aww, that's cute..... The kids are playing again. If this is a real no-show, please get an adult to use this command for you`).then(r => r.delete(5000));
                channelNoShow.send(`${msgObject.author} has attempted to use the .noshow command and was denied`);
                return;
            }
            let iconGuild = msgObject.guild.iconURL;
            let iconClient = client.user.displayAvatarURL;
            let mentionedMember = msgObject.mentions.users.first();
            let mentionedMemberName = mentionedMember.username;
            let mentionedMemberID = mentionedMember.id;
            let eventname = msgObject.channel.name;
            let channelNoShow = client.channels.get(`586340669459660820`);
            let warnedby = msgObject.author.username;
            let embed = new Discord.RichEmbed()
                .setTitle(`Guild Member Added To No Show List`)
                .setColor(0xFF0000)
                .setThumbnail(mentionedMember.displayAvatarURL)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField(`Guild Member`, mentionedMember)
                .addField(`Event`, eventname)
                .addField(`Warned By`, warnedby);
            channelNoShow.send(embed)
               .catch(console.error);
            const fs = require("fs");
            fs.readFile("./noshow.json", function(err, data){
                if (err) throw err;
   
                const noshows = JSON.parse(data);
                console.log(noshows);
                let newObject = {
                    Member: (mentionedMemberName),
                    ID: (mentionedMemberID),
                    event: (eventname),
                    warnedby: (warnedby),
                };
                noshows.push(newObject);
                fs.writeFile ("./noshow.json", JSON.stringify (noshows, null, 4), err => {
                    if (err) throw err;
                });
            msgObject.delete();
            
            let embedDM = new Discord.RichEmbed()
                .setTitle(`We Missed You Today!`)
                .setColor(0xFF9900)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .setDescription(`Hello ${mentionedMemberName}. You missed a guild event that you signed up for in our Discord. We hope that everything is okay. As per our guild rules, this is considered as a no-show, and three (3) no-shows can result in you being excluded from future events, or possibly even removed from the guild. Please see our [Guild Info](https://discordapp.com/channels/694306288250781699/728692333280886884/728693715794788373) channel to review the guild rules. With this said, we do understand that life happens. Just let us know when you're not going to make it. Also if you missed this because of an emergency, we're not heartless, message an officer and let one of us know, we don't need the private details, but we can remove this no-show for valid reasons.`)
                .addField(`Event`, eventname);
            mentionedMember.send(embedDM);
            })
        });
    }
}
exports.default = NoShow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiel90ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy96X3RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsV0FBVztJQUFoQztRQUNxQixhQUFRLEdBQUcsYUFBYSxDQUFBO0lBZTdDLENBQUM7SUFiRyxJQUFJO1FBQ0EsT0FBTyx1Q0FBdUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUMvRSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzlDLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3BDLENBQUM7S0FBQTtDQUNKO0FBaEJELDhCQWdCQyJ9