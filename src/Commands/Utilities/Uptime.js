const Command = require('../../Structures/Command');
const ms = require('ms');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Uptime',
			aliases: ['Uptime', 'ut', 'uptime'],
			description: 'Shows The Uptime Of The Bot',
			category: 'Utilities'
		});
	}

	async run(message) {
		let embed = new Discord.MessageEmbed()
		.setTitle(" Bot Uptime ")
		.setDescription(`I've Been Online For \`${ms(this.client.uptime, { long: true })}\``)
		.setColor("BLUE")
		.setFooter("Why Do you Even Care ?!! Just Use the Bot")
		message.channel.send(embed)
}; 
}