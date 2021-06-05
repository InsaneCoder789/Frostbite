/* eslint-disable no-useless-escape */
const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');
const userReg = RegExp(/<@!?(\d+)>/);

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Unban',
			aliases: ['Unban', 'unban'],
			description: 'Used For Unbanning A Member From The Guild',
			category: 'Moderation',
			usage: '<@user>',
			userPerms: ['ADMINISTRATOR', 'BAN_MEMBERS'],
			botPerms: ['ADMINISTRATOR', 'BAN_MEMBERS'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		const userID = userReg.test(args[0]) ? userReg.exec(args[0])[1] : [0];
		const mentionedUser = await message.client.users.fetch(userID).catch(() => null);

		if (!message.member.hasPermission('BAN_MEMBERS')) {
			const unbanerror = new MessageEmbed()
				.setDescription("You Don\'t Have Permissions To Unban Members")
				.setColor('#544B94');

			return message.channel.send(unbanerror);
		} else if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
			const unbanerror2 = new MessageEmbed()
				.setDescription("I Don\'t Have Permissions To Unban Members. Make Sure You Have Given Me Appropriate Permissions")
				.setColor('#544B94');

			return message.channel.send(unbanerror2);
		} else if (!mentionedUser) {
			const unbanerror3 = new MessageEmbed()
				.setDescription('You Need To Mention a Banned Member to Unban')
				.setColor('#544B94');

			return message.channel.send(unbanerror3);
		}

		const allBans = await message.guild.fetchBans();
		const bannedUser = allBans.get(mentionedUser.id);

		if (!bannedUser) {
			const unbanerr = new MessageEmbed()
				.setDescription('This Member is Not Banned')
				.setColor('#544B94');

			return message.channel.send(unbanerr);
		}

		const reason = args.slice(1).join(' ');

		message.guild.members.unban(mentionedUser.id, [reason]).catch(err => console.log(err));

		const unbanSuccess = new MessageEmbed()
			.setTitle('Success!')
			.setDescription(`Unbanned ${mentionedUser} ${reason ? `for **${reason}**` : ''}`)
			.setColor('#544B94');


		message.channel.send(unbanSuccess);
	}

};
