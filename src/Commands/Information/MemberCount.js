const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');
const Discord = require('discord.js')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'MemberCount',
			aliases: ['mc', 'membercount'],
			description: 'Used For Checking The Number Of Members in The Guild',
			category: 'Information',
			usage: 'f!mc',
			userPerms: ['SEND_MESSAGES'],
			botPerms: ['ADMINISTRATOR'],
			args: false,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		let embed = new Discord.MessageEmbed()
 .setColor("#fca4a4")
 .setAuthor(`Member Count of ${message.guild}`, message.guild.iconURL({ dynamic: true }))
 .setTitle("Members")
 .setDescription (`Total: ${message.guild.members.cache.size}\n Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
 .setThumbnail(message.guild.iconURL({ dynamic: true }))
 .setFooter(`Requested by ${message.author.username}`)

 message.channel.send(embed)
}

	}