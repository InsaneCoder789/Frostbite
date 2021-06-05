const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'OwnerInfo',
			aliases: ['oi', 'owner', 'Owener', ],
			description: 'Displays Info About The Rightful Owner Of The Bot ',
			category: 'Information',
			guildOnly: true
		});
	}

	async run(message, args) {
        let embed = new Discord.MessageEmbed()
        .setTitle("OWNER")
        .setDescription("**Rohan Sujit Chatterjee**")
        .addField("This Bot is Officialy Owned By Rohan Sujit Chatterjee And Its A free to Use Moderator-Fun Bot. This Bot Will meet Ur Upmost Requiremnets and We wish that It would Be able to fulfill all your Needs.")
        .setColor("BLUE")
        .setFooter( "Any Problems with The Commands Dm Rohan <@707166340800315414>" )
        message.channel.send(embed)


    }
}