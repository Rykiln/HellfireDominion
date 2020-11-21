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
class Send {
    constructor() {
        this._command = "send";
    }
    help() {
        return "Sends A Formatted Message Into Chat.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            var destinationChannel = msgObject.mentions.channels.first() || msgObject.channel;
            if (destinationChannel === msgObject.channel) {
                var suppliedMessage = args.join(" ") || "";
            }
            else {
                var suppliedMessage = args.slice(1).join(" ") || "";
            }
            msgObject.delete();
            destinationChannel.send(suppliedMessage);
        });
    }
}
exports.default = Send;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixJQUFJO0lBQXpCO1FBQ3FCLGFBQVEsR0FBRyxNQUFNLENBQUE7SUFtQnRDLENBQUM7SUFqQkcsSUFBSTtRQUNBLE9BQU8sc0NBQXNDLENBQUE7SUFDakQsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFDL0UsSUFBSSxrQkFBa0IsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ2xGLElBQUcsa0JBQWtCLEtBQUssU0FBUyxDQUFDLE9BQU8sRUFBQztnQkFBQyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUFDO2lCQUNyRjtnQkFBQyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7YUFBQztZQUMxRCxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbkIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdDLENBQUM7S0FBQTtDQUdKO0FBcEJELHVCQW9CQyJ9