import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class testCommand implements IBotCommand {
    private readonly _command = "testcommand"
    
    help(): string {
        return "ADMIN - Warns A Mentioned User Of A Rule Violation."
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let modRole = msgObject.guild.roles.find("name", "Officers");
	    if(msgObject.member.roles.has(modRole.id)) {
		    let User_Warn = msgObject.guild.member(msgObject.mentions.users.first() || msgObject.guild.members.get(args[0])); 
		    //if(!User_Warn) return msgObject.channel.send("Couldn't find user.");
		    let Reason = args.join(" ").slice(22);
		    let Channel_Rules = msgObject.guild.channels.find('name', "rules-and-guidelines");
		    let Embed_Warning = new Discord.RichEmbed()
		        .setAuthor(msgObject.guild.name, msgObject.guild.iconURL)
		        .setTitle("Warning")
		        .setDescription(User_Warn)
		        .setColor("#FFFF00")
		        //.setFooter(`Warning issued by: ${message.author.username}`, message.author.avatarURL)
		        .setTimestamp()
		        .addField("Reported For Violation", Reason)
		        .addBlankField(true)
		        .addField("Please Review The Guild Rules", Channel_Rules);
		    let Channel_MemberLog = msgObject.guild.channels.find(`name`, "member-logs");
		    //if(!Channel_MemberLog) return msgObject.reply("Couldn't find reports channel.")
		    msgObject.delete().catch(O_o=>{});
		    Channel_MemberLog.send(Embed_Warning)
    			.catch(console.error);
		    User_Warn.send(Embed_Warning)
			    .catch(console.error);
	    } else {msgObject.reply ("You don't have access to use this command")}
    }
}