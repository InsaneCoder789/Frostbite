const Discord  = require('discord.js');
const Command = require('../../Structures/Command');
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Weather',
            aliases: ['Weather'],
			category: 'Worldwide',
			description: 'Shows The Weather Of A Country',
            Usage: ' <CountryName>'
            
		});
	}

	async run(message) {}
}