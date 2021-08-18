const { MessageEmbed } = require("discord.js");
const Prefix = process.env.PREFIX_DEFAULT;
module.exports = {
    name: 'help',
    description: 'Displays this help menu.',
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    execute(msgObject, args, client) {
        const data = [];
        const { commands } = msgObject.client;
        // Display List Of All Commands And Descriptions If No Args Are Provided
        if (!args.length) {
            const helpEmbed = new MessageEmbed()
                .setColor(`0xFFFF00`)
                .setTitle(`Help With Using ${client.user.username}`)
                .setDescription("Below is a list of the commands you can use with this bot.\nYou can get more detailed help for specific commands by using \`.help [command]\`\n\`example: .help roll\`")
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
            for (i of commands) {
                let cmdName = i.map(c => c.name)
                let cmdDescription = i.map(c => c.description)
                helpEmbed.addField(cmdName, cmdDescription)
            }
            msgObject.delete();
            msgObject.author.send({ embeds: [helpEmbed], split: true })
                .then(() => {
                    if (msgObject.channel.type === `DM`) return;
                    msgObject.reply({ content: `The command list has been sent to your DMs` })
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${msgObject.author.tag}.\n, error`);
                    msgObject.reply({ content: `It seems like I can\'t DM you!. Do you have DMs disabled?` });
                });
            return
        }
        // Display Specific Command Details If Args Are Provided
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply({ content: 'That\'s not a valid command!' });
        }
        if (!command.usage) { command.usage = `` }
        let helpEmbed = new MessageEmbed()
            .setColor(`0xFFFF00`)
            .setTitle(`Command Help: ${command.name.toUpperCase()}`)
            .setDescription(command.description)
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .addFields(
                { name: `Aliases`, value: command.aliases.join(`\n`) || `none` },
                { name: `Usage`, value: `${Prefix}${command.name} ${command.usage}` }
            )
        msgObject.author.send({ embeds: [helpEmbed], split: true })
            .then(() => {
                if (msgObject.channel.type === `DM`) return;
                msgObject.reply({ content: `The command information has been sent to your DMs` })
            })
            .catch(error => {
                console.error(`Could not send help DM to ${msgObject.author.tag}.\n, error`);
                msgObject.reply({ content: `It seems like I can\'t DM you!. Do you have DMs disabled?` });
            });
    },
};
