const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Clear',
			aliases: ['Clear', 'clear'],
			description: 'Used For Clearing Messages In A Channel From The Guild',
			category: 'Moderation',
			usage: '<1-100>',
			userPerms: ['ADMINISTRATOR', 'MANAGE_MESSAGES'],
			botPerms: ['ADMINISTRATOR', 'MANAGE_MESSAGES'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		if (!args[0]) {
			return message.channel.send('Please Enter An Amount Between 1 and 100');
		}

		let deleteAmount;

		if (parseInt(args[0]) > 100) {
			deleteAmount = 100;
		} else {
			deleteAmount = parseInt(args[0]);
		}

		await message.channel.bulkDelete(deleteAmount, true);

		const embed = new MessageEmbed()
			.setDescription(`Successfully Deleted ${deleteAmount} Messages`)

			.setColor('#544B94');

		// eslint-disable-next-line no-shadow
		await message.channel.send(embed).then(message => message.delete({ timeout: 5000 }));
	}

};
