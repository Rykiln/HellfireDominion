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
class Boosters {
    constructor() {
        this._command = "boosters";
    }
    help() {
        return "Displays The Guild Logo.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let iconGuild = msgObject.guild.iconURL;
            let iconClient = client.user.displayAvatarURL;
            let BoostColor = msgObject.guild.roles.get(`586312280527077388`).color;
            let OIPBoosters = msgObject.guild.roles.get(`586312280527077388`).members.map(m => m.user.tag);
            let embed = new Discord.RichEmbed()
                .setTitle(`${msgObject.guild.name} Server Boosters`)
                .setColor(BoostColor)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .setThumbnail(`attachment://hdanim.gif`)
                .addField(`Boost Level ${msgObject.guild.premiumTier}`,`This server has ${msgObject.guild.premiumSubscriptionCount} boosts.`)
                .addField(`Server Boosters`, OIPBoosters)
            msgObject.delete();
            msgObject.channel.send({ embed, files: [{
                attachment: `../src/images/hdanim.gif`,
                name: `hdanim.gif`
            }
        ] })
                .catch(console.error);
        });
    }
}
exports.default = Boosters;