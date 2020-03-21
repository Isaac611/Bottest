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
   
   
// show avatar users - and show avatar server
client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "background server") || message.content.startsWith(prefix + "bgd server") 
   || message.content.startsWith(prefix + "خلفية السيرفر") || message.content.startsWith(prefix + "خلفيه السيرفر")) {
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


// roll - نرد  
client.on('message', roll => { 
    if (roll.content === prefix + "roll")
    	msg.reply('Check Your DM :white_check_mark:')
  });   
  
  
// set game for bot
client.on('ready', () => {
client.user.setGame(`w!help`)
});


client.login(process.env.TOKEN);
