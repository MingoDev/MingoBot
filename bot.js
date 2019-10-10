const Discord = require('discord.js');
const bot = new Discord.Client();
const auth = require('./auth.json');

var isReady = true;

bot.on('message', message => {
    if (isReady && message.content === '!x')
    {
        isReady = false;
        var voiceChannel = message.member.voiceChannel;
        voiceChannel.join().then(connection =>
        {
            const dispatcher = connection.playFile('./assets/sounds/i_need_healing.mp3');
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
        isReady = true;
    }
});

bot.login(auth.token);