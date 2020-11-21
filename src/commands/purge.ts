import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class Purge implements IBotCommand {
    private readonly _command = "purge"
    
    help(): string {
        return "ADMIN - Deletes The Desired Amount Of Messages From The Channel";
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        //Clean-up Our Message
        msgObject.delete()
            .catch(console.error);
        //Auth Check
        if(!msgObject.member.hasPermission("MANAGE_MESSAGES")){
            msgObject.channel.send(`Sorry ${msgObject.author}, but this command is only for Admins.`)
                .catch(console.error)
                .then(msg =>{
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }
        //Count Check
        if(!args[0]){
            msgObject.channel.send(`Sorry, ${msgObject.author}, but you must enter a number of messages to be deleted.`)
                .catch(console.error)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        let numberOfMessagesToDelete = Number(args[0]);
        if(numberOfMessagesToDelete == NaN || numberOfMessagesToDelete < 1|| numberOfMessagesToDelete > 100){
            msgObject.channel.send(`Sorry, ${msgObject.author}, but that is not a valid number.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete);
        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);
    }


}