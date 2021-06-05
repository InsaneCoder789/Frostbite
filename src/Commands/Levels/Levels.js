const { DiscordAPIError } = require('discord.js');
const Command = require('../../Structures/Command');
const Discord = require('discord.js')
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Levels',
            aliases: ['lvl'],
			description: 'Shows The Level-Xp of the User',
			category: 'Levels',
            Usage: 'setwelcome <#channel>'
            
		});
	}

	async run(message) {}
}