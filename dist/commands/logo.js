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
class Logo {
    constructor() {
        this._command = "logo";
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
            let embed = new Discord.RichEmbed()
                .setTitle(`${msgObject.guild.name} Guild Logo`)
                .setDescription(`Please feel free to use this logo when live streaming or recording content related to Elder Scrolls Online to represent the guild.`)
                .setColor("#000099")
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .setImage(`attachment://HDLogo.png`)
                //.addField(`Illustrator`, `Rykiln`, true)
                //.addField(`Copyright`, `©2018`, true)
                //.addField(`Description`, `Guild Initials on fire, with Meridia's Beacon and Dawnbreaker`, true);
            msgObject.channel.send({ embed, files: [{
                attachment: `../src/images/HDLogo.png`,
                name: `HDLogo.png`
            }] })
                .catch(console.error);
        });
    }
}
exports.default = Logo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9sb2dvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUNxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBMEJ0QyxDQUFDO0lBeEJHLElBQUk7UUFDQSxPQUFPLDBCQUEwQixDQUFBO0lBQ3JDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBQy9FLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzNDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDOUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUMzQixRQUFRLENBQUMsZ0NBQWdDLENBQUM7aUJBQzdDLGNBQWMsQ0FBQyxvSUFBb0ksQ0FBQztpQkFDcEosUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztpQkFDM0MsWUFBWSxFQUFFO2lCQUNkLFFBQVEsQ0FBQywrR0FBK0csQ0FBQztpQkFDekgsUUFBUSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO2lCQUN2QyxRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7aUJBQ3BDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsK0RBQStELEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDaEcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUM5QixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUM7S0FBQTtDQUNKO0FBM0JELHVCQTJCQyJ9