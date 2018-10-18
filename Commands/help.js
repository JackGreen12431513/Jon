const Discord = require('discord.js');

exports.run = (client, message, args, ops, eEmb) => {

    try {
        if(!args[0]) {
            var emb1 = new Discord.RichEmbed()
            .setAuthor("Jon Help")
            .addField("General", "`_help general`", true)
            .addField("Utility", "`_help util`", true)
            .addField("NSFW", "`_help nsfw`", true)
            .setColor(ops.embColor)
            message.channel.send(emb1)
        } else if (args[0] == "general") {
            var emb2 = new Discord.RichEmbed()
            .setTitle("General")
            .setDescription("`stats, gstats`")
            .setColor(ops.embColor)
            message.channel.send(emb2)
        }
        else if (args[0] == "util") {
            var emb3 = new Discord.RichEmbed()
            .setTitle("util")
            .setDescription("`searchuser, searchguild`")
            .setColor(ops.embColor)
            message.channel.send(emb3)
        }
        else if (args[0] == "nsfw") {
            var emb4 = new Discord.RichEmbed()
            .setTitle("NSFW")
            .setDescription("`urban`")
            .setColor(ops.embColor)
            message.channel.send(emb4)
        }
    } catch(e) {
        
    }
}   