const repeat = require('repeat')

exports.run = (client) => {
  
    var statusPlay = 0;
        setInterval(function(){
            if (statusPlay > 0) {
                statusPlay -= 1;
                client.user.setActivity(`on ${client.guilds.size} guilds`)
            } else {
                statusPlay += 1;
                client.user.setActivity("_help")
            }
        }, 10000)
}