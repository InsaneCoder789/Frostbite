const MessageEmbed = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Support',
			aliases: ['support', 'SP', 'sp'],
			description: ' Link To  The Bot Support Server',
			category: 'Utilities',
			userPerms: ['SEND_MESSAGES'],
			botPerms: ['SEND_MESSAGES'],
			guildOnly: true

		});
	}
	
   
	async run(message) {
	message.reply("\n <a:rainbow_arrow:831415186824364042> **Want Help Regarding Frostbite ?** \n <a:rainbow_arrow:831415186824364042> Dont Worry Join The Server And Get Your Problmes Solved in Minutes !!!!!!!!!!! 🎆🎆🎆🎆🎆🎆🎆                   \n <a:rainbow_arrow:831415186824364042> https://discord.gg/ppGBYSeSqb")
    }
};