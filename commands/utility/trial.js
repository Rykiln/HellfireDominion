const Discord = require("discord.js");
module.exports = {
	name: 'trial',														// Name of this command. Required for all commands.
	description: 'Displays Information About Specific Trials.',			// [Optional] Description of this command for the help command
	aliases: ['trials', `raid`, `raids`], 								// [Optional] Permits additional command names to be used for this command 
	usage: '[trial_abbreviation]',										// [Optional] Displays how to use this command in the help command.
    // permissions: `MANAGE_ROLES`,										// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    // args: true, 														// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 													// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 														// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		const source = (args.join()).toLowerCase() || "";
            const trials = [
                `AA - Aetherian Archive`,
                `AS - Asylum Sanctorium`,
                `CR - Cloudrest`,
                `HOF - Halls Of Fabrication`,
                `HRC - Hel Ra Citadel`,
                `MOL - Maw Of Lorkhaj`,
                `SO - Sanctum Ophidia`,
                `SS - Sunspire`,
                `KA - Kyne's Aegis`,
				`RG - Rockgrove`
            ];
			// Send Command Instructions To The User If No Args Were Provided
			if (!source) {
                const embed_noSource = new Discord.MessageEmbed()
                    .setTitle("You Must Chose A Trial")
                    .setDescription(`Please retype the command followed by a space, and then the abbreviations of the trial or dungeon you'd like to know about.\nYou will receive a private message with a list of all possible abbreviations.`)
                    .setColor("FFFF00")
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setTimestamp()
                    .addField("Example", ".drops MOL");
                const embed_DM = new Discord.MessageEmbed()
                    .setTitle("Trial Abbreviations")
                    .setDescription(trials)
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setTimestamp()
                    .addField(`Command Example`, `.drops MOL`);
                msgObject.channel.send(embed_noSource)
                    .then(msg => {msg.delete(20000)});
                msgObject.author.send(embed_DM)
				return
			};

			// Send Trial Information For The Specified Trial
			let trialname = `Coming Soon`;
                let gearsets = `Coming Soon`;
                let location = `Coming Soon`;
                let motifstyle = `Coming Soon`;
                let img = `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab371d58-f694-4953-a2e5-c79acedd9f56/d9j5i6k-e1a85b7d-1621-4e5b-b5cc-4ddea16325db.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiMzcxZDU4LWY2OTQtNDk1My1hMmU1LWM3OWFjZWRkOWY1NlwvZDlqNWk2ay1lMWE4NWI3ZC0xNjIxLTRlNWItYjVjYy00ZGRlYTE2MzI1ZGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FJwVnTTzBzntxq-t9Lqo8SsyUS0OiGpcwmI99uTul3k`
                let thumbnail = `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab371d58-f694-4953-a2e5-c79acedd9f56/d9j5i6k-e1a85b7d-1621-4e5b-b5cc-4ddea16325db.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiMzcxZDU4LWY2OTQtNDk1My1hMmU1LWM3OWFjZWRkOWY1NlwvZDlqNWk2ay1lMWE4NWI3ZC0xNjIxLTRlNWItYjVjYy00ZGRlYTE2MzI1ZGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FJwVnTTzBzntxq-t9Lqo8SsyUS0OiGpcwmI99uTul3k`
                let dlcrequired = ` `;
                switch (source) {
                    case "aa":
                    case "naa":
                    case "vaa":
                    case "aetherian archive":
                    case "aetherian":
                    case "archive":
                        trialname = `Aetherian Archive`;
                        location = `Located In Craglorn`;
                        motifstyle = `Celestial`;
                        img = `https://images.uesp.net/thumb/f/f6/ON-npc-The_Mage.jpg/200px-ON-npc-The_Mage.jpg`;
                        gearsets = `[Defending Warrior](https://eso-sets.com/set/defending-warrior)\n[Healing Mage](https://eso-sets.com/set/healing-mage)\n[Quick Serpent](https://eso-sets.com/set/quick-serpent)\n[Eternal Warrior](https://eso-sets.com/set/eternal-warrior)\n[Infalliable Mage](https://eso-sets.com/set/infallible-mage)\n[Vicious Serpent](https://eso-sets.com/set/vicious-serpent)`;
                        break;
                    case "hrc":
                    case "nhrc":
                    case "vhrc":
                    case "hel ra citadel":
                    case "helra citadel":
                    case "hel ra":
                    case "helra":
                    case "citadel":
                        trialname = `Hel Ra Citadel`;
                        location = `Located In Craglorn`;
                        motifstyle = `Celestial`;
                        img = `https://images.uesp.net/thumb/9/9c/ON-npc-The_Warrior.jpg/200px-ON-npc-The_Warrior.jpg`;
                        gearsets = `[Destructive Mage](https://eso-sets.com/set/destructive-mage)\n[Poisonous Serpent](https://eso-sets.com/set/poisonous-serpent)\n[Berserking Warrior](https://eso-sets.com/set/berserking-warrior)\n[Eternal Warrior](https://eso-sets.com/set/eternal-warrior)\n[Infalliable Mage](https://eso-sets.com/set/infallible-mage)\n[Vicious Serpent](https://eso-sets.com/set/vicious-serpent)`;
                        break;
                    case "so":
                    case "nso":
                    case "vso":
                    case "sanctum ophidia":
                    case "sanctum":
                    case "ophidia":
                    case "snakes and trolls":
                    case "snake lady":
                        trialname = `Sanctum Ophidia`;
                        location = `Located In Craglorn`;
                        motifstyle = `Celestial`;
                        img = `https://images.uesp.net/thumb/0/04/ON-npc-The_Serpent.jpg/200px-ON-npc-The_Serpent.jpg`;
                        gearsets = `[Immortal Warrior](https://eso-sets.com/set/immortal-warrior)\n[Twice-Fanged Serpent](https://eso-sets.com/set/twice-fanged-serpent)\n[Wise Mage](https://eso-sets.com/set/wise-mage)\n[Eternal Warrior](https://eso-sets.com/set/eternal-warrior)\n[Infalliable Mage](https://eso-sets.com/set/infallible-mage)\n[Vicious Serpent](https://eso-sets.com/set/vicious-serpent)`;
                        break;
                    case "mol":
                    case "nmol":
                    case "vmol":
                    case "maw of lorkhaj":
                    case "maw":
                    case "lorkhaj":
                    case "big cats":
                    case "pussies":
                        trialname = `Maw Of Lorkhaj`;
                        location = `Located In Reaper's March`;
                        motifstyle = `Dro-m'Athra`;
                        img = `https://images.uesp.net/thumb/e/e0/ON-creature-Rakkhat.jpg/200px-ON-creature-Rakkhat.jpg`;
                        gearsets = `[Lunar Bastion](https://eso-sets.com/set/lunar-bastion)\n[Moondancer](https://eso-sets.com/set/moondancer)\n[Roar Of Alkosh](https://eso-sets.com/set/roar-of-alkosh)\n[Twilight Remedy](https://eso-sets.com/set/twilight-remedy)`;
                        dlcrequired = ` (Thieves Guild DLC Required)`;
                        break;
                    case "hof":
                    case "nhof":
                    case "vhof":
                    case "halls of fabrication":
                    case "halls":
                    case "big robot":
                        trialname = `Halls Of Fabrication`;
                        location = `Located In Vvardenfell`;
                        motifstyle = `Refabricated`;
                        img = `https://images.uesp.net/thumb/d/d7/ON-creature-Assembly_General.jpg/200px-ON-creature-Assembly_General.jpg`;
                        gearsets = `[Automated Defense](https://eso-sets.com/set/automated-defense)\n[Inventor's Guard](https://eso-sets.com/set/inventors-guard)\n[Master Architect](https://eso-sets.com/set/master-architect)\n[War Machine](https://eso-sets.com/set/war-machine)`;
                        dlcrequired = ` (Morrowind DLC Required)`;
                        break;
                    case "as":
                    case "nas":
                    case "vas":
                    case "asylum sanctorium":
                    case "asylum":
                    case "sanctorium":
                    case "robot chicken":
                    case "robot dragon":
                        trialname = `Asylum Sanctorium`;
                        location = `Located In Clockwork City`;
                        motifstyle = `NONE`;
                        img = `https://images.uesp.net/thumb/8/85/ON-creature-Saint_Olms_the_Just.jpg/200px-ON-creature-Saint_Olms_the_Just.jpg`;
                        gearsets = `[Chaotic Whirlwind](https://eso-sets.com/set/chaotic-whirlwind)  [[Perfected]](https://eso-sets.com/set/chaotic-whirlwind-perfected-)\n[Concentrated Force](https://eso-sets.com/set/concentrated-force-imperfect-)  [[Perfected]](https://eso-sets.com/set/concentrated-force-perfected-)\n[Defensive Position](https://eso-sets.com/set/defensive-position)  [[Perfected]](https://eso-sets.com/set/defensive-position-perfected-)\n[Disciplined Slash](https://eso-sets.com/set/disciplined-slash)  [[Perfected]](https://eso-sets.com/set/disciplined-slash-perfected-)\n[Piercing Spray](https://eso-sets.com/set/piercing-spray-imperfected-)  [[Perfected]](https://eso-sets.com/set/piercing-spray-perfected-)\n[Timeless Blessing](https://eso-sets.com/set/timeless-blessing)  [[Perfected]](https://eso-sets.com/set/timeless-blessing-perfected-)`;
                        dlcrequired = ` (Clockwork City DLC Required)`;
                        break;
                    case "cr":
                    case "ncr":
                    case "vcr":
                    case "cloudrest":
                    case `cloud rest`:
                        trialname = `Cloudrest`;
                        location = `Located In Summerset`;
                        motifstyle = `Welkynar`;
                        img = `https://images.uesp.net/thumb/c/c4/ON-creature-Z%27Maja.jpg/200px-ON-creature-Z%27Maja.jpg`;
                        gearsets = `[Aegis of Galenwe](https://eso-sets.com/set/aegis-of-galenwe)  [[Perfected]](https://eso-sets.com/set/perfect-aegis-of-galenwe)\n[Arms of Relequen](https://eso-sets.com/set/arms-of-relequen)  [[Perfected]](https://eso-sets.com/set/perfect-arms-of-relequen)\n[Mantle of Siroria](https://eso-sets.com/set/mantle-of-siroria)  [[Perfected]](https://eso-sets.com/set/perfect-mantle-of-siroria)\n[Vestment of Olorime](https://eso-sets.com/set/vestment-of-olorime)  [[Perfected]](https://eso-sets.com/set/perfect-vestment-of-olorime)`;
                        dlcrequired = ` (Summerset DLC Required)`;
                        break;
                    case "ss":
                    case "nss":
                    case "vss":
                    case "sunspire":
                    case "sun spire":
                        trialname = `Sunspire`;
                        location = `Located In Northern Elswyr`;
                        motifstyle = `Sunspire`;
                        img = `https://images.uesp.net/thumb/b/bf/ON-creature-Nahviintaas_03.jpg/200px-ON-creature-Nahviintaas_03.jpg`;
                        gearsets = `[Claw of Yolnahkriin](https://eso-sets.com/set/claw-of-yolnahkriin)  [[Perfected]](https://eso-sets.com/set/perfected-claw-of-yolnahkriin)\n[Tooth of Lokkestiiz](https://eso-sets.com/set/tooth-of-lokkestiiz)  [[Perfected]](https://eso-sets.com/set/perfected-tooth-of-lokkestiiz)\n[False God's Devotion](https://eso-sets.com/set/false-gods-devotion)  [[Perfected]](https://eso-sets.com/set/perfected-false-gods-devotion)\n[Eye of Nahviintaas](https://eso-sets.com/set/eye-of-nahviintaas)  [[Perfected]](https://eso-sets.com/set/perfected-eye-of-nahviintaas)`;
                        dlcrequired = ` (Elswyr DLC Required)`;
                        break;
                    case "ka":
                    case "nka":
                    case "vka":
                    case "kyne's aegis":
                    case "kynes aegis":
                        trialname = `Kyne's Aegis`;
                        location = `Located In Western Skyrim`;
                        motifstyle = `Sea Giant`;
                        img = `https://images.uesp.net/thumb/a/a5/ON-npc-Lord_Falgravn.jpg/200px-ON-npc-Lord_Falgravn.jpg`;
                        gearsets = `[Kyne's Wind](https://eso-sets.com/set/kynes-wind)  [[Perfected]](https://eso-sets.com/set/perfect-kynes-wind)\n[Roaring Opportunist](https://eso-sets.com/set/roaring-opportunist)  [[Perfected]](https://eso-sets.com/set/perfect-roaring-opportunist)\n[Vrol's Command](https://eso-sets.com/set/vrols-command)  [[Perfected]](https://eso-sets.com/set/perfect-vrols-command)\n[Yandir's Might](https://eso-sets.com/set/yandirs-might)  [[Perfected]](https://eso-sets.com/set/perfect-yandirs-might)`;
                        dlcrequired = ` (Greymoor DLC Required)`;
                        break;
                    case "rg":
                    case "nrg":
                    case "vrg":
                    case "rockgrove":
                    case "rock grove":
                        trialname = `Rockgrove`;
                        location = `Located Somewhere`;
                        motifstyle = `NONE`;
                        img = `https://www.nme.com/wp-content/uploads/2021/01/TESO-Blackwood.jpg`;
                        gearsets = `[Saxhleel Champion](https://eso-sets.com/set/saxhleel-champion)  [[Perfected]](https://eso-sets.com/set/perfected-saxhleel-champion)\n[Sul-Xan's Torment](https://eso-sets.com/set/sul-xans-torment)  [[Perfected]](https://eso-sets.com/set/perfected-sul-xans-torment)\n[Bahsei's Mania](https://eso-sets.com/set/bahseis-mania)  [[Perfected]](https://eso-sets.com/set/perfected-bahseis-mania)\n[Stone-Talker's Oath](https://eso-sets.com/set/stone-talkers-oath)  [[Perfected]](https://eso-sets.com/set/perfected-stone-talkers-oath)`;
                        dlcrequired = ` (Blackwood DLC Required)`;
                        break;
                    default:
                        trialname = `Coming Soon`;
                        gearsets = `Coming Soon`;
                        break;
                }
                let embed = new Discord.MessageEmbed()
                    .setTitle(`Trial: ${trialname}`)
                    .setImage(img)
                    .setDescription(`${location}${dlcrequired}`)
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setTimestamp()
                    .setThumbnail(thumbnail)
                    .addField("Motif Style", motifstyle)
                    .addField("Gear Sets", gearsets)
                msgObject.channel.send(embed)
                    .then(m => m.pin());
	},
};