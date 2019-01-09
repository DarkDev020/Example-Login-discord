const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
   console.log('logged in as $client.user.tag);
});

client.on('message', msg => {
   if (msg.content === 'ping') {
   msg.reply('pong!)
   }
});

client.login('Insert bot token here')

//let me know if any problems occur.

//Make sure to install node.js
//after that run npm init in your command prompt.

//then install discord.js like this.
//npm i discord.js --save

//then do node index.js if you put your bot token in client.login('TOKEN HERE')

/then your bot is online
