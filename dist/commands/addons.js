"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class Addons {
    constructor() {
        this._command = "addons";
    }
    help() {
        return "Lists Recommended Addons.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let iconGuild = msgObject.guild.iconURL;
            let iconClient = client.user.displayAvatarURL;
            let embed = new Discord.RichEmbed()
                .setTitle(`Recommended Addons`)
                .setDescription(`The links below navigate to descriptions on [ESOUI Downloads](https://www.esoui.com/downloads/search.php).\nIt's recommended to use [Minion Addon Manager](https://minion.mmoui.com/?download) to configure addons.`)
                .setColor("#000099")
                .setThumbnail(`http://static.elderscrollsonline.com/uploads/art/Vuba472wZ9lTzqpaHmS61Lcs8ryKLJdG0uU2OuQD07tYoQyhwLXDeQrBWgDdrGV/ESO-Volcano-UNIQUE-COLLECTIBLES-Dwarven-Spider-Pet.png`)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField("User Interface", `[Action Duration Reminder](https://www.esoui.com/downloads/info1536-ActionDurationReminder.html) | [Advanced Filters](https://www.esoui.com/downloads/info245-AdvancedFilters.html) | [Advanced UI](https://www.esoui.com/downloads/info919-AUI-AdvancedUI.html) | [Faster Travel](https://www.esoui.com/downloads/info1089-FasterTravelWayshrinesmenuTeleporter.html) | [Inventory Insight](https://www.esoui.com/downloads/info731-InventoryInsight.html) | [LUI Extended](https://www.esoui.com/downloads/info818-LuiExtended.html) | [Srendarr](https://www.esoui.com/downloads/info655-Srendarr-AuraBuffDebuffTracker.html)`)
                .addField("Market Economy", `[Awesome Guildstore](https://www.esoui.com/downloads/info695-AwesomeGuildStore.html) | [Master Merchant](https://www.esoui.com/downloads/info928-MasterMerchant.html) | [Tamriel Trade Centre](https://www.esoui.com/downloads/info1245-TamrielTradeCentre.html)`)
                .addField("Crafting", `[Crafting Calculator](https://www.esoui.com/downloads/info1240-TinydogsCraftingCalculator.html) | [Craftstore](https://www.esoui.com/downloads/info1590-CraftStoreMurkmire.html) | [Multicraft](https://www.esoui.com/downloads/info399-MultiCraft.html) | [Lazy Writ Crafter](https://www.esoui.com/downloads/info1346-DolgubonsLazyWritCrafter.html) | [Writ Worthy](https://www.esoui.com/downloads/info1605-WritWorthy.html)`)
                .addField("Cartography", `[Destinations](https://www.esoui.com/downloads/info667-Destinations.html) | [Lorebooks](https://www.esoui.com/downloads/info288-LoreBooks.html) | [Lost Treasure](https://www.esoui.com/downloads/info561-LostTreasure.html) | [Map Pins](https://www.esoui.com/downloads/info1881-MapPins.html) | [Skyshards](https://www.esoui.com/downloads/info128-SkyShards.html) | [Tamriel Mapping Project](https://www.esoui.com/downloads/info1427-TTMPTheTamrielMappingProject.html)`)
                .addField("PvE - Trials and Dungeons", `[Code's Combat Alerts](https://www.esoui.com/downloads/info1855-CodesCombatAlerts.html) | [Combat Metrics](https://www.esoui.com/downloads/info1360-CombatMetrics.html) | [Constellations](https://www.esoui.com/downloads/info1736-Constellations.html) | [Pocket Adeptus](https://www.esoui.com/downloads/info2057-PocketAdeptusRedTrialCP.html) | [Purge Tracker](https://www.esoui.com/downloads/info1803-PurgeTracker.html) | [Raid Notifier](https://www.esoui.com/downloads/info1355-RaidNotifierUpdated.html) | [Untaunted](https://www.esoui.com/downloads/info1475-Untaunted.html)`)
                .addField("PvP - Alliance War And Battlegrounds", `[Assist Rapid Riding](https://www.esoui.com/downloads/info1554-AssistRapidRiding.html) | [AutoRez](https://www.esoui.com/downloads/info1633-AutoRez.html) | [PvP Ranks](https://www.esoui.com/downloads/info932-CirconiansPvPRanks.html) | [Cyrodiil Alert 2](https://www.esoui.com/downloads/info1141-CyrodiilAlert2-KeepStatusandCampaignQueue.html) | [Siege Camera Toggle](https://www.esoui.com/downloads/info1205-SiegeCameraToggle.html)`);
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = Addons;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2FkZG9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLE1BQU07SUFBM0I7UUFDcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQTZCeEMsQ0FBQztJQTNCRyxJQUFJO1FBQ0EsT0FBTywyQkFBMkIsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUMvRSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUN4QyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzlDLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDOUIsUUFBUSxDQUFDLG9CQUFvQixDQUFDO2lCQUM5QixjQUFjLENBQUMscU5BQXFOLENBQUM7aUJBQ3JPLFFBQVEsQ0FBQyxTQUFTLENBQUM7aUJBQ25CLFlBQVksQ0FBQyx5S0FBeUssQ0FBQztpQkFDdkwsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztpQkFDM0MsWUFBWSxFQUFFO2lCQUNkLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxrbUJBQWttQixDQUFDO2lCQUM5bkIsUUFBUSxDQUFDLGdCQUFnQixFQUFFLGtRQUFrUSxDQUFDO2lCQUM5UixRQUFRLENBQUMsVUFBVSxFQUFFLGthQUFrYSxDQUFDO2lCQUN4YixRQUFRLENBQUMsYUFBYSxFQUFFLGdkQUFnZCxDQUFDO2lCQUN6ZSxRQUFRLENBQUMsMkJBQTJCLEVBQUUsOGpCQUE4akIsQ0FBQztpQkFDcm1CLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRSxpYkFBaWIsQ0FBQyxDQUFBO1lBQ3hlLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQUE7Q0FDSjtBQTlCRCx5QkE4QkMifQ==