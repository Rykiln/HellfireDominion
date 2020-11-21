import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class Nirn implements IBotCommand {
    private readonly _command = "nirn"
    
    help(): string {
        return "Displays A Map Of Nirn."
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let iconGuild = msgObject.guild.iconURL;
	    let iconClient = client.user.displayAvatarURL;
	    let embed = new Discord.RichEmbed()
            .setTitle(`Map of Nirn`)
	        .setColor("#000099")
	        .setFooter(client.user.username, iconClient)
	        .setTimestamp()
	        .setImage(`https://images-ext-2.discordapp.net/external/eprQ71nycmBcooJNaVpvzTfVpUF4sN3BdhyNnFP7iJw/https/img00.deviantart.net/8326/i/2017/315/d/9/the_elder_scrolls__world_map_of_nirn_by_okiir-dbgnkci.png?width=1006&height=663`);
	msgObject.channel.send(embed)
		.catch(console.error);
    }
}