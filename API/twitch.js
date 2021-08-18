// Connect To Discord API
const { MessageEmbed } = require(`discord.js`);

// Connect To Twitch API
const Twitch = require(`twitch`).ApiClient;
const TwitchAuth = require(`twitch-auth`).ClientCredentialsAuthProvider;
const twitchClientID = process.env.HD_TWITCH_CLIENTID;
const twitchClientSecret = process.env.HD_TWITCH_SECRET;
const twitchAuthProvider = new TwitchAuth(twitchClientID, twitchClientSecret);
const apiClient = new Twitch({ authProvider: twitchAuthProvider });
const interval = process.env.HD_TWITCH_REFRESH;
const streamers = require(process.env.HD_JSON_STREAMERS);
const twitchColor = 0x6441a5; // OFFICIAL HEX COLOR FOR TWITCH.TV

// Function To Get Currently Active Streamers From JSON List of Streamers
module.exports = (client) => {
    setInterval(() => {
        const currentTime = new Date().getTime()
        streamers.forEach(async streamer => {
            try {
                // Get Match Twitch Users and Channels From JSON Objects
                const tUser = await apiClient.helix.users.getUserByName(streamer.TwitchID); // Searches For User Data
                const tSearch = await apiClient.helix.search.searchChannels(streamer.TwitchID); // Searches For Channels By Name
                const tChannel = tSearch.data.find(c => { return c.name === streamer.TwitchID }); // Filters Channels Found For Exact String Matches
                const tChannelURL = `https://twitch.tv/${tChannel.name}`;

                // Checks Channel For isLive Status
                if (!tChannel.isLive) {
                    // await console.log(`${tUser.displayName} -- OFFLINE --`); // Console Logs Offline Users For Debugging.
                    return;
                };
                // Gets Stream And Game Data For Active Channels
                const tStream = await tUser.getStream();
                const tStreamTime = tStream.startDate.getTime();
                const tStreamTitle = tStream.title;
                const tStreamThumbnail = tStream.getThumbnailUrl(320, 180);
                const tStreamViewers = tStream.viewers;
                const tGame = tStream.gameName;
                // Set Destination Channel In Discord By Game
                let dChannel;
                switch (tGame.toLowerCase()) {
                    case 'the elder scrolls online':
                    case 'the elder scrolls online: collection':
                    case 'the elder scrolls online: blackwood':
                        dChannel = client.channels.cache.get(process.env.HD_CHANNEL_MEDIA);
                        break;
                    default:
                        dChannel = client.channels.cache.get(process.env.HD_CHANNEL_MEDIA_OTHER);
                        break;
                }

                // Checks To See If Activity Started Within The Last Interval
                const tStreamRecent = currentTime - tStreamTime <= interval
                if (!tStreamRecent) { // Return if Not Recent
                    return;
                }
                // Console Log Recent Streams
                console.log(`[${tUser.displayName}] Started Streaming [${tGame}]`)

                // Format Data Into An Embed And Send To The Destination Channel
                let embed = new MessageEmbed()
                    .setTitle(tStreamTitle)
                    .setAuthor(tUser.displayName, tUser.profilePictureUrl)
                    .setURL(tChannelURL)
                    .setColor(twitchColor)
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setTimestamp()
                    .setThumbnail(tUser.tStreamThumbnail)
                    .addFields(
                        { name: `Game`, value: tGame, infline: true },
                        { name: `Current Viewers`, value: tStreamViewers, inline: true }
                    )
                dChannel.send({ embeds: [embed] })
                    .catch(console.error());
            } catch { return };;
        });
    }, interval);
};
