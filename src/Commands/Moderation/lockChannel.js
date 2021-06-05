const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'LockChannel',
			aliases: ['lock', 'LockChannel'],
			description: 'Used For Locking A Channel From The Guild',
			category: 'Moderation',
			usage: '<#channel reason>',
			userPerms: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
			botPerms: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		let channel = message.mentions.channels.first();
		let reason = args.join(' ') || 'Not Specified';

		if (channel) {
			reason = args.join(' ').slice(22) || 'Not Specified';
		} else {
			// eslint-disable-next-line prefer-destructuring
			channel = message.channel;
		}

		if (channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === false) {
			const lockchannelError2 = new MessageEmbed()
				.setDescription(`${channel} is already locked!`)
				.setColor('RED');

			return message.channel.send(lockchannelError2);
		}

		channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: false });

		const embed = new MessageEmbed()
			.setTitle(`Channel Locked!`)
			.setDescription(`**Channel:** ${channel} \n **Reason:** ${reason}`)
			.setColor('#544B94');

		message.channel.send(embed);
	}

};
