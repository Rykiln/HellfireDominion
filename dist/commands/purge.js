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
class Purge {
    constructor() {
        this._command = "purge";
    }
    help() {
        return "ADMIN - Deletes The Desired Amount Of Messages From The Channel";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete()
                .catch(console.error);
            if (!msgObject.member.hasPermission("MANAGE_MESSAGES")) {
                msgObject.channel.send(`Sorry ${msgObject.author}, but this command is only for Admins.`)
                    .catch(console.error)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            if (!args[0]) {
                msgObject.channel.send(`Sorry, ${msgObject.author}, but you must enter a number of messages to be deleted.`)
                    .catch(console.error)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            let numberOfMessagesToDelete = Number(args[0])+1;
            if (numberOfMessagesToDelete == NaN || numberOfMessagesToDelete < 1 || numberOfMessagesToDelete > 100) {
                msgObject.channel.send(`Sorry, ${msgObject.author}, but that is not a valid number.`)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete);
            msgObject.channel.fetchMessages({limit: numberOfMessagesToDelete})
                .then(fetched => {
                    const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned);
                    msgObject.channel.bulkDelete(notPinned, true);
                })
                .catch(console.error);
        });
    }
}
exports.default = Purge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcHVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQXFCLEtBQUs7SUFBMUI7UUFDcUIsYUFBUSxHQUFHLE9BQU8sQ0FBQTtJQWtEdkMsQ0FBQztJQWhERyxJQUFJO1FBQ0EsT0FBTyxpRUFBaUUsQ0FBQztJQUM3RSxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxTQUFTLENBQUMsTUFBTSxFQUFFO2lCQUNiLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFMUIsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEVBQUM7Z0JBQ2xELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsU0FBUyxDQUFDLE1BQU0sd0NBQXdDLENBQUM7cUJBQ3BGLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO3FCQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3lCQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDUCxPQUFPO2FBQ1Y7WUFFRCxJQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUNSLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsU0FBUyxDQUFDLE1BQU0sMERBQTBELENBQUM7cUJBQ3ZHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO3FCQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3lCQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDUCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFHLHdCQUF3QixJQUFJLEdBQUcsSUFBSSx3QkFBd0IsR0FBRyxDQUFDLElBQUcsd0JBQXdCLEdBQUcsR0FBRyxFQUFDO2dCQUNoRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLFNBQVMsQ0FBQyxNQUFNLG1DQUFtQyxDQUFDO3FCQUNoRixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3lCQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDUCxPQUFPO2FBQ1Y7WUFDRCx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDaEUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7aUJBQ2pELEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQztLQUFBO0NBR0o7QUFuREQsd0JBbURDIn0=