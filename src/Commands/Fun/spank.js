const canvacord = require('canvacord')
const MessageEmbed = require('discord.js')
const Discord = require('discord.js')
const Command = require('../../Structures/Command');
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Spank',
			aliases: ['spank', 'Spank'],
			description: 'Used For Adding welcome Command To The Guild',
			category: 'Fun',
			usage: '<@user>',
			userPerms: ['SEND_MESSAGES'],
			botPerms: ['ADMINISTRATOR'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
         {
         let args = message.content.slice("".length).trim().split(/ +/g)
        args.shift().toLowerCase();
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!member){
         let avatar = client.user.displayAvatarURL({ format: "png", size: 2048 })
         let avatar2 = message.author.displayAvatarURL({ format: "png", size: 2048 })
         let image = await canvacord.Canvas.spank(avatar, avatar2);
         let attachment = new Discord.MessageAttachment(image, "spank.png"); 
          return message.channel.send (attachment)
        }
        if(!member) return message.reply('User not found!')
         let avatar = message.author.displayAvatarURL({ format: "png", size: 2048 })
         let avatar2 = member.user.displayAvatarURL({ format: "png", size: 2048 })
         let image = await canvacord.Canvas.spank(avatar, avatar2);
         let attachment = new Discord.MessageAttachment(image, "spank.png");
         return message.channel.send(attachment)
        }
        }
        
        }
    