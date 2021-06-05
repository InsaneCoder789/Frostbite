const Command = require('../../Structures/Command');
const figlet = require('util').promisify(require('figlet'));

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Banner',
			aliases: ['Banner', 'banner'],
			description: 'Creates A Banner With The Text You Provided',
			category: 'Fun',
			usage: '<Text>',
			args: true
		});
	}

	async run(msg, ...banner) {
		return msg.channel.send(await figlet(banner), { code: true });
	}

};
