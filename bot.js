const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const config = require("./config");
const prefix = config.prefix;
var language = "en" 
var avatar = "activate" 
var ban = "activate" 
var kick = "activate" 
var say = "activate" 
var banm = "Management" 
var kickm = "Management" 
var saym = "Management" 
var clearm = "Management" 
var links = "activate" 
var clear = "activate" 

  
  
  // help 
  client.on("message", message => {
    if (message.content === "w!help") { 
    	
     message.react('✅')
       .then(() => msg.react('✅')) 
message.author.sendMessage(` 
** Technical support server You can ask your questions and learn bot orders || خادم الدعم الفني يمكنك طرح أسئلتك وتعلم أوامر الروبوت **
discord.gg/7CK89HT
`)
   
   }
   }); 
   
  
  
  // setlang ar
  client.on("message", message => {
    if (message.content === prefix + "setlang ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       language = "ar" 
       message.channel.send("**تم تغيير اللغة إلى العربية ✅**")     
   }
   }); 
   
     // setlang en
  client.on("message", message => {
    if (message.content === prefix + "setlang en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       language = "en" 
       message.channel.send("**✅ The language has been changed to English**")     
   }
   }); 
   
   
   // colse bgd
   client.on("message", message => {
    if (message.content === prefix + "close bgd" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       avatar = "colse" 
       message.channel.send("**✅ The order was successfully cancelled.**")     
       
            
   }
   }); 
   
   
   client.on("message", message => {
    if (message.content === prefix + "close bgd" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       avatar = "colse" 
       message.channel.send("**تم إيقاف الأمر بنجاح ✅**")     
       
            
   }
   }); 
   
   
      // colse links
   client.on("message", message => {
    if (message.content === prefix + "close links" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       links = "colse" 
       message.channel.send("**✅ The order was successfully cancelled.**")     
       
            
   }
   }); 
   
   
   client.on("message", message => {
    if (message.content === prefix + "close links" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       links = "colse" 
       message.channel.send("**تم إيقاف الأمر بنجاح ✅**")     
       
            
   }
   });  
   
   
   // close all order en
   client.on("message", message => {
    if (message.content === prefix + "close all" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       avatar = "colse" 
       say = "colse" 
       ban = "colse" 
       kick = "colse" 
       kick = "colse"  
       links = "close" 
       clear = "close"
       message.channel.send("**✅ All orders are closed**")     
       
            
   }
   }); 
   
    // close all order ar
   client.on("message", message => {
    if (message.content === prefix + "close all" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       avatar = "colse" 
       say = "colse" 
       ban = "colse" 
       kick = "colse" 
       kick = "colse" 
       links = "close"
       message.channel.send("**تم إغلاق كل الأوامر ✅**")     
       
            
   }
   }); 
   
   
   // colse kick
   client.on("message", message => {
    if (message.content === prefix + "close kick" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       kick = "colse" 
       message.channel.send("**✅ The command was closed.**")     
       
            
   }
   }); 
   
   
   client.on("message", message => {
    if (message.content === prefix + "close kick" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       kick = "colse" 
       message.channel.send("**تم إيقاف الأمر بنجاح ✅**")     
       
            
   }
   });  
   
   // colse clear 
   client.on("message", message => {
    if (message.content === prefix + "close clear" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       clear = "colse" 
       message.channel.send("**✅ The command was closed.**")     
       
            
   }
   }); 
   
   
   client.on("message", message => {
    if (message.content === prefix + "close clear" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       clear = "colse" 
       message.channel.send("**تم إيقاف الأمر بنجاح ✅**")     
       
            
   }
   });  
   
   // colse ban
   client.on("message", message => {
    if (message.content === prefix + "close ban" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       ban = "colse" 
       message.channel.send("**✅ The command was closed.**")     
       
            
   }
   }); 
   
   
   client.on("message", message => {
    if (message.content === prefix + "close ban" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       ban = "colse" 
       message.channel.send("**تم إيقاف الأمر بنجاح ✅**")     
       
            
   }
   }); 
   
   
   // colse say en
   client.on("message", message => {
    if (message.content === prefix + "close say" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       say = "colse" 
       message.channel.send("**✅ The command was closed.**")     
       
            
   }
   });  
   
   
   // close say ar
   client.on("message", message => {
    if (message.content === prefix + "close say" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       say = "colse" 
       message.channel.send("**تم إيقاف الأمر بنجاح ✅**")     
       
            
   }
   }); 
   
   
   // Activate all order en
   client.on("message", message => {
    if (message.content === prefix + "activate all" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       avatar = "activate" 
       say = "activate" 
       ban = "activate" 
       kick = "activate" 
       kick = "activate" 
       links = "activate"
       message.channel.send("**✅ All orders are activated**")     
       

   }
   }); 
   
      // Activate all order ar
   client.on("message", message => {
    if (message.content === prefix + "activate all" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       avatar = "activate" 
       say = "activate" 
       ban = "activate" 
       kick = "activate" 
       kick = "activate" 
       links = "activate" 
       clear = "activate"
       message.channel.send("**تم تفعيل كل الأوامر ✅**")     
       

   }
   }); 
   
   
   // bgd order 
   client.on("message", message => {
    if (message.content === prefix + "activate bgd" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       avatar = "activate" 
       message.channel.send("**✅ It's successfully activated.**")     
       

   }
   }); 
   
   
   client.on("message", message => {
    if (message.content === prefix + "activate bgd" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       avatar = "activate" 
       message.channel.send("**تم تفعيله بنجاح ✅**")     
       

   }
   }); 
   
   
   // activate links en
   client.on("message", message => {
    if (message.content === prefix + "activate links" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       links = "activate" 
       message.channel.send("**✅ It's successfully activated.**")     
       

   }
   });   
   
   // activate links ar
   client.on("message", message => {
    if (message.content === prefix + "activate links" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       links = "activate" 
       message.channel.send("**تم تفعيله بنجاح ✅**")     
       

   }
   });  
   
   
      // activate clear en
   client.on("message", message => {
    if (message.content === prefix + "activate clear" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       clear = "activate" 
       message.channel.send("**✅ It's successfully activated.**")     
       

   }
   });   
   
   // activate clear ar
   client.on("message", message => {
    if (message.content === prefix + "activate clear" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       clear = "activate" 
       message.channel.send("**تم تفعيله بنجاح ✅**")     
       

   }
   });  
   
   
   // activate kick
   client.on("message", message => {
    if (message.content === prefix + "activate kick" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       kick = "activate" 
       message.channel.send("**✅ It's successfully activated.**")     
       

   }
   });  
   
   client.on("message", message => {
    if (message.content === prefix + "activate kick" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       kick = "activate" 
       message.channel.send("**تم تفعيله بنجاح ✅**")     
       

   }
   });  
   
   
   // activate ban
   client.on("message", message => {
    if (message.content === prefix + "activate ban" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       ban = "activate" 
       message.channel.send("**✅ It's successfully activated.**")     
       

   }
   });  
   
   client.on("message", message => {
    if (message.content === prefix + "activate ban" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       ban = "activate" 
       message.channel.send("**تم تفعيله بنجاح ✅**")     
       

   }
   });  
   
   // activate say en
   client.on("message", message => {
    if (message.content === prefix + "activate say" && language == "en" && message.member.hasPermission('ADMINISTRATOR')) {
     
       say = "activate" 
       message.channel.send("**✅ It's successfully activated.**")     
       

   }
   });   
   
   // activate say ar
   client.on("message", message => {
    if (message.content === prefix + "activate say" && language == "ar" && message.member.hasPermission('ADMINISTRATOR')) {
     
       say = "activate" 
       message.channel.send("**تم تفعيله بنجاح ✅**")     
       

   }
   });  
   
   // kick en
   client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "kick"
  if (message.content.startsWith(prefix + 'kick') && language == "en" && kick == "activate") { 
  	  	if (message.member.roles.some(role => role.name === kickm) || message.member.hasPermission('KICK_MEMBERS')) {
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
  	  	if (message.member.roles.some(role => role.name === kickm) || message.member.hasPermission('KICK_MEMBERS')) {
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
  	 	if (message.member.roles.some(role => role.name === banm) || message.member.hasPermission('BAN_MEMBERS')) {
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
  	if (message.member.roles.some(role => role.name === banm || message.member.hasPermission('BAN_MEMBERS'))) {
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

  if (command == "say") {//. && say == "activate" && message.guild.member(message.author.id).roles.find(role => role.name == saym) || ) {
  if (!message.member.hasPermission('ADMINISTRATOR')) return;
  if (say === "close") return;
    message.channel.sendMessage(args.join("  "));
    message.delete(); 
  
  }
});  


// setorder  
// setsay en
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.member.hasPermission('ADMINISTRATOR'))  {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "setsay" && language == "en") {


    saym = args.join("  ")
    message.channel.sendMessage("✅ done successfully");
  }} 
});  


