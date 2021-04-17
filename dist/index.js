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
const ConfigFile = require("./config");
const client = new Discord.Client();
let commands = [];
loadCommands(`${__dirname}/commands`);
client.on("ready", () => {
    console.log(`Hellfire Dominion Bot Is Now Online!`);
    client.user.setActivity("Hellfire Dominion | .help", { type: "WATCHING" });
});
client.on(`guildMemberAdd`, async member => {
    let imgName = "HDbanner.png";
    let imgPath = `../src/images/${imgName}`;
    let embedWelcome = new Discord.RichEmbed()
        .setTitle(`${member.user.username}, Welcome To ${member.guild.name}!`)
        .setColor(0xFF9900)
        .setDescription(`Please head over to our [#about-us](https://discord.com/channels/367473969370234901/796024776119418890/797090620845719564) channel to learn more about us. Make sure to agree with our server rules through the Rules Screening. Check for a bar at the bottom that asks you to complete a few more steps before you can talk. \n\nIf you're interested in joining our in-game guild, go to [#ig-guild-invite](https://discord.com/channels/367473969370234901/796458637315932213/796459038480007218).\n\nLastly, don't forget to set your discord nickname to match your ESO username (not character name).`)
        .setFooter(client.user.username)
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .attachFile(imgPath)
        .setImage(`attachment://${imgName}`);
    member.send(embedWelcome)
        .catch(console.log(`Error: Failed to send embed`));
    console.log(`[${member.user.username}] has joined [${member.guild.name}].`);
});
client.on("guildMemberRemove", member => {
    console.log(`[${member.user.username}] left ${member.guild.name}.`)
});
client.on("message", msg => {
    if (msg.author.bot) {
        return;
    }
    if (!msg.content.startsWith(ConfigFile.config.prefix)) {
        return;
    }
    handleCommand(msg);
});
function handleCommand(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "").toLowerCase();
        let args = msg.content.split(" ").slice(1);
        for (const commandClass of commands) {
            try {
                if (!commandClass.isThisCommand(command)) {
                    continue;
                }
                yield commandClass.runCommand(args, msg, client);
            }
            catch (exception) {
                console.log(exception);
            }
        }
    });
}
function loadCommands(commandsPath) {
    if (!ConfigFile.config || ConfigFile.config.commands.length === 0) {
        return;
    }
    for (const commandName of ConfigFile.config.commands) {
        const commandClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandClass();
        commands.push(command);
    }
}
client.login(ConfigFile.config.token);
