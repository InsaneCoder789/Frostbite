const Discord = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: '8Ball',
			aliases: ['8ball', '8Ball'],
			description: 'A Command Decides Your Fate With An 8-Ball, Obviously 8-Balls Aren\'t Real You Idiot.',
			category: 'Fun',
			usage: '<Your Question>',
			args: true
		});
	}

	async run(message, args) {
		if (!args.slice(0).join(' ')) {
			const ErrorEmbed = new Discord.MessageEmbed()
				.setTitle('Youch! I bumped into an error!')
				.setColor('#FF0000')
				.addField('Error', `\`\`Provide a question for the 8-ball.\`\``)
				.setTimestamp();

			return message.channel.send(ErrorEmbed);
		}

		const RatingArray = ['🟢', '🟡', '🔴'];

		// eslint-disable-next-line no-inline-comments
		const Choices = [ // Customizable array of messages
			// Good Fate
			{ Rating: 0, Message: 'It is certain.' },
			{ Rating: 0, Message: 'It is decidedly so.' },
			{ Rating: 0, Message: 'Without a doubt.' },
			{ Rating: 0, Message: 'Yes - definitely.' },
			{ Rating: 0, Message: 'You may rely on it.' },
			{ Rating: 0, Message: 'As I see it, yes.' },
			{ Rating: 0, Message: 'Most likely.' },
			{ Rating: 0, Message: 'Outlook good.' },
			{ Rating: 0, Message: 'Yes.' },
			{ Rating: 0, Message: 'Signs point to: Yes.' },

			// Not so Good Fate
			{ Rating: 1, Message: 'Reply hazy, try again later.' },
			{ Rating: 1, Message: 'Ask again later.' },
			{ Rating: 1, Message: 'Better not tell you now.' },
			{ Rating: 1, Message: 'Cannot predict now.' },
			{ Rating: 1, Message: 'Concentrate and ask again.' },

			// Bad Fate
			{ Rating: 2, Message: "Don't count on it." },
			{ Rating: 2, Message: 'My sources say no.' },
			{ Rating: 2, Message: 'My reply is no.' },
			{ Rating: 2, Message: 'Outlook not so good.' },
			{ Rating: 2, Message: 'Very doubtful.' }
		];

		const Choice = Choices[Math.floor(Math.random() * Choices.length)];

		const Embed = new Discord.MessageEmbed()
			.setTitle('The 8-Ball has spoken!')
			.setColor('#FF0000')
			.setDescription(`\`\`${args.slice(0).join(' ')}\`\``)
			.addField('Answer', `\`\`${Choice.Message}\`\``)
			.addField('Rating', RatingArray[Choice.Rating])
			.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));

		return message.channel.send(Embed);
	}

};
