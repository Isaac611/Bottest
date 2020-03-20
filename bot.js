const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "w!" 

  client.on('message', msg => {
    if(msg.content === prefix + 'help') 
    
    msg.react('✅')
       .then(() => msg.react('✅')) 
       
  });
  
  
  
  client.on("message", message => {
    if (message.content === "help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#FFB33F")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`Help message`)
   message.author.sendEmbed(embed)
   
   }
   });

// set game for bot
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Isaac`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Isaac ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`w!help`)
});


client.login(process.env.TOKEN);