// setsay ar
   client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.member.hasPermission('ADMINISTRATOR')) {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "setsay" && language == "ar") {
      

    saym = args.join("  ")
    message.channel.sendMessage("تم بنجاح ✅");
  }} 
});  
   
   
   // set kick en
   client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.member.hasPermission('ADMINISTRATOR'))  {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "setkick" && language == "en") {


    kickm = args.join("  ")
    message.channel.sendMessage("✅ done successfully");
  }} 
});  


// set kick ar 
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.member.hasPermission('ADMINISTRATOR')) {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "setkick" && language == "ar") {
      

    kickm = args.join("  ")
    message.channel.sendMessage("تم بنجاح ✅");
  }} 
});   


   // set clear en
   client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.member.hasPermission('ADMINISTRATOR'))  {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "setclear" && language == "en") {


    clearm = args.join("  ")
    message.channel.sendMessage("✅ done successfully");
  }} 
});   


// set clear ar 
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.member.hasPermission('ADMINISTRATOR')) {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "setclear" && language == "ar") {
      

    clearm = args.join("  ")
    message.channel.sendMessage("تم بنجاح ✅");
  }} 
});   


// set ban en 
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.member.hasPermission('ADMINISTRATOR'))  {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "setban" && language == "en") {


    banm = args.join("  ")
    message.channel.sendMessage("✅ done successfully");
  }} 
});  

