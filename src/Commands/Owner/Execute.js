const Command = require('../../Structures/Command');
const { exec } = require('child_process');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['exec', 'Execute', 'execute'],
			description: 'Executes Commands In The Console',
			category: 'Owner',
			ownerOnly: true,
			args: true,
			usage: '<query>'
		});
	}

	async run(message, args) {
		exec(args.join(' '), (error, stdout) => {
			const response = stdout || error;
			message.channel.send(response, { split: true, code: true });
		});
	}

};
