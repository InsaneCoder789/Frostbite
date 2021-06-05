const { DiscordAPIError } = require('discord.js');
const Command = require('../../Structures/Command');
const Discord = require('discord.js')
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Play',
            aliases: ['p'],
			description: 'Plays A Music',
			category: 'Music',
            Usage: 'setwelcome <#channel>'
            
		});
	}

	async run(message) {}
}