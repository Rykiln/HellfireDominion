module.exports = {
    name: `messageCreate`,
    once: false,
    execute(msgObject, client) {
        const { Collection, Permissions } = require(`discord.js`)
        const Prefix = process.env.PREFIX_DEFAULT;
        if (!msgObject.content.startsWith(Prefix) || msgObject.author.bot) return; // Ignore Messages That Don't Start With The Prefix And Messages That Come From Bots

        const args = msgObject.content.slice(Prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        // Check Command Names and Command Aliases. Ignore Commands That Don't Exist
        const command = client.commands.get(commandName)
            || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;
        console.log(`[${msgObject.author.username}] used Command [${commandName}] in Channel [${msgObject.channel.name}]`);
        console.log(`With Args : [${args}]`);
        console.log();

        // Return Error if User does not have the correct permissions
        if (command.permissions) {
            // const authorPerms = msgObject.channel.permissionsFor(msgObject.author);              //Checks Channel Permissions For Author
            const authorPerms = msgObject.guild.members.resolve(msgObject.author.id).permissions; // Checks Guild Permissions For Author
            if (!authorPerms || !authorPerms.has(Permissions.FLAGS[command.permissions])) {
                msgObject.reply({ content: 'You do not have the permissions to use this command!', allowedMentions: { repliedUser: true } });
                return;
            }
        }

        // Return Error if GuildOnly command is Used in Direct Message
        if (command.guildOnly && msgObject.channel.type === 'DM') {
            msgObject.reply({ content: 'I can\'t execute that command inside DMs!', allowedMentions: { repliedUser: true } });
            return;
        }

        // Return Error if no args are given for commands that require args
        if (command.args && !args.length) {
            msgObject.channel.send({ content: 'You didn\'t provide any arguments!' });
            return;
        }

        // Return Error if command has a cooldown set and has been used too recently
        const { cooldowns } = client;

        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Collection());
        }

        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 3) * 1000;

        if (timestamps.has(msgObject.author.id)) {
            const expirationTime = timestamps.get(msgObject.author.id) + cooldownAmount;

            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                msgObject.reply({ content: `Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`, allowedMentions: { repliedUser: true } });
                return;
            }
        }

        // Execute Command. Give Error Message For Unknown Errors
        try {
            command.execute(msgObject, args, client);
        } catch (error) {
            console.error(error);
            msgObject.reply({ content: 'ERROR: An Unknown Error Has Occurred', allowedMentions: { repliedUser: true } });
        }
    }
}