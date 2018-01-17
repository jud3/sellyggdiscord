/*global wait*/
const warned = [];
const cooldowns = {};


module.exports = async (client, message) => {

for (const [name] of client.commands) {
  if (!cooldowns[name]) cooldowns[name] = {};
}

  if(message.content.indexOf(client.config.prefix) !== 0) return;




  const args = message.content.split(/ +/g);
  const command = args.shift().slice(client.config.prefix.length).toLowerCase();

  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  if (cmd) {
    message.flags = [];
    while(args[0] && args[0][0] === "-") {
      message.flags.push(args.shift().slice(1));
    }
    cmd.run(client, message, args);
  } 
};
