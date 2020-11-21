import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class Ban implements IBotCommand {
    private readonly _command = "ban"
    
    help(): string {
        return "ADMIN - Bans A Mentioned User From The Server!"
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let logBan = `${msgObject.author.username}: ${suppliedReason}`;

        msgObject.delete();
        
        if(!msgObject.member.hasPermission("BAN_MEMBERS")){
            msgObject.channel.send(`You Don't Have Permissions To Ban Guild Members!`);
        }
        if(!mentionedUser){
            msgObject.channel.send(`Can't Find User`);
        }
        msgObject.guild.member(mentionedUser).ban(logBan)
            .then(console.log)
            .catch(console.error)
    }


}