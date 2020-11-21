import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class Info implements IBotCommand {
    private readonly _command = "info"
    
    help(): string {
        return "Displays Bot Information."
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let iconClient = client.user.displayAvatarURL;
		let embed = new Discord.RichEmbed()
		    .setColor(msgObject.member.displayHexColor)
		    .setTitle("Member Information")
		    .setFooter(client.user.username, iconClient)
		    .setTimestamp()
		    .setThumbnail(msgObject.author.displayAvatarURL)
		    .addField("Server Nickname", msgObject.member.displayName,true)
		    .addField("Your Guild Rank", msgObject.member.highestRole, true)
		    .addField("Account Name", msgObject.author.username, true)
		    .addField("Discord ID", msgObject.author.tag, true)
		    .addField("You Joined The Guild", msgObject.member.joinedAt);
		msgObject.channel.send(embed)
			.catch(console.error);
    }
}