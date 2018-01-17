const Discord = require('discord.js');
const config = require('../config.json')
const get = require('snekfetch');
const moment = require('moment');
const Selly = require('Selly.gg');
const API = new Selly.API(config.sellyEmail, config.sellyApiKey)



exports.run = (client, message, args) => {

 


if (!message.author.id === config.ownerId) {
  message.channel.send("Sorry, you're not my owner, you cannot use this command!")
} else {
  try {
    const ownerCmds = new Discord.RichEmbed()
    .setTitle("Owner-only Commands")
    .setDescription("Super secret owner only commands to manage your selly.gg page.")
    .setColor(1)
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    .addField("Commands", `${config.prefix}deletepayment [id] - **Deletes a payment with the payment id specified**\n${config.prefix}getorder [id] - **Shows all the info of the order id specified**`)
  client.users.get(config.ownerId).send({embed: ownerCmds})
} catch (e) {
  message.channel.send("Whoops! Looks like you didn't correctly modify the config.json :eyes: , please take a second look at it.")
}
}

}







exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'owner',
  description: `Sends you all the owner-only special commands.`,
  usage: 'owner'
};