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
class Guild {
    constructor() {
        this._command = "guild";
    }
    help() {
        return "Displays Guild Information.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let iconGuild = msgObject.guild.iconURL;
            let iconClient = client.user.displayAvatarURL;
            let officersSR = msgObject.guild.roles.find(role => role.name === "Officer").members.map(m => m.user);
            let officersJR = msgObject.guild.roles.find(role => role.name === "Raid Lead").members.map(m => m.user);
            let membercount = msgObject.guild.roles.find(role => role.name === "Guildmate").members.map(m => m.user).length;
            let guestcount = msgObject.guild.members.filter(member => !member.user.bot).size - membercount;
            let embed = new Discord.RichEmbed()
                .setTitle(msgObject.guild.name)
                .setDescription(`Welcome to Hellfire Dominion! We are a trials guild with a focus on endgame content.`)
                .setColor(0x000099)
                .setThumbnail(iconGuild)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField("Guild Members", membercount, true)
                .addField("Discord Guests", guestcount, true)
                .addField("Officers (Guild Admins)", officersSR.sort(), false)
                .addField("Raid Leads (Event Leaders)", officersJR.sort(), false)
                .addField("Created On", msgObject.guild.createdAt, true);
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = Guild;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvZ3VpbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxNQUFxQixLQUFLO0lBQTFCO1FBQ3FCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUFrQ3ZDLENBQUM7SUFoQ0csSUFBSTtRQUNBLE9BQU8sNkJBQTZCLENBQUE7SUFDeEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFDbEYsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDeEMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRCxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEcsSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUduSCxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztZQUM1RixJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQzNCLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDakMsY0FBYyxDQUFDLDJMQUEyTCxDQUFDO2lCQUMzTSxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUNsQixZQUFZLENBQUMsU0FBUyxDQUFDO2lCQUN2QixTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO2lCQUMzQyxZQUFZLEVBQUU7aUJBQ2QsUUFBUSxDQUFDLFNBQVMsRUFBQyw2RkFBNkYsQ0FBQztpQkFDakgsUUFBUSxDQUFDLGlCQUFpQixFQUFFLCtLQUErSyxDQUFDO2lCQUNsTixRQUFRLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUM7aUJBQzVDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDO2lCQUM1QyxRQUFRLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUM7aUJBQ3pDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUM7S0FBQTtDQUNKO0FBbkNELHdCQW1DQyJ9