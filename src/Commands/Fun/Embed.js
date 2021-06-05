const Command = require('../../Structures/Command');
const MessageEmbed = require('discord.js');
const Discord = require('discord.js');

module.exports = class Guess extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Embed',
			aliases: ['embed', 'eb'],
			description: 'Sends a cool embed',
			category: 'Fun'
		});
	}

	async run(message) {
        let questions = {
			firstQuestion: "OKay, first of all, what do you want to be the embed's title? Type the title into the chat now!",
			secondQuestion: "Type the description that you want in the embed!",
			thirdQuestion: "Type the color you want to be on the embed! It can be a color like red or a hex code.",
			fourthQuestion: "What do you want its footer to be?",
		}
		   
			message.channel.send(questions.firstQuestion).then(msg => {
				const filter1 = m => m.author.id === message.author.id
				msg.channel.awaitMessages(filter1, {
					time: 5 * 60000,
					max: 1
				}).then(messages => {
					let msg1 = messages.first().content
					if(msg1.toLowerCase() === "cancel") return message.channel.send("Ok, I have cancelled this process")
					message.channel.send(questions.secondQuestion).then(msg => {
						const filter1 = m => m.author.id === message.author.id
						msg.channel.awaitMessages(filter1, {
							time: 5 * 60000,
							max: 1
						}).then(messages => {
							let msg2 = messages.first().content
							if(msg2.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
							message.channel.send(questions.thirdQuestion).then(msg => {
								const filter1 = m => m.author.id === message.author.id
								msg.channel.awaitMessages(filter1, {
									time: 5 * 60000,
									max: 1
								}).then(messages => {
									let msg3 = messages.first().content.toUpperCase()
									if(msg3.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
									message.channel.send(questions.fourthQuestion).then(msg => {
										const filter1 = m => m.author.id === message.author.id
										msg.channel.awaitMessages(filter1, {
											time: 5 * 60000,
											max: 1
										}).then(messages => {
											let msg4 = messages.first().content
											if(msg4.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
											console.log("Embed created")
												
														message.channel.send(
															new Discord.MessageEmbed()
																.setTitle(msg1)
																.setDescription(msg2)
																.setColor(msg3)
																.setFooter(msg4)
														)
												
												})
											})
										})
									})
								})
							})
						})
					})
				
		 
	
		 
	  }
	}
    