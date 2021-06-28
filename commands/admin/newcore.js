const Discord = require('discord.js');

module.exports = {
  name: 'newcore',																												// Name of this command. Required for all commands.
  description: 'ADMIN: Creates a new role, channel, and new apply channel for starting a new core progression team.',		// [Optional] Description of this command for the help command
  aliases: ['newprogression', 'newprog', 'core', 'prog'], 																		// [Optional] Permits additional command names to be used for this command
  usage: '<Core Name>',																											// [Optional] Displays how to use this command in the help command.
  permissions: 'MANAGE_ROLES',																									// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
  args: true, 																													// [Optional] When True - Requires Arguments Be Provided In Message Object
  guildOnly: true, 																												// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  cooldown: 5, 																													// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  async execute(msgObject, args, client) {
    const raidLeaderID = msgObject.author.id;
    const raidLeader = msgObject.guild.members.resolve(raidLeaderID);
    const coreName = args.join(' ');
    const coreRoleName = `Core - ${coreName}`;
    const coreNameFormatted = coreName.replace(' ', '-').toLowerCase();
    const coreChannelName = `💢｜${coreNameFormatted}`;
    const coreApplyChannel = `apply｜${coreNameFormatted}`;
    const createdRolePosition = msgObject.guild.roles.cache.get('820503111545782282').position + 1;

    // Create Core Role And Assign The Message Author As The First Member
    await msgObject.guild.roles.create({
      name: coreRoleName,
      hoist: false,
      mentionable: true,
      position: createdRolePosition,
    }).then(async (role) => {
      raidLeader.roles.add(role);

      // Retrive Created Role Information
      const createdCoreRole = role;

      // Create Core Channel And Set Parent Permissions As Default And Then Add The New Role With Permission Overwrites
      await msgObject.guild.channels.create(coreChannelName, 'text').then(async (coreChannel) => {
        await coreChannel.setParent('797478951693058098');
        await coreChannel.lockPermissions();
        // await coreChannel.overwritePermissions([
        await coreChannel.updateOverwrite(createdCoreRole, {
          VIEW_CHANNEL: true,
          SEND_MESSAGES: true,
          EMBED_LINKS: true,
          ATTACH_FILES: true,
          ADD_REACTIONS: true,
          READ_MESSAGE_HISTORY: true,
        });

        // Create Core Application Channel And Set Parent Permissions As Default
        await msgObject.guild.channels.create(coreApplyChannel, 'text').then(async (applyChannel) => {
          await applyChannel.setParent('797935776049659924');
          await applyChannel.lockPermissions();

          // Retrieve Created Channel Names
          const createdCoreChannel = coreChannel;
          const createdApplyChannel = applyChannel;

          // Send Confirmation Message
          const embed = new Discord.MessageEmbed()
            .setTitle('New Core Group Created!')
            .setColor(0x7ac8fb)
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .addField('Core Role', createdCoreRole)
            .addField('Core Channels', `${createdCoreChannel}\n${createdApplyChannel}`);
          await msgObject.channel.send(embed);
        });
      });
    });
  },
};
