const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = class extends Command {


	constructor(...args) {
		super(...args, {
			name: 'Fox',
			aliases: ['Fox', 'fox'],
			description: 'Provides You With A Random Fox Picture & Fact',
			category: 'Animals'
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message) {
		const url = 'https://some-random-api.ml/img/fox';
		const facts = 'https://some-random-api.ml/facts/fox';

		let image, response;
		let fact, responses;
		try {
			response = await axios.get(url);
			image = response.data;

			responses = await axios.get(facts);
			fact = responses.data;
		// eslint-disable-next-line id-length
		} catch (e) {
			return message.channel.send(`An error occured, please try again!`);
		}

		const embed = new MessageEmbed()
			.setTitle(`Random Fox Image and Fact`)
			.setColor(`#544B94`)
			.setDescription(fact.fact)
			.setImage(image.link);

		await message.channel.send(embed);
	}

};
