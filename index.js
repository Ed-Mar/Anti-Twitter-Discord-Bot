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

    if (message.guild.id == config.discord_server_ids[1]) {
        cursed_domains.forEach(obj => {
            if ((message.content).includes(obj.main_domain)) {

                message.delete({ timeout: 450 })
                    .then(msg => console.log(`A message containing ${obj.main_domain} from ${msg.author.username} was deleted`))
                    .catch(console.error);

                // Appertnely Discord does not allow the bot edit messages of other users

                // message.edit(`This Message was removed due containing a cursed domain`)
                //     .then(msg => console.log(`Updated the content of a message to ${msg.content}`))
                //     .catch(console.error);

                if (message.author == config.problem_users[0]) {

                    message.channel.send(`Refrain from posting anything from that domain ${message.author}`)
                        .then(f => f.react(`🖕`))
                } else
                    message.channel.send(`Refrain from posting anything from that domain ${message.author}`)
            }
        })
    }
    if ((message.content).includes("fuck you") && message.author == config.problem_users[0]) {
        message.reply('No Fuck You')
            .then(() => console.log(`${message.author.username} is out here throwing shade had to throw it back`))
            .catch(console.error);
    }
})