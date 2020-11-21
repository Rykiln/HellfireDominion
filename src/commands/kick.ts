import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class Kick implements IBotCommand {
    private readonly _command = "kick"
    
    help(): string {
        return "ADMIN - Kicks A Mentioned User From The Server!"
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let logKick = `${msgObject.author.username}: ${suppliedReason}`;

        msgObject.delete();

        if(!msgObject.member.hasPermission("KICK_MEMBERS")){
            msgObject.channel.send(`You Don't Have Permissions To Kick Guild Members!`);
        }
        if(!mentionedUser){
            msgObject.channel.send(`Can't Find User`);
        }
        msgObject.guild.member(mentionedUser).kick(logKick)
            .then(console.log)
            .catch(console.error)
    }


}