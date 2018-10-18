const Discord = require('discord.js');

exports.run = (client, message, args, ops, eEmb) => {

    try {
            var emb1 = new Discord.RichEmbed()
            .setAuthor("Jon Statistics")
            .addField("General:", `Users: \`${client.users.size}\`\n`, true)
            .addField("Times:", `Ping: \`${Math.floor(client.ping)}\`\nUptime: \`${millisToMinutesAndSeconds(client.uptime)}ms\``, true)
            .setColor(ops.embColor)
            message.channel.send(emb1)
    } catch(e) {
        eEmb(e)
    }
}   

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }