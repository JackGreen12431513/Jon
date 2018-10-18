const Discord = require('discord.js');
const Chalk = require('chalk')
require('dotenv').config();
var client = new Discord.Client();
const fs = require('fs')

client.login(process.env.jonTKBT)

client.on('ready', () => {
    var datetime = new Date();
    console.log(Chalk.green("Bot Ready!\n" + Chalk.cyan("Initialized: " + datetime)));
    client.user.setActivity(`on ${client.guilds.size} guilds`)

    //Run Preset Files

    let playing = require(`./Presets/loopPlaying.js`);
    playing.run(client);

    let ping = require(`./Presets/ping.js`)
    ping.run();
})

client.on('message', message => {

    const prefix = "_"

    let args = message.content.slice(prefix.length).trim().split(' ')
    let cmd = args.shift().toLowerCase();

    if(message.author.bot)return;
    if(!message.content.startsWith(prefix))return;
    if(message.channel.type == 'dm')return message.channel.send("Unable to use commands in DM's!");

    fs.exists(`./Commands/${cmd}.js`, (exists) => {
        if(exists) {
            delete require.cache[require.resolve(`./Commands/${cmd}.js`)] 
        } else {
            message.channel.send(`Sorry, \`${cmd}\` is not a valid command!`)
            return;
        }
    })

    try {

        let ops = {
            ownerID: process.env.ownerID,
            embColor: "0xAE7F9C"
        }

        function eEmb(eCode) {
            var embed = new Discord.RichEmbed()
            .setColor(ops.embColor)
            .setTitle("Jon Error!")
            .addField('Output:', `\`\`\`js\n${eCode}\`\`\``)
            .setFooter(Date())
            message.channel.send(embed)
        }

        let commandFile = require(`./Commands/${cmd}.js`);
        commandFile.run(client, message, args, ops, eEmb);

    } catch(e) {
        console.log(e.stack);
    }
})

client.on('guildCreate', guild => {
    const g = JSON.parse(fs.readFileSync('./Data/Guilds.json', 'utf8'))
    g[guild.id] = {
        guildName: guild.name
    }
    fs.writeFileSync('./Data/Guilds.json', JSON.stringify(g))
    guild.owner.send("Woah! A new server?\n\nHey! Thanks for having me!\n\nThe Roles I need:\n `[Jon] Admin` - Administrator\n`[Jon] Mod - Moderator`")
})