const Discord = require("discord.js");
module.exports = {
	name: 'mundus',																			// Name of this command. Required for all commands.
	description: 'Displays A List Of All Mundus Stones And Where To Find Them.',			// [Optional] Description of this command for the help command
	aliases: ['stones', `boons`], 															// [Optional] Permits additional command names to be used for this command 
	// usage: '<required_args> [optional_args]',											// [Optional] Displays how to use this command in the help command.
    // permissions: `MANAGE_ROLES`,															// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    args: false, 																			// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: false, 																		// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 																			// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		let embed = new Discord.MessageEmbed()
                .setColor(0x000099)
                .setTitle("Mundus Stones")
                .setFooter(client.user.username, client.user.displayAvatarURL())
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
	},
};