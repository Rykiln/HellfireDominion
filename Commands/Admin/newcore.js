const { MessageEmbed } = require('discord.js');
const { readFile } = require(`fs`);

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
		// Get Guild Information From JSON File
		const guildHellfireDominion = `./Data/HellfireDominion/guild.json`;

    readFile(guildHellfireDominion, async function (err, data) {
      if (err) throw err;
      
      const dataHellfireDominion = JSON.parse(data);

      const raidLeaderID = msgObject.author.id;
      const raidLeader = msgObject.guild.members.resolve(raidLeaderID);
      const coreName = args.join(' ');
      const coreRoleName = `${coreName}`;
      const coreNameFormatted = coreName.replace(' ', '-').toLowerCase();
      const coreStratsChannelName = `📣｜${coreNameFormatted}`;
      const coreChatChannelName = `💬｜${coreNameFormatted}`;
      const coreApplyChannel = `apply｜${coreNameFormatted}`;
      const createdRolePosition = msgObject.guild.roles.cache.get(dataHellfireDominion.roles.separator.interests).position + 1;

      // Create Core Role
      const coreRole = await msgObject.guild.roles.create({
        name: coreRoleName,
        hoist: false,
        mentionable: true,
        position: createdRolePosition,
      });

      // Assign tag to message author
      raidLeader.roles.add(coreRole);
      
      // Create Core Role Fill
      const coreRoleFill = await msgObject.guild.roles.create({
        name: `${coreRoleName} Fill`,
        hoist: false,
        mentionable: true,
        position: createdRolePosition,
      });

      // Create Core Strat Channel And Set Parent Permissions As Default And Then Add The New Role With Permission Overwrites
      const coreStratChannel = await msgObject.guild.channels.create(coreStratsChannelName, 'text');
      await coreStratChannel.setParent(dataHellfireDominion.categories.cores);
      await coreStratChannel.lockPermissions();
      const coreStratChannelPermissions = {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
      }
      await coreStratChannel.permissionOverwrites.edit(coreRole, coreStratChannelPermissions);
      await coreStratChannel.permissionOverwrites.edit(coreRoleFill, coreStratChannelPermissions);

      // Create Core Chat Channel And Set Parent Permissions As Default And Then Add The New Role With Permission Overwrites
      const coreChatChannel = await msgObject.guild.channels.create(coreChatChannelName, 'text');
      await coreChatChannel.setParent(dataHellfireDominion.categories.cores);
      await coreChatChannel.lockPermissions();
      const coreChatChannelPermissions = {
        VIEW_CHANNEL: true,
      }
      await coreChatChannel.permissionOverwrites.edit(coreRole, coreChatChannelPermissions);
      await coreChatChannel.permissionOverwrites.edit(coreRoleFill, coreChatChannelPermissions);


      const applyChannel = await msgObject.guild.channels.create(coreApplyChannel, 'text');
      await applyChannel.setParent(dataHellfireDominion.categories.coresApply);
      await applyChannel.lockPermissions();

      // Send Confirmation Message
      const embed = new MessageEmbed()
        .setTitle('New Core Group Created!')
        .setColor(process.env.GLOBAL_COLOR_UPDATE)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        .addField('Core Role', coreRole.toString())
        .addField('Core Fill Role', coreRoleFill.toString())
        .addField('Core Channels', `${coreStratChannel.toString()}\n${coreChatChannel.toString()}\n${applyChannel.toString()}`);

      await msgObject.channel.send({ embeds: [embed] });
      });
  },
};
