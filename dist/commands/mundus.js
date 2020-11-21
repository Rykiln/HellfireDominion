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
class Mundus {
    constructor() {
        this._command = "mundus";
    }
    help() {
        return "Displays A List Of Mundus Stones And Links Showing Where To Find Them.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let iconClient = client.user.displayAvatarURL;
            let embed = new Discord.RichEmbed()
                .setColor("#000099")
                .setTitle("Mundus Stones")
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .setThumbnail(`http://o.aolcdn.com/hss/storage/adam/173c8def397839bcf6833c73f566abf0/tamriel-infinium-header-2014-sub02.jpg`)
                .addField("The Apprentice | Increases Spell Damage", "[Reaper's March](http://esomap.uesp.net/?centeron=The+Apprentice&world=Reaper%27s+March) | [Bangkorai](http://esomap.uesp.net/?centeron=The+Apprentice&world=Bangkorai) | [The Rift](http://esomap.uesp.net/?centeron=The+Apprentice&world=The+Rift)")
                .addField("The Atronach | Increases Magicka Recovery", "[Greenshade](http://esomap.uesp.net/?centeron=The+Atronach&world=Greenshade) | [Rivenspire](http://esomap.uesp.net/?centeron=The+Atronach&world=Rivenspire) | [Shadowfen](http://esomap.uesp.net/?centeron=The+Atronach&world=Shadowfen)")
                .addField("The Lady | Increases Physical and Spell Resistance", "[Auridon](http://esomap.uesp.net/?centeron=The+Lady&world=Auridon) | [Glenumbra](http://esomap.uesp.net/?centeron=The+Lady&world=Glenumbra) | [Stonefalls](http://esomap.uesp.net/?centeron=The+Lady&world=Stonefalls)")
                .addField("The Lord | Increases Maximum Health", "[Grahtwood](http://esomap.uesp.net/?centeron=The+Lord&world=Grahtwood) | [Stormhaven](http://esomap.uesp.net/?centeron=The+Lord&world=Stormhaven) | [Deshaan](http://esomap.uesp.net/?centeron=The+Lord&world=Deshaan)")
                .addField("The Lover | Increases Physical and Spell Penetration", "[Auridon](http://esomap.uesp.net/?centeron=The+Lover&world=Auridon) | [Glenumbra](http://esomap.uesp.net/?centeron=The+Lover&world=Glenumbra) | [Stonefalls](http://esomap.uesp.net/?centeron=The+Lover&world=Stonefalls)")
                .addField("The Mage | Increases Maximum Magicka", "[Grahtwood](http://esomap.uesp.net/?centeron=The+Mage&world=Grahtwood) | [Stormhaven](http://esomap.uesp.net/?centeron=The+Mage&world=Stormhaven) | [Deshaan](http://esomap.uesp.net/?centeron=The+Mage&world=Deshaan)")
                .addField("The Ritual | Increases healing done", "[Malabal Tor](http://esomap.uesp.net/?centeron=The+Ritual&world=Malabal+Tor) | [Alik'r Desert](http://esomap.uesp.net/?centeron=The+Ritual&world=Alik%27r+Desert) | [Eastmarch](http://esomap.uesp.net/?centeron=The+Ritual&world=Eastmarch)")
                .addField("The Serpent | Increases Stamina Recovery", "[Greenshade](http://esomap.uesp.net/?centeron=The+Serpent&world=Greenshade) | [Rivenspire](http://esomap.uesp.net/?centeron=The+Serpent&world=Rivenspire) | [Shadowfen](http://esomap.uesp.net/?centeron=The+Serpent&world=Shadowfen)")
                .addField("The Shadow | Increases Critical Damage done", "[Greenshade](http://esomap.uesp.net/?centeron=The+Shadow&world=Greenshade) | [Rivenspire](http://esomap.uesp.net/?centeron=The+Shadow&world=Rivenspire) | [Shadowfen](http://esomap.uesp.net/?centeron=The+Shadow&world=Shadowfen)")
                .addField("The Steed | Increases Health Recovery", "[Reaper's March](http://esomap.uesp.net/?centeron=The+Steed&world=Reaper%27s+March) | [Bangkorai](http://esomap.uesp.net/?centeron=The+Steed&world=Bangkorai) | [The Rift](http://esomap.uesp.net/?centeron=The+Steed&world=The+Rift)")
                .addField("The Thief | Increases Weapon and Spell Critical Strike ratings", "[Malabal Tor](http://esomap.uesp.net/?centeron=The+Thief&world=Malabal+Tor) | [Alik'r Desert](http://esomap.uesp.net/?centeron=The+Thief&world=Alik%27r+Desert) | [Eastmarch](http://esomap.uesp.net/?centeron=The+Thief&world=Eastmarch)")
                .addField("The Tower | Increases Maximum Stamina", "[Grahtwood](http://esomap.uesp.net/?centeron=The+Tower&world=Grahtwood) | [Deshaan](http://esomap.uesp.net/?centeron=The+Tower&world=Stormhaven) | [Deshaan](http://esomap.uesp.net/?centeron=The+Tower&world=Deshaan)")
                .addField("The Warrior | Increases Weapon Damage", "[Malabal Tor](http://esomap.uesp.net/?centeron=The+Warrior&world=Malabal+Tor) | [Alik'r Desert](http://esomap.uesp.net/?centeron=The+Warrior&world=Alik%27r+Desert) | [Eastmarch](http://esomap.uesp.net/?centeron=The+Warrior&world=Eastmarch)");
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = Mundus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVuZHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL211bmR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLE1BQU07SUFBM0I7UUFDcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQWtDeEMsQ0FBQztJQWhDRyxJQUFJO1FBQ0EsT0FBTyx3RUFBd0UsQ0FBQTtJQUNuRixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUMvRSxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3BELElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDOUIsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsUUFBUSxDQUFDLGVBQWUsQ0FBQztpQkFDekIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztpQkFDM0MsWUFBWSxFQUFFO2lCQUNkLFlBQVksQ0FBQyw4R0FBOEcsQ0FBQztpQkFDNUgsUUFBUSxDQUFDLHlDQUF5QyxFQUFFLHNQQUFzUCxDQUFDO2lCQUMzUyxRQUFRLENBQUMsMkNBQTJDLEVBQUUsME9BQTBPLENBQUM7aUJBQ2pTLFFBQVEsQ0FBQyxvREFBb0QsRUFBRSx3TkFBd04sQ0FBQztpQkFDeFIsUUFBUSxDQUFDLHFDQUFxQyxFQUFFLHdOQUF3TixDQUFDO2lCQUN6USxRQUFRLENBQUMsc0RBQXNELEVBQUUsMk5BQTJOLENBQUM7aUJBQzdSLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRSx3TkFBd04sQ0FBQztpQkFDMVEsUUFBUSxDQUFDLHFDQUFxQyxFQUFFLDhPQUE4TyxDQUFDO2lCQUMvUixRQUFRLENBQUMsMENBQTBDLEVBQUUsdU9BQXVPLENBQUM7aUJBQzdSLFFBQVEsQ0FBQyw2Q0FBNkMsRUFBRSxvT0FBb08sQ0FBQztpQkFDN1IsUUFBUSxDQUFDLHVDQUF1QyxFQUFFLHVPQUF1TyxDQUFDO2lCQUMxUixRQUFRLENBQUMsZ0VBQWdFLEVBQUUsMk9BQTJPLENBQUM7aUJBQ3ZULFFBQVEsQ0FBQyx1Q0FBdUMsRUFBRSx3TkFBd04sQ0FBQztpQkFDM1EsUUFBUSxDQUFDLHVDQUF1QyxFQUFFLGlQQUFpUCxDQUFDLENBQUE7WUFDelMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUM7S0FBQTtDQUNKO0FBbkNELHlCQW1DQyJ9