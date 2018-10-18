const Discord = require('discord.js')

exports.run = (client, message, args, ops, eEmb) => {
    try {
        let users = client.guilds;

        let searchTerm = args[0];
        if(!searchTerm) return message.channel.send("Please supply valid paramaters!")
        
        let matches = users.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()));
        var matchF = matches.map(u => u.name).join("\n")
            var emb = new Discord.RichEmbed()
            .addField("Guilds:", matchF)
            .setColor(ops.embColor)
            message.channel.send(emb)   

    } catch(e) {
        eEmb(e)
    }
}