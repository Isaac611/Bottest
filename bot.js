const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$" 

  client.on('message', msg => {
    if(msg.content === 'w!help') 
    
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
   
   client.on("message",message => {
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "background")){
const mention = message.mentions.users.first()

if(!mention) return console.log("") 
let embed = new Discord.RichEmbed()
.setColor("#FFB33F")
.setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
.setTitle("Avatar Link")
.setURL(`${mention.avatarURL}`)
.setImage(`${mention.avatarURL}`)
.setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
    message.channel.send(embed)
}
})


// show avatar users - and show avatar server
client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "background server" || prefix + "bgd server")) {
    let doma = new Discord.RichEmbed()
    .setColor("#FFB33F")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "background")) {
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
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Isaac`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Isaac ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`w!help`)
});


client.login(process.env.TOKEN);
