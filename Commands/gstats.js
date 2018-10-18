const Discord = require('discord.js');

exports.run = (client, message, args, ops, eEmb) => {

    try {
            var emb1 = new Discord.RichEmbed()
            .setAuthor(`${message.guild}'s Statistics`)
            .addField("General:", `Users: \`${message.guild.memberCount}\`\n`, true)
            .setColor(ops.embColor)
            message.channel.send(emb1)
    } catch(e) {
        eEmb(e)
    }
}   