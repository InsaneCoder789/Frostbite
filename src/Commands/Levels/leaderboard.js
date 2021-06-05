const { DiscordAPIError } = require('discord.js');
const Command = require('../../Structures/Command');
const Discord = require('discord.js')
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Leaderboards',
            aliases: ['lb'],
			description: 'Shows The Leaderboard of the Guild',
			category: 'Levels',
            Usage: 'setwelcome <#channel>'
            
		});
	}

	async run(message) {}
}