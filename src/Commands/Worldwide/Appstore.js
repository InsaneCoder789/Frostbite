const Discord = require('discord.js');
const Command = require('../../Structures/Command');
const fetch = require("node-fetch");
const MessageEmbed = require('discord.js');
const AppleStore = require('app-store-scraper'); 

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Appstore',
			aliases: ['appstore', 'ap'],
			description: 'Lets You Search Any App In The Appstore',
			category: 'Worldwide',
			usage: 'App Name',
			args: true
		});
	}

	async run(message , args) {
        const appname = args.join(' ') 
        if(!appname) return message.reply(`Which Apps Info You Need?`) 

        AppleStore.search({
            term: args.join(' '), 
            num: 1, 
        }).then((data) => {
            let AppInfo

            try {
                AppInfo = JSON.parse(JSON.stringify(data[0])) 
            } catch (error) {
                return message.reply(`No App With Name **${appname}** Found`)
            }

            let description = AppInfo.description.length > 200 ? `${AppInfo.description.substr(0, 200)}...` : AppInfo.description 
            let price = AppInfo.free ? 'Free' : `$${AppInfo.price}`
            let rating = AppInfo.score.toFixed(1)

            const embed = new Discord.MessageEmbed()
            .setTitle(AppInfo.title)
            .setThumbnail(AppInfo.icon)
            .setURL(AppInfo.url)
            .setTimestamp()
            .setColor('RED')
            .setDescription(description)
            .addField(`Developer:`, AppInfo.developer)
            .addField(`Price:`, price)
            .addField(`Rating:`, rating)
            .setFooter(`Requested By ${message.author.username}`)
            message.channel.send(embed)
        })
    }
}