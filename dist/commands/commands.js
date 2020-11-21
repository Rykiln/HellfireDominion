"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Commands {
    constructor() {
        this._command = "Commands";
    }
    help() {
        return "This Displays This Commands Menu";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        for (const commandClass of commands) {
            try {
                if (!commandClass.isThisCommand(command)) {
                    continue;
                }
                msgObject.channel.send(commandClass.help());
            }
            catch (exception) {
                console.log(exception);
            }
        }
    }
}
exports.default = Commands;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvY29tbWFuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFxQixRQUFRO0lBQTdCO1FBQ3FCLGFBQVEsR0FBRyxVQUFVLENBQUE7SUErQjFDLENBQUM7SUE3QkcsSUFBSTtRQUNBLE9BQU8sa0NBQWtDLENBQUE7SUFDN0MsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUV6RSxLQUFLLE1BQU0sWUFBWSxJQUFJLFFBQVEsRUFBRTtZQUVqQyxJQUFJO2dCQUVBLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUV0QyxTQUFTO2lCQUNaO2dCQUVELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQy9DO1lBQ0QsT0FBTyxTQUFTLEVBQUU7Z0JBRWQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxQjtTQUNKO0lBQ0wsQ0FBQztDQUdKO0FBaENELDJCQWdDQyJ9