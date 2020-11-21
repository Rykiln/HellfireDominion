import * as Discord from "discord.js";
import { IBotCommand } from "../api";
import TrialCP from "./trialcp";

export default class Drops implements IBotCommand {
    private readonly _command = "drops"

    help(): string {
        return "Displays Gear Sets That Drop From Specific Trials Or Dungeons"
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let iconGuild = msgObject.guild.iconURL;
        let iconClient = client.user.displayAvatarURL;
        let source: string = (args.join()).toLowerCase() || "";
        let trials: string[] = [
            `AA - Aetherian Archive`,
            `AS - Asylum Sanctorium`,
            `CR - Cloudrest`,
            `HOF - Halls Of Fabrication`,
            `HRC - Hel Ra Citadel`,
            `MOL - Maw Of Lorkhaj`,
            `SO - Sanctum Ophidia`,
            `SS - Sunspire`
        ]
        msgObject.delete()
            .catch(console.error);
        if (!source) {
            let embed_noSource = new Discord.RichEmbed()
                .setTitle("You Must Chose A Trial")
                .setDescription(`Please retype the command followed by a space, and then the abbreviations of the trial or dungeon you'd like to know about.\nYou will receive a private message with a list of all possible abbreviations.`)
                .setColor("FFFF00")
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField("Example",".drops MOL");
            let embed_DM = new Discord.RichEmbed()
                .setTitle("Trial Abbreviations")
                .setDescription(trials)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField(`Command Example`, `.drops MOL`)
                //.addField("Arenas", `BRP - Blackrose Prison\nDSA - Dragonstar Arena\nMA - Maelstrom Arena`, false)
                //.addField("Dungeons", `AC - Arx Corinium\nBC1 - Banished Cells I\nBC2 - Banished Cells II\nBH - Blackheart Haven\nBC - Blessed Crucible\nBF - Bloodroot Forge\nCOA1 - City Of Ash I\nCOA2 - City Of Ash II\nCOS - Cradle Of Shadows\nCOH1 - Crypt Of Hearts I\nCOH2 - Crypt Of Hearts II\nDC1 - Darkshade Caverns I\nDC2 - Darkshade Caverns II\nDOM - Depths Of Malatar\nDK - Direfrost Keep\nEH1 - Elden Hollow I\nEH2 - Elden Hollow II\nFH - Falkreath Hold\nFL - Fang Lair\nFV - Frostvault\nFG1 - Fungal Grotto I\nFG2 - Fungal Grotto II\nICP - Imperial City Prison\nMOS - March Of Sacrifices\nMHK - Moon Hunter Keep\nROM - Ruins Of Mazzatun\nSCP - Scalecaller Peak\nSW - Selenes Web\nSC1 - Spindleclutch I\nSC2 - Spindleclutch II\nTI - Temptest Island\nVOM - Vaults Of Madness\nVOL - Volenfell\nWS1 - Wayrest Sewers I\nWS2 - Wayrest Sewers II\nWGT - White-Gold Tower`, false)
            msgObject.channel.send(embed_noSource)
                .catch(console.error)
                .then(msg => {
                (msg as Discord.Message).delete(20000)
                    .catch(console.error);
            });
            msgObject.author.send(embed_DM)
                .catch(console.error);
        }
        else {
            let trialname = `Coming Soon`;
            let gearsets = `Coming Soon`;
            let dlcrequired = `Base Game - No DLC Required`;
            switch(source){
                case "aa":
                    trialname = `Aetherian Archive`;
                    gearsets = `[Defending Warrior](https://eso-sets.com/set/defending-warrior)
                        [Healing Mage](https://eso-sets.com/set/healing-mage)
                        [Quick Serpent](https://eso-sets.com/set/quick-serpent)
                        [Eternal Warrior](https://eso-sets.com/set/eternal-warrior)
                        [Infalliable Mage](https://eso-sets.com/set/infallible-mage)
                        [Vicious Serpent](https://eso-sets.com/set/vicious-serpent)`;
                    break;
                case "hrc":
                    trialname = `Hel Ra Cidtadel`;
                    gearsets = `[Destructive Mage](https://eso-sets.com/set/destructive-mage)
                        [Poisonous Serpent](https://eso-sets.com/set/poisonous-serpent)
                        [Berserking Warrior](https://eso-sets.com/set/berserking-warrior)
                        [Eternal Warrior](https://eso-sets.com/set/eternal-warrior)
                        [Infalliable Mage](https://eso-sets.com/set/infallible-mage)
                        [Vicious Serpent](https://eso-sets.com/set/vicious-serpent)`;
                    break;
                case "so":
                    trialname = `Sanctum Ophidia`;
                    gearsets = `[Immortal Warrior](https://eso-sets.com/set/immortal-warrior)
                        [Twice-Fanged Serpent](https://eso-sets.com/set/twice-fanged-serpent)
                        [Wise Mage](https://eso-sets.com/set/wise-mage)
                        [Eternal Warrior](https://eso-sets.com/set/eternal-warrior)
                        [Infalliable Mage](https://eso-sets.com/set/infallible-mage)
                        [Vicious Serpent](https://eso-sets.com/set/vicious-serpent)`;
                    break;
                case "mol":
                    trialname = `Maw Of Lorkhaj`;
                    gearsets = `[Lunar Bastion](https://eso-sets.com/set/lunar-bastion)
                        [Moondancer](https://eso-sets.com/set/moondancer)
                        [Roar Of Alkosh](https://eso-sets.com/set/roar-of-alkosh)
                        [Twilight Remedy](https://eso-sets.com/set/twilight-remedy)`;
                    dlcrequired = `Thieves Guild DLC Required`;
                    break;
                case "hof":
                    trialname = `Halls Of Fabrication`;
                    gearsets = `[Automated Defense](https://eso-sets.com/set/automated-defense)
                        [Inventor's Guard](https://eso-sets.com/set/inventors-guard)
                        [Master Architect](https://eso-sets.com/set/master-architect)
                        [War Machine](https://eso-sets.com/set/war-machine)`;
                    dlcrequired = `Morrowind DLC Required`;
                    break;
                case "as":
                    trialname = `Asylum Sanctorium`;
                    gearsets = `[Chaotic Whirlwind](https://eso-sets.com/set/chaotic-whirlwind)
                        [Concentrated Force](https://eso-sets.com/set/concentrated-force-imperfect-)
                        [Defensive Position](https://eso-sets.com/set/defensive-position)
                        [Disciplined Slash](https://eso-sets.com/set/disciplined-slash)
                        [Piercing Spray](https://eso-sets.com/set/piercing-spray-imperfected-)
                        [Timeless Blessing](https://eso-sets.com/set/timeless-blessing)`;
                    dlcrequired = `Clockwork City DLC Required`;
                    break;
                case "cr":
                    trialname = "Cloudrest";
                    gearsets = `[Aegis of Galenwe](https://eso-sets.com/set/aegis-of-galenwe)
                        [Arms of Relequen](https://eso-sets.com/set/arms-of-relequen)
                        [Mantle of Siroria](https://eso-sets.com/set/mantle-of-siroria)
                        [Vestment of Olorime](https://eso-sets.com/set/vestment-of-olorime)`;
                    dlcrequired = `Summerset DLC Required`;
                    break;
                case "ss":
                    trialname = "Sunspire";
                    gearsets = `Coming Soon`;
                    dlcrequired = `Elswyr`;
                default:
                    trialname = `Coming Soon`;
                    gearsets = `Coming Soon`;
                    break;
            }
            let embed = new Discord.RichEmbed()
                .setTitle(`Trial: ${trialname}`)
                .setDescription(dlcrequired)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField("Gear Sets", gearsets)
            msgObject.channel.send(embed)
                .catch(console.error);
        }
    }
}