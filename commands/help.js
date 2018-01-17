const Discord = require('discord.js')
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    var helpEmbed = new Discord.RichEmbed()
    .setTitle("Command list")
    .setDescription(`${client.commands.map(c => `**${client.config.prefix}${c.help.name}**${' '.repeat(longest - c.help.name.length)}   -   ${c.help.description}`).join('\n')}`, {code:'asciidoc'})
    .addField("Need more help?", "Type -help **commandname** to get more help on a specific command!")
    .setColor(0x70BEFF)
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    .setFooter("Requested by " + message.author.tag + ".", message.author.displayAvatarURL);
    message.channel.send(helpEmbed)
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      var helpEmbed2 = new Discord.RichEmbed()
    .setTitle(`${command.help.name}`)
    .setDescription(`\n${command.help.description}\nusage:  -**${command.help.usage}**`, {code:'asciidoc'})
    .setColor(0x70BEFF)
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    .setFooter("Requested by " + message.author.tag + ".", message.author.displayAvatarURL);
    message.channel.send(helpEmbed2)
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp']
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands.',
  usage: 'help [command]'
};