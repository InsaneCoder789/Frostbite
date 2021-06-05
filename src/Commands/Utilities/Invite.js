// eslint-disable-next-line semi
const Discord = require('discord.js')
const MessageEmbed = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Invite',
			aliases: ['Inv', 'INV', 'invite'],
			description: 'Invite Link of The Bot',
			category: 'Utilities',
			userPerms: ['SEND_MESSAGES', 'MANAGE_CHANNELS'],
			botPerms: ['SEND_MESSAGES', 'MANAGE_CHANNELS'],
			guildOnly: true

		});
	}
	
   
	async run(message) {
		let embed = new Discord.MessageEmbed()
 .setTitle("**Invite Frostbite to your server**")
 .setDescription("[Invite Link](https://discord.com/api/oauth2/authorize?client_id=834293521430085632&permissions=8&scope=bot)")
 .setColor("#277ECD")
 .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
 message.channel.send(embed)
 message.author.send('Thank You For Inviting Me To Your Server ')
	}
};


