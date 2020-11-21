import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class testCommand implements IBotCommand {
    private readonly _command = "testcommand"
    
    help(): string {
        return "This command does absolutely nothing!"
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let iconGuild = msgObject.guild.iconURL;
	    let iconClient = client.user.displayAvatarURL;
	    let embed = new Discord.RichEmbed()
    }
}