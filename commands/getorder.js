const Discord = require('discord.js');
const config = require('../config.json')
const get = require('snekfetch');
const moment = require('moment');
const Selly = require('Selly.gg');
const API = new Selly.API(config.sellyEmail, config.sellyApiKey)



exports.run = (client, message, args) => {
if (!message.author.id === config.ownerId) {
  message.channel.send("You're not my owner, you can't use this command!")
} else

if (!message.content.split(' ')[1])
{
  const sellyFail = new Discord.RichEmbed()
  .setTitle("Specify!")
  
  .setDescription("Please specify a order id to search for!\n")
        .setAuthor(client.user.username, client.user.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag + " .", message.author.displayAvatarURL)
                .setColor(0x70BEFF)

  try { message.channel.send({embed: sellyFail}) } catch (e) { message.channel.send("Error: " + e + "\nThis may be caused by the config.json not being set up right.")}
} else {
  try {
API.getSpecificOrder(message.content.split(' ')[1]).then(data => {
        console.log("WHAT")
    }).catch(items => {

const sellyProductEmb = new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag + " .", message.author.displayAvatarURL)
        .setDescription("Displaying product " + message.content.split(' ')[1])
        .addField("Product Id", items.product_id, true)
        .addField("Email:", items.email, true)
        .addField("Value", items.value)
        .addField("Currency", items.currency, true)
        .addField("Gateway", items.gateway)
        .addField("IP Address", items.ip_address)
        .addField("Country code", items.country_code)
        .addField("Risk level", items.risk_level)
        .addField("User agent", items.user_agent)
        .addField("Actually bought", items.delivered ? "Yes" : "No")
        .setColor(0x70BEFF)
        message.channel.send("A DM has been sent your way by the discord gods. :mailbox_with_mail:")
          client.users.get(config.ownerId).send(sellyProductEmb)


    	}

      )} catch (e) {
      message.channel.send("Error!\n" + e)
    } 

  }}







exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'getorder',
  description: `Displays info on the order id provided. **OWNER ONLY**`,
  usage: 'getorder [order-id]'
};