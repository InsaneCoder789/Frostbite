const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'avatar',
			aliases: ['avatar', 'av', 'icon'],
			description: 'Provides The Avatar Of The Mentioned User Or Message Author!',
			category: 'Information',
			usage: '[user]'
		});
	}

	async run(message) {
		const args = message.content.slice(2).trim().split(/ +/g);
		const user = message.mentions.members.last() || message.guild.members.cache.get(args[0]) || message.member;
		const avatar = user.user.displayAvatarURL({ size: 4096, dynamic: true });

		const embed = new MessageEmbed()
			.setTitle(`${user.user.tag} Avatar:`)
			.setColor(user.displayHexColor || 0x1d1d1d)
			.setImage(avatar);

		return message.channel.send(embed);
	}

};
