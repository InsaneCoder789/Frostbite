const Command = require('../../Structures/Command');
const warnSchema = require('../../Structures/Models/warnSchema');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Warnings',
			aliases: ['Warnings', 'warnings'],
			description: 'Shows All The Warnings A Member Got From The Guild',
			category: 'Moderation',
			usage: '<@user>',
			userPerms: ['ADMINISTRATOR', 'KICK_MEMBERS', 'BAN_MEMBERS'],
			botPerms: ['ADMINISTRATOR', 'KICK_MEMBERS', 'BAN_MEMBERS'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message) {
		const mentionedUser = message.mentions.users.first() || message.member;

		const warnDoc = await warnSchema
			.findOne({
				guildID: message.guild.id,
				memberID: mentionedUser.id
			})
			.catch((err) => console.log(err));

		if (!warnDoc || !warnDoc.warnings.length) {
			return message.channel.send(`${mentionedUser} has no warnings`);
		}

		const data = [];

		for (let i = 0; warnDoc.warnings.length > i; i++) {
			data.push(`**ID:** ${i + 1}`);
			data.push(`**Reason:** ${warnDoc.warnings[i]}`);
			data.push(
				`**Moderator:** ${await message.client.users
					.fetch(warnDoc.moderator[i])
					.catch(() => 'Deleted User')}`
			);
			data.push(
				`**Date:** ${new Date(warnDoc.date[i]).toLocaleDateString()}\n`
			);
		}

		const embed = new MessageEmbed()
			.setThumbnail(mentionedUser.displayAvatarURL({ dynamic: false }))
			.setColor('#544B94')
			.setDescription(data.join('\n'));

		message.channel.send(embed);
	}

};
