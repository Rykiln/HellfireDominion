const { MessageEmbed } = require(`discord.js`);
const { readFile } = require(`fs`);

module.exports = {
  // Name of this command. Required for all commands.
  name: 'member',

  // [Optional] Description of this command for the help command
  description: 'Gets Guild Information Of A Member.',

  // [Optional] Permits additional command names to be used for this command 
  aliases: ['userinfo', `user`, `memberinfo`],

  // [Optional] Displays how to use this command in the help command.
  usage: '[@mention]',

  // [Optional] When True - Requires Arguments Be Provided In Message Object
  args: false,

  // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  guildOnly: true,

  // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  cooldown: 5,
  execute(msgObject, client) {
    msgObject.guild.members.fetch(msgObject.mentions.users.first() || msgObject.author)
      // msgObject.guild.fetchMember(args.mentions.users.first() || msgObject.author)
      .then(usrMember => {
        let nick = usrMember.nickname;
        if (!nick) { nick = usrMember.user.username };
        // let rolesArray = [`389273680334815242`, `389273982546739200`, `389274052885348372`, `389274119717388290`, `629438634386259968`, `629439033923207168`, `694707033110478849`, `629439039396642827`, `612483656241643525`] // OOPS ROLES
        // let rankId = rolesArray.find(id => usrMember.roles.keyArray().includes(id))

        // Retrieve JSON Data For Warning and No-Show Information

        readFile(`./Data/Warnings/current.json`, function (err, data) {
          if (err) throw err;

          const warns = JSON.parse(data);
          // Function To Get A Count Of Total Warnings For The Member
          function getOccurence(array, value) {
            let count = 0
            array.forEach((v) => (v[`ID`] === value && count++))
            return count;
          }
          // Function To Get The Names Of Channels The Member Was Marked As A No-Show In For The Member
          function getEvents(array, value) {
            const events = []
            array.forEach((v) => (v[`ID`] === value && events.push(v[`event`])))
            return events;
          }
          // Function To Get The Names Of The Raid Lead Or Officer That Submitted The No-Show For The Member
          function getWarnedBy(array, value) {
            const events = []
            array.forEach((v) => (v[`ID`] === value && events.push(v[`warnedby`])))
            return events;
          }
          function getWarnedDate(array, value) {
            const events = [];
            array.forEach((v) => (v.ID === value && events.push(v.date)));
            return events;
          }
          // Store Variables And Format As Text If Blank To Prevent Null Values In MessageEmbed
          let loggedwarnings = getOccurence(warns, usrMember.id);
          let loggedevent = getEvents(warns, usrMember.id);
          let warnedby = getWarnedBy(warns, usrMember.id);
          let warneddate = getWarnedDate(warns, usrMember.id);
          if (loggedwarnings.length == 0) { loggedwarnings = "None" };
          if (loggedevent.length == 0) { loggedevent = "None" };
          if (warnedby.length == 0) { warnedby = "None" };

          const embed = new MessageEmbed()
            .setColor(usrMember.displayHexColor)
            .setTitle("Member Information")
            .setThumbnail(usrMember.user.displayAvatarURL())
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .addFields( // Name Nickame and Tag Fields
              { name: 'Server Nickname', value: nick, inline: true },
              { name: 'Account Name', value: usrMember.user.username, inline: true },
              { name: 'Discord ID', value: usrMember.user.tag, inline: true },
            )
            // .addField("Your Guild Rank", usrMember.roles.get(rankId))
            .addFields(
              { name: 'Your Guild Rank', value: usrMember.roles.highest.toString(), inline: false },
              { name: 'You Joined The Guild', value: usrMember.joinedAt.toString(), inline: false },
              { name: 'Warnings', value: loggedwarnings.toString(), inline: false }
            );
          if (loggedwarnings > 0) {
            embed.addFields(
              { name: 'Events', value: loggedevent.join(`\n`), inline: true },
              { name: 'Warned By', value: warnedby.join(`\n`), inline: true },
              { name: 'Date', value: warneddate.join(`\n`), inline: true },
            );
          }
          msgObject.channel.send({ embeds: [embed] });
        });
      });
  },
};
