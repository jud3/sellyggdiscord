# Quantiom's Selly.gg Bot

## Requirements

- `git` command line ([Windows](https://git-scm.com/download/win)|[Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)|[MacOS](https://git-scm.com/download/mac)) installed
- `node` [Version 8.4.0 or higher](https://nodejs.org)
- `a machine` to host it on. If you want it online 24/7, use a VPS.

## Downloading

In a command prompt in your projects folder (wherever that may be) run the following:

`git clone https://github.com/quantiom/sellyggdiscord`

Once finished: 

- Edit `config.json` to your needs:



```json
{
  "botToken": "Mzk4Mzk0--SUPER--2MTQ--SECRET--TkxNDg5.D--TOKEN--.p8GkOQCSU_mSl--NOT FOR U--2e1pCI",
  "prefix": "--",
  "botName": "Selly.gg bot",
  "ownerId": "YourDiscordUserID",
  "sellyLink": "https://www.selly.gg/@YourSellyName",
  "sellyApiKey": "yourSellyApiKey", 
  "sellyEmail": "email@email.email" 
}
```

- `botToken` = Your bots token (which you shouldn't share with ANYONE!)
- `prefix` = The prefix that you want to use for all the commands.
- `botName` = The bots username.
- `ownerId` = Your discord user id. 
- `sellyLink` = Your selly link (ex. https://selly.gg/@Selly)
- `sellyApiKey` = Pretty self explanitory, find it in the settings tab on selly.gg.
- `sellyEmail` = The email you use to login to selly.gg with.

## Getting your bots token

1. Go to [here](https://discordapp.com/developers/applications/me)
2. Click your bot
3. Scroll down to token
4. Click to reveal

> **KEEP YOUR TOKEN SECRET, AND NEVER SHARE IT WITH ANYONE**

## Starting the BOT

To start the bot, in the command prompt, run the following command:
`node app.js`

> If at any point it says "cannot find module X" just run `npm install X` and try again.
> Ex. "Cannot find module selly.gg", you need to do `npm install selly.gg`.

## Support

For support, contact me on discord @ Quantiom#5566 
