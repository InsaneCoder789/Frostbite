const { DiscordAPIError } = require('discord.js');
const Command = require('../../Structures/Command');
const Discord = require('discord.js')
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Skip',
            aliases: ['skip'],
			description: 'Skips a Song ',
			category: 'Music',
            Usage: 'setwelcome <#channel>'
            
		});
	}

	async run(message) {}
}