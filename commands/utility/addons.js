const Discord = require("discord.js");
module.exports = {
	name: 'addons',														// Name of this command. Required for all commands.
	description: 'Displays a list of recommended ESO addons.',			// [Optional] Description of this command for the help command
	aliases: [`addon`, `minion`, `esoui`], 			                    // [Optional] Permits additional command names to be used for this command 
	// usage: '<required_args> [optional_args]',		                // [Optional] Displays how to use this command in the help command.
    // permissions: `MANAGE_ROLES`,				                        // [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    args: false, 								                        // [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: false, 							                        // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 								                        // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		let embed = new Discord.MessageEmbed()
                .setTitle(`Recommended Addons`)
                .setDescription(`The links below navigate to descriptions on [ESOUI Downloads](https://www.esoui.com/downloads/search.php).\nIt's recommended to use [Minion Addon Manager](https://minion.mmoui.com/?download) to configure addons.`)
                .setColor("#000099")
                .setThumbnail(`http://static.elderscrollsonline.com/uploads/art/Vuba472wZ9lTzqpaHmS61Lcs8ryKLJdG0uU2OuQD07tYoQyhwLXDeQrBWgDdrGV/ESO-Volcano-UNIQUE-COLLECTIBLES-Dwarven-Spider-Pet.png`)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .addField("User Interface", `[Action Duration Reminder](https://www.esoui.com/downloads/info1536-ActionDurationReminder.html) | [Advanced Filters](https://www.esoui.com/downloads/info245-AdvancedFilters.html) | [Advanced UI](https://www.esoui.com/downloads/info919-AUI-AdvancedUI.html) | [Faster Travel](https://www.esoui.com/downloads/info1089-FasterTravelWayshrinesmenuTeleporter.html) | [Inventory Insight](https://www.esoui.com/downloads/info731-InventoryInsight.html) | [LUI Extended](https://www.esoui.com/downloads/info818-LuiExtended.html) | [Srendarr](https://www.esoui.com/downloads/info655-Srendarr-AuraBuffDebuffTracker.html)`)
                .addField("Market Economy", `[Awesome Guildstore](https://www.esoui.com/downloads/info695-AwesomeGuildStore.html) | [Master Merchant](https://www.esoui.com/downloads/info928-MasterMerchant.html) | [Tamriel Trade Centre](https://www.esoui.com/downloads/info1245-TamrielTradeCentre.html)`)
                .addField("Crafting", `[Crafting Calculator](https://www.esoui.com/downloads/info1240-TinydogsCraftingCalculator.html) | [Craftstore](https://www.esoui.com/downloads/info1590-CraftStoreMurkmire.html) | [Multicraft](https://www.esoui.com/downloads/info399-MultiCraft.html) | [Lazy Writ Crafter](https://www.esoui.com/downloads/info1346-DolgubonsLazyWritCrafter.html) | [Writ Worthy](https://www.esoui.com/downloads/info1605-WritWorthy.html)`)
                .addField("Cartography", `[Destinations](https://www.esoui.com/downloads/info667-Destinations.html) | [Lorebooks](https://www.esoui.com/downloads/info288-LoreBooks.html) | [Lost Treasure](https://www.esoui.com/downloads/info561-LostTreasure.html) | [Map Pins](https://www.esoui.com/downloads/info1881-MapPins.html) | [Skyshards](https://www.esoui.com/downloads/info128-SkyShards.html) | [Tamriel Mapping Project](https://www.esoui.com/downloads/info1427-TTMPTheTamrielMappingProject.html)`)
                .addField("PvE - Trials and Dungeons", `[Code's Combat Alerts](https://www.esoui.com/downloads/info1855-CodesCombatAlerts.html) | [Combat Metrics](https://www.esoui.com/downloads/info1360-CombatMetrics.html) | [Constellations](https://www.esoui.com/downloads/info1736-Constellations.html) | [Pocket Adeptus](https://www.esoui.com/downloads/info2057-PocketAdeptusRedTrialCP.html) | [Purge Tracker](https://www.esoui.com/downloads/info1803-PurgeTracker.html) | [Raid Notifier](https://www.esoui.com/downloads/info1355-RaidNotifierUpdated.html) | [Untaunted](https://www.esoui.com/downloads/info1475-Untaunted.html)`)
                .addField("PvP - Alliance War And Battlegrounds", `[Assist Rapid Riding](https://www.esoui.com/downloads/info1554-AssistRapidRiding.html) | [AutoRez](https://www.esoui.com/downloads/info1633-AutoRez.html) | [PvP Ranks](https://www.esoui.com/downloads/info932-CirconiansPvPRanks.html) | [Cyrodiil Alert 2](https://www.esoui.com/downloads/info1141-CyrodiilAlert2-KeepStatusandCampaignQueue.html) | [Siege Camera Toggle](https://www.esoui.com/downloads/info1205-SiegeCameraToggle.html)`);
            msgObject.channel.send(embed)
	},
};