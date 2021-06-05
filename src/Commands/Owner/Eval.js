const Discord = require('discord.js');
const Command = require('../../Structures/Command');
const { MessageAttachment } = require('discord.js');
const { inspect } = require('util');
// eslint-disable-next-line no-unused-vars
const { text } = require('@extreme_hero/deeptype');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['ev', 'eval'],
			category: 'Owner',
			usage: '<Code To Evaluate>',
			args: true,
			ownerOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		const msg = message;
		if (!args.length) return msg.channel.send('I Need Code To Evaluate.');
		let code = args.join(' ');
		code = code.replace(/[""]/g, '"').replace(/['']/g, "'");
		let evaled;
		try {
			const start = process.hrtime();
			evaled = eval(code);
			if (evaled instanceof Promise) {
				evaled = await evaled;
			}
			const stop = process.hrtime(start);
			const response = [
				`**Output:** \`\`\`js\n${this.clean(inspect(evaled, { depth: 0 }))}\n\`\`\``,
				`**Type:** \`\`\`ts\n${new TypeError(evaled).is}\n\`\`\``,
				`**Time Taken:** \`\`\`${(((stop[0] * 1e9) + stop[1])) / 1e6}ms \`\`\``
			];
			const res = response.join('\n');
			if (res.length < 2000) {
				await msg.channel.send(res);
			} else {
				const output = new MessageAttachment(Buffer.from(res), 'output.txt');
				await msg.channel.send(output);
			}
		} catch (err) {
			return message.channel.send(`Error: \`\`\`x1\n${this.clean(err)}\n\`\`\``);
		}
	}

	// eslint-disable-next-line no-shadow
	clean(text) {
		if (typeof text === 'string') {
			text = text
				.replace(/`/g, `\`${String.fromCharCode(8203)}`)
				.replace(/@/g, `@${String.fromCharCode(8203)}`)
				.replace(new RegExp(this.client.token, 'gi'), '****');
		}
		return text;
	}

};
