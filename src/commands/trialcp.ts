import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class TrialCP implements IBotCommand {
    private readonly _command = "trialcp"
    
    help(): string {
        return "Displays Red CP Distribution For Each Trial."
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let iconGuild = msgObject.guild.iconURL;
	    let iconClient = client.user.displayAvatarURL;
	    let embed = new Discord.RichEmbed()
	        .setTitle(`Trial Champion Points`)
	        .setColor(`#000099`)
	        .setFooter(client.user.username, iconClient)
	        .setTimestamp()
			// Template (`TrialName`, `## Ironclad, ## Spell Shield, ## Medium Armor Focus, ## Resistant, ## Hardy, ## ThickSkinned, ## Elemental Defender, ## LightArmorFocus, ## Bastion, ## Quick Recovery, ## Expert Defender, ## Heavy Armor Focus`)
			.addField(`Aetherian Archive`, `72 Ironclad, 57 Spellshield, 66 Thick Skinned, 75 Elemental Defender`)
	        .addField(`Asylum Sanctorium`, `81 Ironclad, 70 Spellshield,  44 Thick Skinned, 75 Elemental Defender`)
	        .addField(`Cloudrest`, `66 Ironclad, 40 Spellshield, 66 Thick Skinned, 75 Elemental Defender, 23 Quick Recovery`)
	        .addField(`Halls of Fabrication`, `72 Ironclad, 56 Hardy, 66 Thick Skinned, 56 Elemental Defender, 20 Light Armor Focus`)
	        .addField(`Hel Ra Citadel`, `81 Ironclad, 16 Spellshield, 56 Hardy, 61 Thick Skinned, 56 Elemental Defender`)
	        .addField(`Maw of Lorkhaj`, `72 Ironclad, 38 Spell Shield, 19 Hardy, 66 ThickSkinned, 75 Elemental Defender`)
			.addField(`Sanctum Ophidia`, `72 Ironclad, 64 Hardy, 66 ThickSkinned, 43 Elemental Defender, 25 LightArmorFocus`)
			.addField(`Sunspire`, `56 Ironclad, 43 Spell Shield, 32 Hardy, 56 ThickSkinned, 56 Elemental Defender, 27 Quick Recovery`);
	    msgObject.channel.send(embed)
		    .catch(console.error);
    }
}