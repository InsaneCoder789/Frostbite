const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'EmojiInfo',
			aliases: ['ei', 'emoji', 'emojiInfo', 'emote', 'EmojiInfo'],
			description: 'Displays Info About The Emoji You Provided',
			category: 'Information',
			usage: '<emoji>',
			guildOnly: true,
			args: true
		});
	}

	async run(message, [emote]) {
		const regex = emote.replace(/^<a?:\w+:(\d+)>$/, '$1');

		const emoji = message.guild.emojis.cache.find((emj) => emj.name === emote || emj.id === regex);
		if (!emoji) return message.channel.send('Please Provide A Valid Custom Emoji From This Guild.');

		const authorFetch = await emoji.fetchAuthor();
		const checkOrCross = (bool) => bool ? '✅' : '❌';

		const embed = new MessageEmbed()
			.setDescription(`**Emoji Information For __${emoji.name.toLowerCase()}__**`)
			.setColor('#544B94')
			.setThumbnail(emoji.url)
			.addField('General:', [
				`**- ID:** ${emoji.id}`,
				`**- URL:** [Link To Emoji](${emoji.url})`,
				`**- Author:** ${authorFetch.tag} (${authorFetch.id})`,
				`**- Time Created:** ${moment(emoji.createdTimestamp).format('LT')} ${moment(emoji.createdTimestamp).format('LL')} (${moment(emoji.createdTimestamp).fromNow()})`,
				`**- Accessible By:** ${emoji.roles.cache.map((role) => role.name).join(', ') || 'Everyone'}`
			])
			.addField('Other', [
				`**- Requires Colons:** ${checkOrCross(emoji.requiresColons)}`,
				`**- Deletable:** ${checkOrCross(emoji.deletable)}`,
				`**- Animated:** ${checkOrCross(emoji.animated)}`,
				`**- Managed:** ${checkOrCross(emoji.managed)}`

			]);

		return message.channel.send(embed);
	}

};
