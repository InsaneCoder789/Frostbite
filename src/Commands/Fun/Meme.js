const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class extends Command {


	constructor(...args) {
		super(...args, {
			name: 'Meme',
			aliases: ['Meme', 'meme'],
			description: 'Provides You A Nice Dank Meme (I Guess...)',
			category: 'Fun'
		});
	}

	async run(message) {
		const res = await fetch(
			`https://www.reddit.com/r/memes.json?sort=hot`
		);
		const { data } = await res.json();

		const safe = message.channel.nsfw ?
			data.children :
			data.children.filter((post) => !post.data.over_18);
		if (!safe.length) {
			return message.channel.send(
				new MessageEmbed()
					.setColor('#FF0000')
					.setDescription(`Couldn't get the post.`)
			);
		}

		const post = safe[Math.floor(Math.random() * safe.length)];

		return message.channel.send(
			new MessageEmbed()
				.setColor('#544B94')
				.setAuthor(
					`${post.data.title}`,
					message.author.displayAvatarURL({ dynamic: true }),
					`https://reddit.com${post.data.permalink}`
				)
				.setImage(post.data.url)
				.setFooter(`👍 ${post.data.ups} | 💬 ${post.data.num_comments}`)
		);
	}

};
