const Command = require('../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Hello',
			aliases: ['Hello', 'hello', 'hai', 'hey', 'hei', 'ello', 'ayy'],
			description: 'The Bot Replies With A Hello Back At You..'
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send('Hello! 👋');
	}

};
