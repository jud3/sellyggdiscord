const Discord = require('discord.js');
const config = require('../config.json')
const get = require('snekfetch');
const moment = require('moment');
const Selly = require('Selly.gg');
const API = new Selly.API(config.sellyEmail, config.sellyApiKey)



exports.run = (client, message, args) => {

 


API.getAllProducts().then(data => {
        console.log("WHAT")
    }).catch(items => {
var num = 1;
const sellyProductEmb = new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag + " .", message.author.displayAvatarURL)
        .setDescription("Displaying all products.")
        .addField("Products", items.map(i => "**" + num++ + "**. " + i.title).join(`\n\n`))
        .setColor(0x70BEFF)
message.channel.send(sellyProductEmb)

    	}

    )

}







exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'products',
  description: `Displays all selly products for the api key and email provided in the config.json.`,
  usage: 'products'
};