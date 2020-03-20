const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "$"

var adminprefix = '$'

  client.on('message', msg => {

    if(msg.content === prefix + 'help') 

    

    msg.react('✅')

       .then(() => msg.react('✅')) 

       

  });

  

  

  client.on("message", message => {

    if (message.content === "$help") {

     const embed = new Discord.RichEmbed() 

         .setColor("#FFB33F")

         .setThumbnail(message.author.avatarURL)

         .setDescription(`Help message`)

   message.author.sendEmbed(embed)

   

   }

   });

client.login(process.env.TOKEN);

