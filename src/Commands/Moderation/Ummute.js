/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-useless-escape */
const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Unmute',
			aliases: ['Unmute', 'unmute'],
			description: 'Used For Unmuting A Member From The Guild',
			category: 'Moderation',
			usage: '<@User>',
			userPerms: ['ADMINISTRATOR', 'MANAGE_ROLES'],
			botPerms: ['ADMINISTRATOR', 'MANAGE_ROLES'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message) {
	    const user = message.mentions.members.first();

		if (!user) {
			return message.channel.send('Please Mention The User I Need To Unmute!');
		}
		if (user.id === message.author.id) {
			return message.channel.send("You\'re Not Muted If You Just Sent A Command :)");
		}


		// eslint-disable-next-line id-length
		const muterole = message.guild.roles.cache.find(x => x.name === 'Muted');


		if (user.roles.cache.has(muterole)) {
			return message.channel.send('Given User Is Already Unmuted!');
		}

		const embed = new MessageEmbed()
			.setAuthor(`You Unmuted ${message.mentions.users.first().username}`)
			.setFooter("Enjoy And Don\'t Do something that\'s gonna get you MUTED")
			.setColor('#544B94');

		user.roles.remove(muterole);
		await message.channel.send(embed);
		user.send(`You Are Unmuted!`);
	}

};
