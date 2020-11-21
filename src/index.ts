import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from "./api";
import Guild from "./commands/guild";

const client: Discord.Client = new Discord.Client();
let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`);

client.on("ready", () => {
    //Handshake With Console
    console.log(`Ready to go!`)
    //Set The Bot's Activity
    client.user.setActivity("Meridia's Dawnguard | .help", {type: "PLAYING"});
})

client.on("guildMemberAdd", async member => {
    //Join Notification In Console
    console.log(`(${member.user.username}) joined ${member.guild.name}.`);
})

client.on("guildMemberRemove", async member => {
    //Leave Notification In Console
    console.log(`(${member.user.username}) left ${member.guild.name}.`);
})

client.on("message", msg => {
    //Ignore messages from the bot
    if (msg.author.bot) { return; }
    //Ignore messages that don't use the prefix
    if (!msg.content.startsWith(ConfigFile.config.prefix)) { return; }

    //msg.channel.send(`A Command Was Sent by ${msg.author.username}!`);                                                              
    //Handle the command
    handleCommand(msg);
})

async function handleCommand(msg: Discord.Message) {
    //Split string into command and all the args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "").toLowerCase();
    let args = msg.content.split(" ").slice(1);

    //Loop through all of our Loaded Commands
    for (const commandClass of commands) {
        //Attempt to execute - continue on error
        try {
            //Check if our command class is valid
            if (!commandClass.isThisCommand(command)) {
                //Go to the next iteration of the loop if this isn't a valid command.
                continue;
            }
            //Pause execution while we run the command's code
            await commandClass.runCommand(args, msg, client);
        }
        catch(exception){
            //If there is an error, log the exception
            console.log(exception);
        }
    }
}

function loadCommands(commandsPath: string) {
    //Exit if there are no commands
    if (!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) { return; }

    //Loop through all of the commands in our config file
    for (const commandName of ConfigFile.config.commands as string[]) {
        //Load the command class
        const commandClass = require(`${commandsPath}/${commandName}`).default;
        //Cast as our custom IBotCommand Interface
        const command = new commandClass() as IBotCommand;
        //Add to our commands list when commands are used
        commands.push(command);
    }
}
//Attempt to connect to the Discord servers with our Token
client.login(ConfigFile.config.token);