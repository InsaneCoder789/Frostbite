const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'ChannelInfo',
			aliases: ['ci', 'channel', 'channelInfo', 'cinfo', 'ChannelInfo'],
			description: 'Displays Info About The Emoji You Provided',
			category: 'Information',
			guildOnly: true
		});
	}

	async run(message, args) {
		let channel = message.mentions.channels.first();

		if (!channel) {
			if (parseInt(args[0]) < 9223372036854775807) {
				channel = message.guild.channels.cache.get(args[0]);
			// eslint-disable-next-line prefer-destructuring
			} else { channel = message.channel; }
		}


		const formatDate = (date) => moment(date).format('MM/DD/YYYY');

		const topic = channel.topic ? channel.topic : 'N/A';
		const channelId = channel.id;
		const createdAt = formatDate(channel.createdAt);
		const type = channel.type === 'text' ? 'Text Channel' : 'Voice Channel';

		const embed = new MessageEmbed()
			.setTitle(channel.name)
			.addField('Type', type, true)
			.addField('Topic', topic, true)
			.addField('ID:', channelId, true)
			.addField('Created On:', createdAt, true)
			.setColor('#544B94');

		message.channel.send(embed);
	}

};
