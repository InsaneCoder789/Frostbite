const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Say',
			aliases: ['say'],
			description: 'Makes The Bot Say What ever you Want',
			category: 'Fun',
			usage: '',
			userPerms: ['SEND_MESSAGES'],
			botPerms: ['SEND_MESSAGES'],
			nsfw: false,
			guildOnly: true,
			ownerOnly: false
		});
	}

	async run(message) {
		let sentence = message.content.split(' ');
		sentence.shift();
		sentence = sentence.join(' ');
		if (!sentence) message.reply('WHAT DO YOU WANT ME TO SAY?');
		message.delete();

		if (sentence.startsWith('-')) {
			message.reply("Are you trying to execute a command thru me? Manipulating an innocent bot?? :'( . Welp you can't");
			console.log(`${message.author.username} said :- ${sentence}`);
			return;
		}

		if (sentence.includes('@everyone') || sentence.includes('@here')) {
			console.log(`${message.author.username} said :- ${sentence}`);
			message.reply("don't even think bout it");
			return;
		}

		if (sentence != '-say' || '@everyone') {
			message.channel.send(sentence);
		}
		console.log(`${message.author.username} said :- ${sentence}`);
	}

};

