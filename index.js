const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " ArdaDemr - Youtube kanalına ait j4j bot altyapısı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`ArdaDemr - Youtube kanalına ait j4j bot altyapısı.`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let ardademrj4j = await data.get(msg.author.id)
        
        if (ardademrj4j === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("**Sunucuya girdiğinde söyle bende gelirim** | sunucu linkin")      
      }
      }
    }
  }
})
client.on("ready", () => {
let a = client.channels.get("KANAL ID") // J4J KANAL ID
      setInterval(() => {
       a.send("J4J yapacak türkler mesaj atsın.")
      }, 30000);
	  setInterval(() => {
		a.send("J4J")
	   }, 70000);
	   setInterval(() => {
		a.send("J4J yapılır dm")
	   }, 100000);
})
client.login("TOKEN BURAYA") // KULLANICI TOKENINI BURAYA GIRIN
