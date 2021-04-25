require('dotenv').config();
const cursed_domains = require('./cursed_domains.json');
const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const AUTH_TOKEN = process.env.AUTH_TOKEN;
client.login(AUTH_TOKEN);

client.on('ready', () => {
    let date = new Date();
    console.log(`Logged in as ${client.user.tag}! at ` + date.toLocaleTimeString());
    console.log(`--------------------------------------------------`)
})

client.on('message', message => {

    if (message.guild.id == config.discord_server_ids[1]) { // if only being used for one discord server just replace config.discord_server_ids with the guild id
        cursed_domains.forEach(obj => {
            if ((message.content).includes(obj.main_domain)) {

                message.delete({ timeout: 450 })
                    .then(msg => console.log(`A message containing ${obj.main_domain} from ${msg.author.username} was deleted`))
                    .catch(console.error);

                // Appertnely Discord does not allow the bot edit messages of other users

                // message.edit(`This Message was removed due containing a cursed domain`)
                //     .then(msg => console.log(`Updated the content of a message to ${msg.content}`))
                //     .catch(console.error);

                message.channel.send(`Refrain from posting anything from that domain ${message.author}`)
            }
        })
    }

})