const { DiscordAPIError } = require('discord.js');
const Command = require('../../Structures/Command');
const Schema = require('../../Structures/Models/welcome-schema');
const Discord = require('discord.js')
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Welcome',
            aliases: ['setwelcome'],
			description: 'Adds A Welcome Command To The Bot',
			category: 'Welcome',
            Usage: 'setwelcome <#channel>'
            
		});
	}

	async run(message) {

	}
}