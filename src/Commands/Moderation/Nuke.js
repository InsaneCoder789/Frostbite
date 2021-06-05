const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const Command = require('../../Structures/Command'); 

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'Nuke', 
            aliases: ['nk','Nuke','nuke'], 
            description: 'Deletes a Channel Amd Clones it ', 
            category: 'Moderation', 
            userPerms: ['ADMINISTRATOR', 'MANAGE_CHANNELS'], 
            botPerms: ['ADMINISTRATOR','MANAGE_CHANNELS'], 
            guildOnly: true
        });
    }

    async run(message) {
        let embed = new Discord.MessageEmbed()
        .setTitle("**Channel Nuked**")
        .setImage("https://media1.tenor.com/images/977d2c365023e3da01d82c9d9718a9f1/tenor.gif?itemid=16361990")
        .setColor("RANDOM")
        .setFooter(`Done by: ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.clone({position: message.channel.rawPosition }).then(ch => { ch.send(embed); })
        message.channel.delete();
        }
    }