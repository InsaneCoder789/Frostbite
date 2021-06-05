const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Suggest',
			aliases: ['Suggest', 'suggest'],
			description: 'Used For Suggesting Something Related To Server Or Something Else',
			usage: '<Suggestion>',
			category: 'Utilities',
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		const neededChannel = '814420784838737930';

		const channel = this.client.channels.cache.get(neededChannel);

		if (!neededChannel) {
			console.log(`Please pass an ID of the channel you wish the suggetion to be sent to`);
		}

		if (!channel) {
			console.log(`It looks like the channel set isnt in the same server i am`);
		}

		if (!args[0]) return message.channel.send('You need to enter a Suggestion');
		message.channel.send(`Thank you <@${message.author.id}> for giving the suggestion of: \n${args.join(' ')}`);

		const embed = new MessageEmbed()
			.setTitle(`New Suggestion`)
			.setColor('RANDOM')
			.setTimestamp()
			.addField(`User Information`, [
				`Username: ${message.author.tag}`,
				`ID: ${message.author.id}`
			])

			.addField(`Suggestion:`, [
				`${args.join(' ')}`
			]);

		channel.send(embed);
	}

};