// set ban ar
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.member.hasPermission('ADMINISTRATOR')) {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "setban" && language == "ar") {
      

    banm = args.join("  ")
    message.channel.sendMessage("تم بنجاح ✅");
  }} 
});  


// delete links 
client.on('message', (message) => { //whenever a message is sent
  if (message.content.includes('discord.gg/'||'discordapp.com/invite/') && links == "activate") { //if it contains an invite link
    message.delete() //delete the message
   //   .then(message.channel.send('Link Deleted:\n**Invite links are not permitted on this server**'))
  }
}) 


// clear message ar
client.on('message', function(message) {
    if(!message.channel.guild) return;
    if (message.author.bot) return;  
    if (clear === "close") return;
    if (language === "en") return;
    if (message.author.id === client.user.id) return;
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split(' ');
    switch (args[0].toLocaleLowerCase()) {
    case "clear" :
    message.delete()
    if(!message.channel.guild) return
    if (message.member.roles.some(role => role.name === clearm) || message.member.hasPermission('MANAGE_MESSAGES')){ if (!args[1]) {
    message.channel.fetchMessages()
    .then(messages => {
    message.channel.bulkDelete(messages);
    var messagesDeleted = messages.array().length;
    message.channel.sendMessage(' '+ "**```fix\n" + messagesDeleted + " " +  ': عدد الرسائل التي تم مسحها' + "```**").then(m => m.delete(5000));
    })
    } else {
    let messagecount = parseInt(args[1]);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    message.channel.sendMessage(' '+ "**```fix\n" + args[1] + " " +  ': عدد الرسائل التي تم مسحها' + "```**").then(m => m.delete(5000));
    message.delete(60000);
    }
    } else {
    
    }
    }
    }); 
    
    
    // clear message en
client.on('message', function(message) {
    if(!message.channel.guild) return;
    if (message.author.bot) return; 
    if (language === "ar") return; 
    if (clear === "close") return;
    if (message.author.id === client.user.id) return;
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split(' ');
    switch (args[0].toLocaleLowerCase()) {
    case "clear" :
    message.delete()
    if(!message.channel.guild) return
    if(message.member.roles.some(role => role.name === clearm) || message.member.hasPermission('MANAGE_MESSAGES')){ if (!args[1]) {
    message.channel.fetchMessages()
    .then(messages => {
    message.channel.bulkDelete(messages);
    var messagesDeleted = messages.array().length;
    message.channel.sendMessage(' '+ "**```fix\n" + messagesDeleted + " " +  ': Number of messages deleted' + "```**").then(m => m.delete(5000));
    })
    } else {
    let messagecount = parseInt(args[1]);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    message.channel.sendMessage(' '+ "**```fix\n" + args[1] + " " +  ': Number of messages deleted' + "```**").then(m => m.delete(5000));
    message.delete(60000);
    }
    } else {
    
    }
    }
    });  
    
    
    // ping 
    client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
});


// close and open chat ar
client.on("message", message => {
  if (message.content === prefix + "close") {
    if (!message.channel.guild)
      return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel.send("تم إغلاق هذة القناة 🔒");
      });
  }
  if (message.content === prefix + "open") {
    if (!message.channel.guild)
      return;

    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.channel.send("تم فتح هذة القناة 🔓");
      });
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
