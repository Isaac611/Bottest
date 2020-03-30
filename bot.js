const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const config = require("./config");
const prefix = config.prefix;
var language = "en" 
var avatar = "activate"
  
  
  // help 
  client.on("message", message => {
    if (message.content === "w!help") { 
    	message.react('✅')
       .then(() => message.react('✅')) 
     const embed = new Discord.RichEmbed() 
         .setColor("#FFB33F")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`Help message`)
   message.author.sendEmbed(embed)
   
   }
   }); 
  
  
  // setlang ar
  client.on("message", message => {
    if (message.content === prefix + "setlang ar") {
     
       language = "ar" 
       message.channel.send("**تم تغيير اللغة إلى العربية ✅**")     
   }
   }); 
   
     // setlang en
  client.on("message", message => {
    if (message.content === prefix + "setlang en") {
     
       language = "en" 
       message.channel.send("**✅ The language has been changed to English**")     
   }
   }); 
   
   
   // colse avatar
   client.on("message", message => {
    if (message.content === prefix + "close avatar" && language == "en") {
     
       avatar = "colse" 
       message.channel.send("**✅ The order was successfully cancelled.**")     
       
            
   }
   }); 
   
   
   client.on("message", message => {
    if (message.content === prefix + "close avatar" && language == "ar") {
     
       avatar = "colse" 
       message.channel.send("**تم إيقاف الأمر بنجاح ✅**")     
       
            
   }
   }); 
   
   
   
   
   // Activate order 
   client.on("message", message => {
    if (message.content === prefix + "activate avatar" && language == "en") {
     
       avatar = "activate" 
       message.channel.send("**✅ It's successfully activated.**")     
       

   }
   }); 
   
   client.on("message", message => {
    if (message.content === prefix + "activate avatar" && language == "ar") {
     
       avatar = "activate" 
       message.channel.send("**تم تفعيله بنجاح ✅**")     
       

   }
   }); 
   
   
   // mute
   client.commands = new Discord.Collection();

client.muted = require('./muted.json');

fs.readdir('./cmds/', (err, files) => {
    if (err) console.error(err);
    const jsFiles = files.filter(f => f.split('.').pop() === 'js');
    if (jsFiles.length <= 0) return console.log('No command files found!');
    jsFiles.forEach((f, i) => {
        const props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        client.commands.set(props.help.name, props);
    });
})

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);

    // Every 5 seconds check the "muted.json" file to see when a users mute is up
    client.setInterval(() => {
        for (const i in client.muted) {
            const time = client.muted[i].time;
            const guildId = client.muted[i].guild;
            const guild = client.guilds.get(guildId);
            const member = guild.members.get(i);
            const mutedRole = guild.roles.find(mR => mR.name === 'Muted');
            if (!mutedRole) continue;

            if (Date.now() > time) {
                member.removeRole(mutedRole);
                delete client.muted[i];
                fs.writeFile('./muted.json', JSON.stringify(client.muted), err => {
                    if(err) throw err;
                });
            }
        }
    }, 5000);
});

client.on('message', async message => {
    // Validate that the user can only message the bot within a channel on the server
    if (message.author.client) return;
    if (message.channel.type === 'dm') return;

    const messageArray = message.content.split(' ');
    const command = messageArray[0];
    const args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    const cmd = client.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(client, message, args);
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
  if(message.content.startsWith(prefix + "background server") && language == "en" && avatar == "activate" || message.content.startsWith(prefix + "bgd server") && language == "en" && avatar == "activate") {
    let doma = new Discord.RichEmbed()
    .setColor("#FFB33F")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "background") && language == "en" && avatar == "activate" || message.content.startsWith(prefix + "bgd") && language == "en" && avatar == "activate") {
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
  if(message.content.startsWith(prefix + "خلفية السيرفر") && language == "ar" && avatar == "activate" || message.content.startsWith(prefix + "خلفيه السيرفر") && language == "ar" && avatar == "activate") {
    let doma = new Discord.RichEmbed()
    .setColor("#FFB33F")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "خلفية") && language == "ar" && avatar == "activate" || message.content.startsWith(prefix + "خلفيه") && language == "ar" && avatar == "activate") {
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
