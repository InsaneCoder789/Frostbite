// eslint-disable-next-line no-unused-vars
const { Client, Message, MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Emojify',
			description: 'Makes The Text You Sent Into Emojis',
			category: 'Fun',
			aliases: ['emojify', 'Emojify'],
			usage: '<Text>',
			args: true
			/**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
		});
	}

	// eslint-disable-next-line no-unused-vars
	// eslint-disable-next-line consistent-return
	async run(message, args) {
		if (!args.length) return message.channel.send('Please specify some text to emojify!');

		const specialCodes = {
			0: ':zero:',
			1: ':one:',
			2: ':two:',
			3: ':three:',
			4: ':four:',
			5: ':five:',
			6: ':six:',
			7: ':seven:',
			8: ':eight:',
			9: ':nine:',
			'#': ':hash:',
			'*': ':asterisk:',
			'?': ':grey_question:',
			'!': ':grey_exclamation:',
			'': ' '
		};

		const text = args.join(' ').toLowerCase().split('').map(Letter => {
			if (/[a-z]/g.test(Letter)) {
				return `:regional_indicator_${Letter}:`;
			} else if (specialCodes[Letter]) {
				return `${specialCodes[Letter]}`;
			}
			return Letter;
		}).join('');

		message.channel.send(text);
	}

};
