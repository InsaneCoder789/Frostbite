const MessageEmbed = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Status',
			aliases: ['st', 'status', 'Status'],
			description: 'Checks The Number of the Servers The Bot is In!',
			category: 'Utilities',
			userPerms: ['SEND_MESSAGES'],
			botPerms: ['SEND_MESSAGES'],
			guildOnly: true

		});
	}
	
   
	async run(message) {
	 message.reply (`Hi I am active and ready to help in ${this.client.guilds.cache.size} servers!`)
    }
};