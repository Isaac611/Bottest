const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$" 
var language = "en"


  client.on('message', msg => {
    if(msg.content === 'w!help') 
    
    msg.react('✅')
       .then(() => msg.react('✅')) 
       
  }); 
  
  
  // setlang ar
  client.on("message", message => {
    if (message.content === prefix + "setlang ar") {
     
       language = "ar"
   }
   }); 
   
     // setlang en
  client.on("message", message => {
    if (message.content === prefix + "setlang en") {
     
       language = "en"
   }
   }); 
  
  
  client.on("message", message => {
    if (message.content === "w!help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#FFB33F")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`Help message`)
   message.author.sendEmbed(embed)
   
   }
   }); 
   
   
// show avatar users - and show avatar server en
      client.on("message",message => {
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "background")){
const mention = message.mentions.users.first()

if(!mention) return console.log("") 
let embed = new Discord.RichEmbed()
.setColor("BLACK")
.setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
.setTitle("Avatar Link")
.setURL(`${mention.avatarURL}`)
.setImage(`${mention.avatarURL}`)
.setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
    message.channel.send(embed)
}
}) 
client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "background server") && language == "en" || message.content.startsWith(prefix + "bgd server") && language == "en") {
    let doma = new Discord.RichEmbed()
    .setColor("#FFB33F")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "background") && language == "en" || message.content.startsWith(prefix + "bgd") && language == "en") {
    let args = message.content.split(" ")[1]
var avt = args || message.author.id;    
    client.fetchUser(avt).then(user => {
     avt = user;
  let embed = new Discord.RichEmbed() 
  .setColor("#FFB33F")
  .setAuthor(`${avt.tag}`, avt.avatarURL)
  .setTitle("Avatar Link")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
    })
  }
}) 

// show avatar users - and show avatar server ar
      client.on("message",message => {
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "background")){
const mention = message.mentions.users.first()

if(!mention) return console.log("") 
let embed = new Discord.RichEmbed()
.setColor("BLACK")
.setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
.setTitle("Avatar Link")
.setURL(`${mention.avatarURL}`)
.setImage(`${mention.avatarURL}`)
.setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
    message.channel.send(embed)
}
}) 
client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "خلفية السيرفر") && language == "ar" || message.content.startsWith(prefix + "خلفيه السيرفر") && language == "ar") {
    let doma = new Discord.RichEmbed()
    .setColor("#FFB33F")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "background") || message.content.startsWith(prefix + "bgd") 
              || message.content.startsWith(prefix + "خلفية") || message.content.startsWith(prefix + "خلفيه")) {
    let args = message.content.split(" ")[1]
var avt = args || message.author.id;    
    client.fetchUser(avt).then(user => {
     avt = user;
  let embed = new Discord.RichEmbed() 
  .setColor("#FFB33F")
  .setAuthor(`${avt.tag}`, avt.avatarURL)
  .setTitle("Avatar Link")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
    })
  }
}) 
    
    
// set game for bot
client.on('ready', () => {
client.user.setGame(`w!help`)
});


client.login(process.env.TOKEN);
