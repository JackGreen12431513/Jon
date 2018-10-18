const Discord = require('discord.js');

exports.run = () => {

    try {
        var port = 5000;
        const http = require('http')
        var server = http.createServer();
        server.listen(process.env.PORT || 5000)
        setInterval(function() {
        http.get("http://abraxasdiscordbot.herokuapp.com");
        console.log("Pinged!")
    }, 300000); // every 5 minutes (300000)
    } catch(e) {
        
    }
}   