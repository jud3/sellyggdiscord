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
        .setDescription("Displaying all product ids, reffer to "+config.prefix+"products to see all of them normally.")
        .addField("Product IDs", items.map(i => "**" + num++ + "**. " + i.id).join(`\n`))
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
  name: 'productids',
  description: `Displays all selly product ids for the api key and email provided in the config.json.`,
  usage: 'productids'
};