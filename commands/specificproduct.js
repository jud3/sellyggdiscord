const Discord = require('discord.js');
const config = require('../config.json')
const get = require('snekfetch');
const moment = require('moment');
const Selly = require('Selly.gg');
const API = new Selly.API(config.sellyEmail, config.sellyApiKey)



exports.run = (client, message, args) => {

if (!message.content.split(' ')[1])
{
  const sellyFail = new Discord.RichEmbed()
  .setTitle("Specify!")
  
  .setDescription("Please specify a product id to search for!\nIf you do not know how to get a product id, there are 2 ways.\n")
  .addField("Method 1", "Go to the url and copy everything after /p/", true)
  .addField("Method 2", "Type " + config.prefix + "productids .")
        .setAuthor(client.user.username, client.user.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag + " .", message.author.displayAvatarURL)
                .setColor(0x70BEFF)
  message.channel.send({embed: sellyFail})
} else  if (!message.content.split(' ')[1].length === 8) {
  const sellyFail1 = new Discord.RichEmbed()
  .setTitle("Specify!")
  
  .setDescription("Please specify a product id to search for!\nIf you do not know how to get a product id, there are 2 ways.\n")
  .addField("Method 1", "Go to the url and copy everything after /p/", true)
  .addField("Method 2", "Type " + config.prefix + "productids .")
        .setAuthor(client.user.username, client.user.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag + " .", message.author.displayAvatarURL)
                .setColor(0x70BEFF)
  message.channel.send({embed: sellyFail1})
} else {
  try {
API.getSpecificProduct(message.content.split(' ')[1]).then(data => {
        console.log("WHAT")
    }).catch(items => {

const sellyProductEmb = new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL)
        .setFooter("Requested by " + message.author.tag + " .", message.author.displayAvatarURL)
        .setDescription("Displaying product " + message.content.split(' ')[1])
        .addField("Name", items.title, true)
        .addField("Description", items.description, true)
        .addField("Price", items.price + " " + items.currency)
        .addField("Paypal Accepted", items.paypal)
        .addField("BTC Accepted", items.bitcoin)
        .addField("Stock", items.stock)
        .addField("Maximum Quantity", items.maximum_quantity ? items.maximum_quantity : "None")
        .addField("Minimum Quantity", items.minimum_quantity)
        .setColor(0x70BEFF)
message.channel.send(sellyProductEmb)


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
  name: 'specificproduct',
  description: `Displays info on the product id provided.`,
  usage: 'specificproduct [product-id]'
};