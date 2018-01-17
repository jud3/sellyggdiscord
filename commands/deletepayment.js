const Discord = require('discord.js');
const config = require('../config.json')
const get = require('snekfetch');
const moment = require('moment');
const Selly = require('Selly.gg');
const API = new Selly.API(config.sellyEmail, config.sellyApiKey)



exports.run = (client, message, args) => {

 if (!message.author.id === config.ownerId) {
  message.channel.send("You're not my owner! You cant use this command.")
 } return;
if (!message.content.split(' ')[1]) {
  message.channel.send("Specify an order ID please. (error message is currently BROKE so if you get no response, the order id was invalid.)")
} else {try {

API.deletePayment(message.content.split(' ')[1]).then(data => {
        message.channel.send("Successfully deleted payment # " + message.content.split(' ')[1])
    })} catch (e) {
  message.channel.send("Error!\n" + e)
}}}






exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'deletepayment',
  description: `Deletes a payment. **OWNER ONLY**`,
  usage: 'deltepayment'
};