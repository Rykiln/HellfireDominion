import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class Logo implements IBotCommand {
    private readonly _command = "logo"
    
    help(): string {
        return "Displays The Guild Logo."
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let iconGuild = msgObject.guild.iconURL;
	    let iconClient = client.user.displayAvatarURL;
	    let embed = new Discord.RichEmbed()
            .setTitle(`Meridia's Dawngaurd Guild Logo`)
	        .setDescription(`Please feel free to use this logo when live streaming or recording content related to Elder Scrolls Online to represent the guild.`)
	        .setColor("#000099")
	        .setFooter(client.user.username, iconClient)
	        .setTimestamp()
	        .setImage(`https://s3-us-west-2.amazonaws.com/www.guilded.gg/user_content/image/db390662-f06d-7cd9-c751-3872a2d496a8.png`)
	        .addField(`Illustrator`, `Rykiln`, true)
	        .addField(`Copyright`, `©2018`, true)
	        .addField(`Description`, `Guild Initials on fire, with Meridia's Beacon and Dawnbreaker`, true)
        msgObject.channel.send(embed)
    		.catch(console.error);
    }
}