const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'UnlockChannel',
			aliases: ['unlock', 'UnlockChannel'],
			description: 'Used For Unlocking A Channel From The Guild',
			category: 'Moderation',
			usage: '<#channel>',
			userPerms: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
			botPerms: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message) {
		const channel = message.mentions.channels.first() || message.channel;

		if (channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true) {
			const unlockchannelError2 = new MessageEmbed()
				.setDescription(`${channel} is not locked!`)
				.setColor('RED');

			return message.channel.send(unlockchannelError2);
		}

		channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: true });

		const embed = new MessageEmbed()
			.setTitle(`Channel Unlocked!`)
			.setDescription(`${channel} is now unlocked. Everyone can speak now.`)
			.setColor('#544B94');

		message.channel.send(embed);
	}

};
