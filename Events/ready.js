module.exports = {
    name: `ready`,
    once: true,
    execute(client){
        console.log(`${client.user.username} Bot Is Now Online!`);
        console.log(`Twitch API Request interval is set to ${process.env.HD_TWITCH_REFRESH} seconds.`)
        console.log(Date());
        console.log(`========================================`);
        console.log();
        client.user.setActivity(`${client.user.username} | .help`, { type: "PLAYING" });
    }
}