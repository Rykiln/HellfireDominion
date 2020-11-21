import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class Mawyard implements IBotCommand {
    private readonly _command = "mawyard"
    
    help(): string {
        return "Displays Animated Path Outline For Maw Runners."
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let iconGuild = msgObject.guild.iconURL;
	    let iconClient = client.user.displayAvatarURL;
	    let embed = new Discord.RichEmbed()
            .setTitle(`Maw of Lorkhaj - Running Paths`)
	        .setColor("#000099")
	        .setFooter(client.user.username, iconClient)
	        .setTimestamp()
            .setImage(`https://media.discordapp.net/attachments/559754186837983252/566371607447076937/VMAW-BACKYARD.gif`);
            //.setImage({files:[__dirname + "./images/undaunted.info.png"]});
        msgObject.delete()
            .catch(console.error);
        msgObject.channel.send(embed)
		    .catch(console.error);
        
    }
}