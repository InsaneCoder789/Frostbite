const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const Command = require('../../Structures/Command');
const Collection = require('discord.js')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Snipe',
			aliases: ['snipe', 'sn'],
			description: 'Used For Retracting a Recently  Deleted Message From The Guild',
			category: 'Moderation',
			userPerms: ['SEND_MESSAGES'],
			botPerms: ['MANAGE_MESSAGES'],
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message) {
        let snipe = new Discord.Collection();
             {
                client.on("messageDelete", message => {
                    snipe.set(message.channel.id, {
                    content: message.content,
                    author: message.author, }); });
            const msg = snipe.get(message.channel.id);
            if (!msg) return message.channel.send(" :NotApproved: | Theres Nothing To Snipe");
            const embed = new Discord.MessageEmbed()
            .setTitle("Last Deleted Message")
            .setColor("RANDOM")
            .setTimestamp()
            .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
            .addFields(
            { name: "Sender", value: msg.author.username },
            { name: "Content", value: msg.content }
            );
            message.channel.send(embed);
            }
            
  }
}