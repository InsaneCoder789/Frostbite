const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Mute',
			aliases: ['Mute', 'mute'],
			description: 'Used For Muting A Member From The Guild',
			category: 'Moderation',
			usage: '<@User Reason>',
			userPerms: ['ADMINISTRATOR', 'MANAGE_ROLES'],
			botPerms: ['ADMINISTRATOR', 'MANAGE_ROLES'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		const user = message.mentions.members.first();


		if (!user) {
			return message.channel.send('Please Mention The User I Need To Mute');
		}

		if (user.id === message.author.id) {
			// eslint-disable-next-line no-useless-escape
			return message.channel.send("Haha I See What You\'re Trying To Do Here xD");
		}

		const reason = args.slice(1).join(' ');

		if (!reason) {
			return message.channel.send('Please Give A Reason To Mute The Person!');
		}


		// eslint-disable-next-line id-length
		const muterole = message.guild.roles.cache.find(x => x.name === 'Muted');

		if (!muterole) {
			// eslint-disable-next-line no-useless-escape
			return message.channel.send("This Server Doesn\'t Have A Role Name `Muted`");
		}

		if (user.roles.cache.has(muterole)) {
			return message.channel.send('Given User Is Already Muted');
		}

		const embed = new MessageEmbed()
			.setAuthor(`You Muted ${message.mentions.users.first().username} | Reason - ${reason}`)
			.setColor('#544B94');


		try {
			user.roles.add(muterole);
			await message.channel.send(embed);
			user.send(`You Are Muted in ${message.guild.name}`);
		} catch (error) {
			console.log(error);
			message.channel.send('Make Sure Your Server has a role named `Muted` And the Appropriate Permissions are set!');
		}
	}

};
