const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = class extends Command {


	constructor(...args) {
		super(...args, {
			name: 'RedPanda',
			aliases: ['RedPanda', 'redpanda', 'rp'],
			description: 'Provides You With A Random Red Panda Picture',
			category: 'Animals'
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message) {
		const url = 'https://some-random-api.ml/img/red_panda';

		let image, response;
		try {
			response = await axios.get(url);
			image = response.data;

		// eslint-disable-next-line id-length
		} catch (e) {
			return message.channel.send(`An error occured, please try again!`);
		}

		const embed = new MessageEmbed()
			.setTitle(`Random Red Panda Image`)
			.setColor(`#544B94`)
			.setImage(image.link);

		await message.channel.send(embed);
	}

};
