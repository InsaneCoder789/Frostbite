const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Kick',
			aliases: ['Kick', 'kick'],
			description: 'Used For Kicking A Member From The Guild',
			category: 'Moderation',
			usage: '<@user Reason>',
			userPerms: ['ADMINISTRATOR', 'KICK_MEMBERS'],
			botPerms: ['ADMINISTRATOR', 'KICK_MEMBERS'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

		if (!message.member.hasPermission('KICK_MEMBERS')) {
			const kickerror = new MessageEmbed()
				// eslint-disable-next-line no-useless-escape
				.setDescription("You Don\'t Have Permissions To Kick Members")
				.setColor('RED');

			return message.channel.send(kickerror);
		} else if (!message.guild.me.hasPermission('KICK_MEMBERS')) {
			const kickerror2 = new MessageEmbed()
				// eslint-disable-next-line no-useless-escape
				.setDescription("I Don\'t Have Permissions To Kick Members. Make Sure You Have Given Me Appropriate Permissions")
				.setColor('RED');

			return message.channel.send(kickerror2);
		} else if (!mentionedMember) {
			const kickerror3 = new MessageEmbed()
				.setDescription('You Need To Mentioned a Member That You Want to Kick')
				.setColor('#544B94');

			return message.channel.send(kickerror3);
		}

		const mentionedPosition = mentionedMember.roles.highest.position;
		const memberPosition = message.member.roles.highest.position;
		const botPosition = message.guild.me.roles.highest.position;

		if (memberPosition <= mentionedPosition) {
			const kickerr = new MessageEmbed()
				.setDescription('You Can Not Kick This Member Because their role is higher/equal to yours')
				.setColor('RED');

			return message.channel.send(kickerr);
		} else if (botPosition <= mentionedPosition) {
			const kickerr2 = new MessageEmbed()
				.setDescription('I Can Not Kick This Member Because their role is higher/equal to mine')
				.setColor('RED');

			return message.channel.send(kickerr2);
		}

		const reason = args.slice(1).join(' ');

		try {
			await mentionedMember.kick([reason]);

			const kickSuccess = new MessageEmbed()
				.setTitle('Successful!')
				.setDescription(`Kicked ${mentionedMember} ${reason ? `for **${reason}**` : ''}`)
				.setColor('#544B94');

			message.channel.send(kickSuccess);
		} catch (error) {
			console.log(error);
			const errorEmbed = new MessageEmbed()
				.setDescription('There Was an Unexpected Error Kicking This Member')
				.setColor('RED');

			message.channel.send(errorEmbed);
		}
	}

};
