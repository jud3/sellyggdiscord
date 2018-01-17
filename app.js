const Discord = require("discord.js");
const client = new Discord.Client();

const config = require('./config.json');
const fs = require("fs");
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");

client.config = config;

const bot = new Discord.Client()


require("./modules/functions.js")(client);
client.db = require("./modules/PersistentDB.js");

client.commands = new Enmap();
client.aliases = new Enmap();
client.testing = new Enmap({ provider: new EnmapLevel({ name: 'testing' }) });
client.mentions = new Enmap({ provider: new EnmapLevel({ name: 'mentions' }) });
client.myStatus = {
  lastSpoken: Date.now(),
  away: false,
  timeout: 900000
};



fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    if(f.split(".").slice(-1)[0] !== "js") return;
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
    if(props.init) props.init(client);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir('./events/', (err, files) => {
  if (err) console.error(err);
  console.log(`Loading a total of ${files.length} events.`);
  files.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});






client.login(config.botToken);
