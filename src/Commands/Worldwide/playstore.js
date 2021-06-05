const Discord = require('discord.js');
const PS = require('google-play-scraper')
const Command = require('../../Structures/Command');
const MessageEmbed = require ('discord.js')
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Playstore',
			aliases: ['playstore', 'ps'],
      category: 'Worldwide',
			description: 'Helps You to Find Any Game In Playstore',
			usage: '<mention>',
			args: true
		});
	}

	async run(message , args) {
        {
            let MSG = message.content.split(" ")
            let Query = MSG.slice(1)
            if(!Query.length)
            {
              message.reply(`\`\`\`yaml\nInvalid Arguments. Usage : f!playstore <game>\n\`\`\``)
            }
            else if(Query)
            {
              PS.search({
                term: Query,
                num: 1
              }).then(pl => 
                {
                  let store;
                  store = JSON.parse(JSON.stringify(pl[0]))
        
                  let PLS = new Discord.MessageEmbed()
                  .setURL(store.url)
                  .setTitle(store.title)
                  .setThumbnail(store.icon)
                  .addField(`Developer`, store.developer)
                  .addField(`Description`, store.summary)
                  .addField(`Price`, store.priceText)
                  .addField(`Score`, store.scoreText)
                  .setColor('RANDOM')
                  .setTimestamp()
                  message.reply(PLS)
                })
            }
          }
        
    }
  }