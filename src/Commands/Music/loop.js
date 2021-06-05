const { DiscordAPIError } = require('discord.js');
const Command = require('../../Structures/Command');
const Discord = require('discord.js')
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Loop',
            aliases: ['loop'],
			description: 'Play A Song in Loop',
			category: 'Music',
            Usage: 'setwelcome <#channel>'
            
		});
	}

	async run(message) {}
}