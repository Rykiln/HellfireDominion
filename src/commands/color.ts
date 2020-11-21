import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class Color implements IBotCommand {
    private readonly _command = "color"
    
    help(): string {
        return "Picks Random Colors And Sends HEX Codes."
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let randomColor = `#`+Math.floor(Math.random()*16777215).toString(16);
        let embed = new Discord.RichEmbed()
            .setColor(randomColor)
            .setTitle(`Random Color`)
            .setDescription(randomColor)
        msgObject.channel.send(embed)
            .catch(console.error)
    };
}