const Discord = require('discord.js');
const Command = require('../../Structures/Command');
const fetch = require('node-fetch');
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Deepfry',
			aliases: ['deepfry', 'df'],
			description: 'Burns The Image Like A Steak!!',
			category: 'Fun',
			usage: '<mention>',
			args: true
		});
	}

	async run(message , args) {

        let user = await message.mentions.members.first();
    let text = args.join(' ');
    let pfp = ('a');
    let name = ('b');

    if(user) {
        text = args.slice(1).join(' ');
        pfp = (user.user.displayAvatarURL({ format: 'png', size: 512 }));
        name = user.user.username;
    }
    else {
        user = message.author;
        pfp = user.displayAvatarURL({ format: 'png', size: 512 });
        name = user.username;
    }



    const m = await message.channel.send('Loading..... Please Wait !');
    try {
        const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${pfp}`));
        const json = await res.json();
        const attachment = new Discord.MessageAttachment(json.message, 'phcomment.png');
        message.channel.send(attachment);
        m.delete({ timeout: 5000 });
    }
    catch(e) {
        m.edit('❌**Error:** ' + e);
    }
}
}