const { MessageEmbed } = require('discord.js');

module.exports = {
  // Name of this command. Required for all commands.
  name: 'newcore',											
  
  // [Optional] Description of this command for the help command
  description: 'ADMIN: Creates a new role, channel, and new apply channel for starting a new core progression team.',
  
  // [Optional] Permits additional command names to be used for this command
  aliases: ['newprogression', 'newprog', 'core', 'prog'],

  // [Optional] Displays how to use this command in the help command.
  usage: '<Core Name>',

  // [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
  permissions: 'MANAGE_ROLES',
  
  // [Optional] When True - Requires Arguments Be Provided In Message Object
  args: true,

  // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  guildOnly: true,
  
  // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  cooldown: 5,
  async execute(msgObject, args, client) {
    const raidLeaderID = msgObject.author.id;
    const raidLeader = msgObject.guild.members.resolve(raidLeaderID);
    const coreName = args.join(' ');
    const coreRoleName = `${coreName}`;
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
        await coreChannel.permissionOverwrites.edit(createdCoreRole, {
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
          const embed = new MessageEmbed()
            .setTitle('New Core Group Created!')
            .setColor(process.env.GLOBAL_COLOR_UPDATE)
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .addField('Core Role', createdCoreRole.toString())
            .addField('Core Channels', `${createdCoreChannel.toString()}\n${createdApplyChannel.toString()}`);
          await msgObject.channel.send({ embeds: [embed] });
        });
      });
    });
  },
};
