const { DiscordAPIError } = require('discord.js');
const Command = require('../../Structures/Command');
const Discord = require('discord.js')
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Ping',
			aliases: ['Ping', 'ping', 'pong'],
			description: 'Shows The Ping Of The Bot',
			category: 'Utilities'
		});
	}

	async run(message) {
		let embed = new Discord.MessageEmbed()
 .setTitle("🏓 Ping!")
 .setDescription(`**${this.client.ws.ping}ms** Latency!`)
 .setColor("BLUE")
 .setFooter(
 `Requested by ${message.author.username}`,
 message.author.displayAvatarURL()
 );
 message.channel.send(embed);
 }
};
