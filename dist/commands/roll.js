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
class Roll {
    constructor() {
        this._command = "roll";
    }
    help() {
        return "Random Dice Rolls. ex: [/roll] [/roll 10] [/roll 3d6] [/roll 3d6+4]";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            //msgObject.delete();
            let iconClient = client.user.avatarURL;
            let diceRoll = args[0].split(/[Dd+]/);
            let diceCount = parseFloat(diceRoll[0]);
            let diceSides = parseFloat(diceRoll[1]);
            let diceModifier = parseFloat(diceRoll[2]);
            let roller = msgObject.author.username;
            var diceTotal = 0;
            var diceResult = 0;
            var roll = 0;
            var rolls = [];
            if (!args) {
                return;
            }
            if (!diceRoll[0]) {
                diceCount = 1;
                diceSides = diceRoll[1];
            }
            if (!diceRoll[1]) {
                diceCount = 1;
                diceSides = parseFloat(diceRoll[0]);
            }
            for (var _i = 0; _i < diceCount; _i++) {
                roll = (Math.floor((Math.random() * diceSides) + 1));
                rolls.push(roll);
                diceTotal = diceTotal + roll;
            }
            if (!diceModifier) {
                diceModifier = 0;
            }
            diceResult = diceTotal + diceModifier;
            let embed = new Discord.RichEmbed()
                .setColor(`#baf2ef`)
                .setTitle(`${roller} Rolled ${diceResult}`)
                .setThumbnail(`https://bestanimations.com/Games/Dice/rolling-dice-gif-3.gif`)
                .setFooter(client.user.username, iconClient)
                .addField(`Dice`, `[${rolls.join("], [")}]`)
                .addField(`Modifier`, `+${diceModifier}`, true)
                .addField(`Actual Roll`, args, true);
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = Roll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9yb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFLdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUNxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBa0R0QyxDQUFDO0lBaERHLElBQUk7UUFDQSxPQUFPLHFFQUFxRSxDQUFBO0lBQ2hGLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBQy9FLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUNsQixJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQTtZQUN0QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1lBQ3RDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQTtZQUNqQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUE7WUFDbEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFBO1lBQ1osSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFBO1lBQ2QsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDZCxTQUFTLEdBQUcsQ0FBQyxDQUFBO2dCQUNiLFNBQVMsR0FBRyxFQUFFLENBQUE7YUFDakI7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNkLFNBQVMsR0FBRyxDQUFDLENBQUE7Z0JBQ2IsU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QztZQUNELEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUU7Z0JBQ25DLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDcEQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDaEIsU0FBUyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDaEM7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUFFLFlBQVksR0FBRyxDQUFDLENBQUE7YUFBRTtZQUN2QyxVQUFVLEdBQUcsU0FBUyxHQUFHLFlBQVksQ0FBQTtZQUNyQyxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQzlCLFFBQVEsQ0FBQyxTQUFTLENBQUM7aUJBQ25CLFFBQVEsQ0FBQyxHQUFHLE1BQU0sV0FBVyxJQUFJLEVBQUUsQ0FBQztpQkFFcEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztpQkFDM0MsUUFBUSxDQUFDLE1BQU0sRUFBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDMUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLFlBQVksRUFBRSxFQUFFLElBQUksQ0FBQztpQkFDOUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDeEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUV4QixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUM7S0FBQTtDQUNKO0FBbkRELHVCQW1EQyJ9