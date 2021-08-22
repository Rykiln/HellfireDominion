const { MessageEmbed } = require('discord.js');
const { readFile, writeFile } = require('fs');
const _ = require('lodash');

module.exports = {
  // Name of this command. Required for all commands.
  name: 'noshow',

  // [Optional] Description of this command for the help command
  description: 'Notifies A Member That They Missed An Event.',

  // [Optional] Permits additional command names to be used for this command
  // aliases: [``, ``],

  // [Optional] Displays how to use this command in the help command.
  usage: '<@member>',

  // [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
  permissions: 'MANAGE_ROLES',

  // [Optional] When True - Requires Arguments Be Provided In Message Object
  args: true,

  // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  guildOnly: true,

  // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  cooldown: 5,
  execute(msgObject, args, client) {
    msgObject.guild.members.fetch(msgObject.mentions.users.first())
      .then((noshowMember) => {
        const noshowMemberTag = noshowMember.user.tag;
        const noshowMemberID = noshowMember.id;
        const eventName = msgObject.channel.name;
        const warnedBy = msgObject.author;
        const warningsFileCurrent = process.env.HD_JSON_WARNINGS;
        const warningsFileOLD = process.env.HD_JSON_WARNINGS_OLD;
        const channelNoShow = client.channels.resolve(process.env.HD_CHANNEL_WARNINGS);

        readFile(warningsFileCurrent, (err, data) => {
          if (err) throw err;

          readFile(warningsFileOLD, (err2, oldData) => {
            if (err2) throw err2;

            const currWarns = JSON.parse(data);
            const oldWarns = JSON.parse(oldData);
            const warns = [...oldWarns, ...currWarns];

            const newObject = {
              Member: (noshowMemberTag),
              ID: (noshowMemberID),
              event: (eventName),
              warnedby: (warnedBy.tag),
              reason: ('No-Show'),
              date: (Date()),
            };
            warns.push(newObject);

            // Split `warns` into warnings newer/older than 90 days ago and write them to separate files.
            const ninetyDaysAgo = new Date().setDate(new Date().getDate() - 90);
            const [newWarnings, oldWarnings] = _.partition(warns, (warning) => Date.parse(warning.date) > ninetyDaysAgo);

            const writeWarnings = (path, warnings) => {
              writeFile(path, JSON.stringify(warnings, null, 4), (err3) => {
                if (err3) throw err3;
              });
            };

            writeWarnings(warningsFileCurrent, newWarnings);
            writeWarnings(warningsFileOLD, oldWarnings);
          });
        });

        msgObject.delete();
        const embed = new MessageEmbed()
          .setTitle('Guild Member Added To No Show List')
          .setColor(0xFF0000)
          .setThumbnail(noshowMember.user.displayAvatarURL())
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setTimestamp()
          .addField('Guild Member', noshowMember.toString())
          .addField('Event', eventName)
          .addField('Warned By', warnedBy.username);

        const embedDM = new MessageEmbed()
          .setTitle('We Missed You Today!')
          .setColor(0xFF9900)
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setTimestamp()
          .setDescription(`Hello ${noshowMember.toString()}. You missed a guild event that you signed up for in our Discord. We hope that everything is okay. As per our guild rules, this is considered as a no-show, and three (3) no-shows can result in you being excluded from future events, or possibly even removed from the guild. Please see our [Guild Info](https://discordapp.com/channels/694306288250781699/728692333280886884/728693715794788373) channel to review the guild rules. With this said, we do understand that life happens. Just let us know when you're not going to make it. Also if you missed this because of an emergency, we're not heartless, message an officer and let one of us know, we don't need the private details, but we can remove this no-show for valid reasons.`)
          .addField('Event', eventName);

        channelNoShow.send({ embeds: [embed] });
        noshowMember.send({ embeds: [embedDM] });
      });
  },
};
