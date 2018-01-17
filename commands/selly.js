const Discord = require('discord.js');
const config = require('../config.json')
const get = require('snekfetch');
const moment = require('moment');
const Selly = require('Selly.gg');
const API = new Selly.API(config.sellyEmail, config.sellyApiKey)



exports.run = (client, message, args) => {
  try {
message.channel.send(config.sellyLink)
} catch (e) {
  message.channel.send("Whoops! Looks like my owner hasn't set his selly link in config.json.")
}
}








exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'selly',
  description: `Sends the owners' selly link`,
  usage: 'selly'
};