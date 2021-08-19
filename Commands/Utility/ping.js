module.exports = {
    name: `ping`,
    description: `A Simple Ping-Pong Command Used To Test If The Bot Is Working.`,
    execute(msgObject) {
        msgObject.channel.send({ content: `Pong!` });
    }
}
