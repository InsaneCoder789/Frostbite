const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Slowdown',
			aliases: ['slowdown', 'Slowdown'],
			description: 'Used For Adding Slowdown Time For A Channel From The Guild',
			category: 'Moderation',
			usage: '<1-21600000>',
			userPerms: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
			botPerms: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		if (!message.member.hasPermission('MANAGE_CHANNELS')) {
			const slowmodeError = new MessageEmbed()
				.setDescription(`You do not have permissions to enable/disable slowmode.`)
				.setColor('RED');
			return message.channel.send(slowmodeError);
		}
		if (!args[0]) {
			const slowmodeError2 = new MessageEmbed()
				.setDescription(`You did not provide a time. \n\n Time Units - h(hour), m(minute), s(seconds) \n (Example - ?slowmode 5s)`)
				.setColor('RED');
			return message.channel.send(slowmodeError2);
		}
		const currentSlowmode = message.channel.rateLimitPerUser;
		const reason = args[1] ? args.slice(1).join(' ') : 'Not Specified';

		if (args[0] === 'off') {
			if (currentSlowmode === 0) {
				const slowmodeOfferror = new MessageEmbed()
					.setDescription(`Slowmode is already off`)
					.setColor('RED');
				return message.channel.send(slowmodeOfferror);
			}
			message.channel.setRateLimitPerUser(0, reason);
			const slowmodeOff = new MessageEmbed()
				.setDescription(`Slowmode Disabled`)
				.setColor('#544B94');

			return message.channel.send(slowmodeOff);
		}

		const time = ms(args[0]) / 1000;
		const slowmodeError3 = new MessageEmbed()
			.setDescription(`This is not a valid time. Please write the time in the units mentioned. \n\n Time Units - h(hour), m(minute), s(seconds) \n (Example - ?slowmode 5s)`)
			.setColor('RED');
		if (isNaN(time)) {
			return message.channel.send(slowmodeError3);
		}

		if (time > 21600000) {
			const slowmodeError4 = new MessageEmbed()
				.setDescription(`Time is too high. Make sure its below 6 hours.`)
				.setColor('RED');

			return message.channel.send(slowmodeError4);
		}

		if (currentSlowmode === time) {
			const slowmodeError5 = new MessageEmbed()
				.setDescription(`Slowmode is already set to ${args[0]}`)
				.setColor('RED');
			return message.channel.send(slowmodeError5);
		}

		// eslint-disable-next-line no-unused-vars
		const slowmode = await message.channel.setRateLimitPerUser(time, reason);
		const afterSlowmode = message.channel.rateLimitPerUser;
		if (afterSlowmode > 0) {
			const embed = new MessageEmbed()
				.setTitle(`Slowmode Enabled`)
				.addField(`Slowmode Duration`, args[0])
				.addField(`Reason`, reason)
				.setColor('#544B94');

			return message.channel.send(embed);
		} else if (afterSlowmode === 0) {
			return message.channel.send(slowmodeError3);
		}
	}

};
