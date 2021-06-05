const { DiscordAPIError } = require('discord.js');
const Command = require('../../Structures/Command');
const Discord = require('discord.js')
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Queue',
            aliases: ['queue'],
			description: 'Adds A Music to Queue',
			category: 'Music',
            Usage: 'setwelcome <#channel>'
            
		});
	}

	async run(message) {}
}