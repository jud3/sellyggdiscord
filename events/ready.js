/* global wait */
const Discord = require('discord.js')
const fs = require("fs");
const config = require('../config.json')
module.exports = async client => {
var express = require('express')
var app = express()


client.user.setUsername(config.botName)

console.log(
  `
  ------------------------
  ${client.user.username} - Discord Bot
  ------------------------
  ${client.user.tag}

  Connected to:
  ${client.guilds.size} guilds
  ${client.channels.size} channels
  ${client.users.size} users

  Prefix: ${config.prefix}
  Coder: Quantiom#5566 (add if you need help with anything)
  ------------------------
  `) 
client.user.setActivity('selly.gg', { type: 'WATCHING' });


  try {
    const { id: rebootMsgID , channel: rebootMsgChan} = JSON.parse(fs.readFileSync('./reboot.json', 'utf8'));
    const m = await client.channels.get(rebootMsgChan).messages.fetch(rebootMsgID);
    await m.edit('Rebooted!');
    await m.edit(`Rebooted! (took: \`${m.editedTimestamp - m.createdTimestamp}ms\`)`);
    fs.unlink('./reboot.json', ()=>{});
  } catch(O_o){}
  await wait(2000);
  

};