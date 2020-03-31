const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const config = require("./config");
const prefix = config.prefix;
var language = "en" 
var avatar = "activate" 
var ban = "activate" 
var kick = "activate" 
var ban = "activate" 
var banm = "Management" 
var kickm = "Management" 
var saym = "Management"
  
  
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
   
   
   // colse kick
   client.on("message", message => {
    if (message.content === prefix + "close kick" && language == "en") {
     
       kick = "colse" 
       message.channel.send("**✅ The order was successfully cancelled.**")     
       
            
   }
   }); 
   
   
   client.on("message", message => {
    if (message.content === prefix + "close kick" && language == "ar") {
     
       kick = "colse" 
       message.channel.send("**تم إيقاف الأمر بنجاح ✅**")     
       
            
   }
   });  
   
   // colse ban
   client.on("message", message => {
    if (message.content === prefix + "close ban" && language == "en") {
     
       ban = "colse" 
       message.channel.send("**✅ The order was successfully cancelled.**")     
       
            
   }
   }); 
   
   
   client.on("message", message => {
    if (message.content === prefix + "close ban" && language == "ar") {
     
       ban = "colse" 
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
   
   
   // activate kick
   client.on("message", message => {
    if (message.content === prefix + "activate kick" && language == "en") {
     
       kick = "activate" 
       message.channel.send("**✅ It's successfully activated.**")     
       

   }
   });  
   
   client.on("message", message => {
    if (message.content === prefix + "activate kick" && language == "ar") {
     
       kick = "activate" 
       message.channel.send("**تم تفعيله بنجاح ✅**")     
       

   }
   });  
   
   
   // activate ban
   client.on("message", message => {
    if (message.content === prefix + "activate ban" && language == "en") {
     
       ban = "activate" 
       message.channel.send("**✅ It's successfully activated.**")     
       

   }
   });  
   
   client.on("message", message => {
    if (message.content === prefix + "activate ban" && language == "ar") {
     
       ban = "activate" 
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

   
   // kick en
   client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "kick"
  if (message.content.startsWith(prefix + 'kick') && language == "en" && kick == "activate") { 
  	  	if (message.member.roles.some(role => role.name === kickm)) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.channel.send(`** ✅ The member was kicked ${user.tag} :crossed_swords: **`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('** The member has not been kicked :rolling_eyes: **');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
       // message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.channel.send("**:thinking: You didn't mention the user to kick!**");
    }
  }
}});


// kick ar
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "kick"
  if (message.content.startsWith(prefix + 'طرد') && language == "ar" && kick == "activate") { 
  	  	if (message.member.roles.some(role => role.name === kickm)) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.channel.send(`** ✅ تم ركل العضو بنجاح ${user.tag} :crossed_swords: **`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('** لم يتم ركل العضو :rolling_eyes: **');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
       // message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.channel.send("**:thinking: لم تقم بذكر العضو أو منشنته**");
    }
  }
}});
   
   
   // ban en
   client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return; 

  // If the message content starts with "kick"
  if (message.content.startsWith(prefix + 'ban') && language == "en" && ban == "activate") { 
  	 	if (message.member.roles.some(role => role.name === banm)) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .ban('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.channel.send(`** ✅ The member was banned ${user.tag} :airplane: **`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('** The member has not been banned :rolling_eyes: **');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
       // message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.channel.send("**:thinking: You didn't mention the user to ban!**");
    }
  }
}}); 


   // ban ar
   client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return; 

  // If the message content starts with "kick"
  if (message.content.startsWith(prefix + 'حظر') && language == "ar" && ban == "activate") { 
  	if (message.member.roles.some(role => role.name === banm)) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .ban('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.channel.send(`** ✅ تم حظر العضو بنجاح ${user.tag} :airplane: **`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('** لم يتم حظر العضو  :rolling_eyes: **');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
       // message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.channel.send("**:thinking: لم تقم بذكر العضو أو منشنته**");
    }
  }
}}); 


// say
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if(!message.guild.member(message.author.id).roles.find(role => role.name == saym))
      return;

    message.channel.sendMessage(args.join("  "));
    message.delete();
  }
});  


// setorder
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "setsay") {
    if(!message.guild.member(message.author.id).roles.find(role => role.name == banm))
      return;

    say = args.join("  ")
    message.channel.sendMessage("✅It's been a successful.");
    
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
// .setTitle("Avatar Link")
.setURL(`${mention.avatarURL}`)
.setImage(`${mention.avatarURL}`)
// .setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
    message.channel.send(embed)
}
}) 
client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "background server") && language == "en" && avatar == "activate" || message.content.startsWith(prefix + "bgd server") && language == "en" && avatar == "activate") {
    let doma = new Discord.RichEmbed()
    .setColor("#FFB33F")
  //  .setAuthor(message.guild.name, message.guild.iconURL)
   // .setTitle("Avatar Link")
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
  // .setAuthor(`${avt.tag}`, avt.avatarURL)
  // .setTitle("Avatar Link")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  // .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
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
// .setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
//.setTitle("Avatar Link")
.setURL(`${mention.avatarURL}`)
.setImage(`${mention.avatarURL}`)
 //.setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
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
    // .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
 //    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "خلفية") && language == "ar" && avatar == "activate" || message.content.startsWith(prefix + "خلفيه") && language == "ar" && avatar == "activate") {
    let args = message.content.split(" ")[1]
var avt = args || message.author.id;    
    client.fetchUser(avt).then(user => {
     avt = user;
  let embed = new Discord.RichEmbed() 
  .setColor("#FFB33F")
 // .setAuthor(`${avt.tag}`, avt.avatarURL)
//  .setTitle("")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  //  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
    })
  }
}) 

    
// set game for bot
client.on('ready', () => {
client.user.setGame(`w!help`)
});


client.login(process.env.TOKEN);
