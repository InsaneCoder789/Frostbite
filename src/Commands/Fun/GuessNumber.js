const Command = require('../../Structures/Command');

module.exports = class Guess extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Guess',
			aliases: ['guess', 'Guess'],
			description: 'You Have To Guess The Number',
			category: 'Fun'
		});
	}

	async run(message) {
		const random = Math.floor(Math.random() * 10) + 1;
		console.log(random);
		const filter = mi => mi.author.id === message.author.id;
		let attempts = 3;
		let hints = Math.floor(attempts / 2);

		// eslint-disable-next-line max-len
		const ti = await message.reply(`You've Got ${attempts} Attempt${attempts === 1 ? '' : 's'} To Try And Guess My Random Number Between **1 and 10**. Type Your Answer In The Chat As A Valid Number.\nYou Can Type \`end\` At Anytime To Stop, Or Type \`hint\` To Know How High Or Low Your Last Number Was.`);


		const guess = async (lastnumber) => {
			let msg = '';
			const collector = ti.channel.createMessageCollector(filter, { time: 30000 });
			// eslint-disable-next-line consistent-return
			collector.on('collect', (propmt) => {
				console.log('collecting');
				if (propmt.content.toLowerCase() === 'end') {
					collector.stop();
					return message.channel.send('You Ended The Game :(');
				}
				if (propmt.content.toLowerCase() === 'hint') {
					collector.stop();
					if (!lastnumber) {
						message.channel.send(`You've Gotta Actually Take A Guess First Before You Get A Hint lol`);
					} else if (hints < 1) {
						message.channel.send(`You Don't Have Any Hints Left lol`);
					} else {
						// eslint-disable-next-line max-len
						message.channel.send(`Your Last Number (**${lastnumber}**) Was Too ${random - lastnumber > 0 ? 'Low' : 'High'}\nYou've Got \`${attempts}\` Attempt${attempts === 1 ? '' : 's'} Left And \`${hints -= 1}\` Hint${hints === 1 ? '' : 's'} Left....`);
					}
					return guess(lastnumber);
				}
				const picked = Number(propmt.content);

				if (picked === random) {
					collector.stop();
					return message.channel.send(`Nicee, You Got The Number Right. I Was Thinking Of **${random}**`);
				}
				if (attempts <= 1) {
					collector.stop();
					return message.channel.send(`Oof, You Ran Out Of Attempts To Guess The Number. I Was Thinking Of **${random}**`);
				}

				if (!picked || !Number.isInteger(picked)) {
					collector.stop();
					msg = `SMH It's Gotta Be A **Valid** Number Between \`1\` And \`10\`\n`;
				} else if (picked > 10 || picked < 1) {
					collector.stop();
					msg = `Listen Mate, It's Gotta Be A Number Between \`1\` And \`10\`. No higher, No Lower\n`;
				} else {
					collector.stop();
					msg = `not this time, `;
				}
				message.channel.send(`${msg}\`${attempts -= 1}\` Attempt${attempts === 1 ? '' : 's'} Left And \`${hints}\` Hint${hints === 1 ? '' : 's'} Feft.`);

				guess(picked);
			});

			// eslint-disable-next-line id-length
			collector.on('end', async (_, reason) => {
				if (['time'].includes(reason)) {
					message.channel.send(`You Haven't Replied... Guess I'm Stopping The Game, Whatever`);
				}
			});
		};

		await guess();
	}

};
