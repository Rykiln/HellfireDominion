import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class Undaunted implements IBotCommand {
    private readonly _command = "undaunted"
    
    help(): string {
        return "Displays Basic Information About Undaunted And Pledges."
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let iconGuild = msgObject.guild.iconURL;
        let iconClient = client.user.displayAvatarURL;
	    let embed = new Discord.RichEmbed()
            .setTitle(`Undaunted - Dungeons, Pledges, Rewards`)
	        .setColor("#000099")
	        .setFooter(client.user.username, iconClient)
            .setTimestamp()
            // Set Display Image In Embed (`attachment:FILENAME`) // File Details Populated Below
            .setImage(`attachment://undaunted.info.png`) 
        msgObject.delete()
            .catch(console.error);
        msgObject.channel.send({embed, files:[{
            // Set Image Path And Name For Use Above (attachment: `../src/images/FILENAME` | name: `FILENAME`)
            attachment:`../src/images/undaunted.info.png`,
            name:`undaunted.info.png`
        }]})
		    .catch(console.error);
        
    }
}