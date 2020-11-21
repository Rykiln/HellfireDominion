import * as Discord from "discord.js";
import { IBotCommand } from "../api";
import { randomFillSync } from "crypto";
import { disconnect } from "cluster";

export default class Roll implements IBotCommand {
    private readonly _command = "roll"

    help(): string {
        return "Random Dice Rolls. ex: [/roll] [/roll 10] [/roll 3d6] [/roll 3d6+4]"
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        msgObject.delete()                      
        let iconClient = client.user.avatarURL
        let diceRoll = args[0].split(/[d+]/);
        let diceCount = parseFloat(diceRoll[0]);
        let diceSides = parseFloat(diceRoll[1]);
        let diceModifier = parseFloat(diceRoll[2]);
        let roller = msgObject.author.username
        var diceTotal = 0
        var diceResult = 0
        var roll = 0
        var rolls = []
        if (!args) { return; }
        if (!diceRoll[0]) {
            diceCount = 1
            diceSides = 10
        }
        if (!diceRoll[1]) {
            diceCount = 1
            diceSides = parseFloat(diceRoll[0]);
        }
        for (var _i = 0; _i < diceCount; _i++) {
            roll = (Math.floor((Math.random() * diceSides) + 1))
            rolls.push(roll)
            diceTotal = diceTotal + roll;
        }
        if (!diceModifier) { diceModifier = 0 }
        diceResult = diceTotal + diceModifier
        let embed = new Discord.RichEmbed()
            .setColor(`#baf2ef`)
            .setTitle(`${roller} Rolled ${args}`)
            //.setDescription()
            .setFooter(client.user.username, iconClient)
            .addField(`Dice`,`[${rolls.join("], [")}]`)
            .addField(`Modifier`, `+${diceModifier}`, true)
            .addField(`Total`, diceResult, true)
        msgObject.channel.send(embed)
        //msgObject.channel.send(`${roller} Rolled a ${diceResult} out of a possible ${diceCount * diceSides + diceModifier}`)
            .catch(console.error);
    }
}