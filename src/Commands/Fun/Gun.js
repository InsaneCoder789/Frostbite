const Discord = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Gun',
			aliases: ['gun', 'gn'],
			description: 'A Fun Command That Turns Any Emoji Into Gangsta Emoji with A Gun!',
			category: 'Fun',
			usage: 'Add Emoji',
			args: false
		});
	}

	async run(message) {
        const lolz = message.mentions.users.first() ||message.author;
  
        try {
            const emoji =
              message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1]).url
      
              let em = new Discord.MessageEmbed()
        .setImage(`https://api.devs-hub.xyz/gun?image=${emoji}`)
        .setColor("ORANGE")
        message.channel.send(em)
          } catch (e) {
            const av = lolz.displayAvatarURL({ dynamic: true, size: 2048 })
            let em = new Discord.MessageEmbed()
        .setImage(`https://api.devs-hub.xyz/gun?image=${av}`)
        .setColor("ORANGE")
        message.channel.send(em)
          }
      
              
      
        }
      
      }
