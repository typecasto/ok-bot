const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require ('./config.json');
// When ON log to console.
client.on('ready', () => 
    {
    console.log('---Alright, we\'re up and running!---');

    });

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    console.log(message.content);
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowercase ();

    switch (command)
    {
            // console.log(message.content);
            case status:

                message.channel.send(`i'm doin ok.`);
            
            break;

            case members:

                message.channel.send(`${message.guild.name} has (${message.guild.memberCount}) members`);
            
            break;

            case whoami:

                message.channel.send(`You are ${message.author.username}\nAnd your ID is ${message.author.id}`);
            
            break;

            case kill:

                if (message.author.id === `134509976956829697`)
                { // @thecakeisalie25#0517 at current time of writing
                    message.channel.send(`k lol bye`);
                    return client.destroy();
                }
                else {message.channel.send(`fuck off`);}
            
            break;

            case whois:
        
                if(!message.mentions.users.size)
                {
                    message.channel.send(`Nope, try again!`);
                }
                else if(message.mentions.users.size === 1)
                {
                    message.channel.send(`They are ${message.mentions.users.first().username}\nAnd their ID is ${message.mentions.users.first().id}`);
                }
                else{message.channel.send(`nah :b:`);}
            
            break;

            case wip-id:
        
                if(message.author.id === `134509976956829697`)
                {
                    message.channel.send(`you are the boi`);
                }
                else
                {
                    message.channel.send(`you are NOT the boi`);
                }
            
            break;

            case args:
        
                if (!args.length)
                {
                    return message.channel.send(`dude you gotta give me SOMETHING to work with here.`);
                }
                else if (args[0] === 'ok')
                {
                    return message.channel.send(`ok`);
                }
                message.channel.send(`uwu u thot: ${args[0]}`);
            
            break;

            case isthot:
        
                if(args[0] === '@everyone' || args[0] === '@here')
                {
                    return message.channel.send(`${message.author.username} tried to ping everyone, and is hereby declared a MEGATHOT!`);
                }
                else if(!message.mentions.users.size)
                {
                    return message.channel.send(`yep, nobody is a thot. good thinking. (mention a user, idiot)`);
                }
                const taggedUser = message.mentions.users.first();
        
                message.channel.send(`${taggedUser} is a thot!`);
            
            break;

            case avatar:
        
                if (!message.mentions.users.size) 
                {
                    return message.channel.send(`lookin like a thot as always: ${message.author.displayAvatarURL}`);
                }
                const avatarList = message.mentions.users.map(user => {
                    return `${user.username}'s avatar: ${user.displayAvatarURL}`;
                });
                message.channel.send(avatarList);
            
            break;

}} 

client.login(token);