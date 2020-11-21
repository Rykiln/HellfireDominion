import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class Send implements IBotCommand {
    private readonly _command = "send"
    
    help(): string {
        return "Sends A Formatted Message Into Chat."
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        var destinationChannel = msgObject.mentions.channels.first() || msgObject.channel;
        if(destinationChannel === msgObject.channel){var suppliedMessage = args.join(" ") || "";}
        else{var suppliedMessage = args.slice(1).join(" ") || "";}
        msgObject.delete();
        destinationChannel.send(suppliedMessage);
    }


}