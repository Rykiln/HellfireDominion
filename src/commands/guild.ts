import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class Guild implements IBotCommand {
    private readonly _command = "guild"
    
    help(): string {
        return "Displays Guild Information."
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
	    let iconGuild = msgObject.guild.iconURL;
	    let iconClient = client.user.displayAvatarURL;
		let officerlist = msgObject.guild.roles.find(role => role.name === "Officers").members.map(m => m.user);
		let membercount = msgObject.guild.roles.find(role => role.name === "Guild Member").members.map(m => m.user).length;
		//let botcount = msgObject.guild.roles.find(role => role.name === "Psijic Projections").members.map(m => m.user).length;
		//let guestcount = msgObject.guild.membercount - (botcount + membercount);
		let guestcount = msgObject.guild.members.filter(member => !member.user.bot).size - membercount;
	    let embed = new Discord.RichEmbed()
            .setTitle(msgObject.guild.name)
	        .setDescription(`Meridia's Dawnguard is a PvE Guild. Whether you're new to The Elder Scrolls Online and just learning, or Max CP looking for end-game content, we can help! Submit an application to join.`)
	        .setColor(0x000099)
	        .setThumbnail(iconGuild)
	        .setFooter(client.user.username, iconClient)
	        .setTimestamp()
	        .addField("Website",`[Click Here To Apply To Meridia's Dawnguard On Guilded](http://www.guilded.gg/r/AIrRpez6ly)`)
	        .addField("Important Links", "[Guild Rules](http://www.guilded.gg/MeridiasDawnguard/forums/9vzkgwLm/1285507603)\n[Ranks And Promotions](http://www.guilded.gg/MeridiasDawnguard/forums/9vzkgwLm/2118973664)")
			.addField("Guild Members", membercount, true)
			.addField("Discord Guests", guestcount, true)
			.addField("Officers", officerlist.sort(), false)
	        .addField("Created On", msgObject.guild.createdAt, true);
	msgObject.channel.send(embed)
		.catch(console.error);
    }
}