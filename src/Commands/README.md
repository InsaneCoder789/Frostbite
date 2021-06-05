# Make Your Own Command

```javascript
const Command = require('../../Structures/Command'); //Getting The Command Handler So Command Works

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
                        name: '', //Name Of The Command
			aliases: [''], //Add Some Alias To The Command
			description: '', //Description For The Command
			category: '', //Category Of The Command
                        usage: '', // <> Means Strict And [] Means Optional. Eg: !user [user_name] Or !kick <user_name>
			userPerms: ['eg: ADMINISTRATOR'], // Add Your Permissions Required For The User To Use The Command...
			botPerms: [''], // Same As Above But For The Bot...
			nsfw: , // true or false // Adding This Will Make Sure That The Command Only Works In NSFW Marked Channels
			args: , // true or false // If You Have A Strict Command Usage Parameter, You Can Add This. What It Does Is That If An User Does Not Provide An Argument Along With An Command, The Bot Will Reply That You Need The Argument And Shows The Usage Of The Command
			guildOnly: , // true or false // Adding This Will Make Sure The Command Only Works In A Server And Not In DMs Of The Bot
			ownerOnly: , // true or false // Adding This Will Make The Command Only To Be Used By Owner. This Is Very Useful Especially When You Have Eval Or Execute Commands....
		});
	}

	async run(message) {
		//Add Code In Here
	}

};
```

# List Of Commands Of The Bot

### Animal Commands

* Bird - *Provides You With A Random Bird Picture & Fact*
* Cat - *Provides You With A Random Cat Picture & Fact*
* Dog - *Provides You With A Random Dog Picture & Fact*
* Fox - *Provides You With A Random Fox Picture & Fact*
* Koala - *Provides You With A Random Koala Picture & Fact*
* Panda - *Provides You With A Random Panda Picture & Fact*
* Red Panda - *Provides You With A Random Red Panda Picture*

### Fun Commands

* 8Ball - *A Command Decides Your Fate With An 8-Ball, Obviously 8-Balls Aren't Real You Idiot.*
* Banner - *Creates A Banner With The Text You Provided*
* Emojify - *Makes The Text You Sent Into Emojis*
* Guess The Number - *You Have To Guess The Number Which The Bot Is Thinking..*
* Meme - *Provides You A Nice Dank Meme (I Guess...)*
* Trump Tweet - *Displays A Picture With A Custom Tweet From Donald Trump With The Message The Author Provided.* 

### Information Commands

* Avatar - *Provides The User Avatar For Mentioned User Or Command Author*
* Bot Info - *Provides Information About The Bot*
* Server Info - *Provides Information About The Server This Command Was Run In.*
* User Info - *Provides Information About An Mentioned User Or Command Author*
* Emoji Info - *Provides Information About An Emoji Provided Along With The Command*
* Channel Info - *Provides Information About A Channel The Command Was Run In Or Mentioned Channel* 

### Moderation Commands

* Ban - *Command Used To Ban A Mentioned User*
* Clear - *Command Used To Clear Upto 100 Messages In A Channel*
* Kick - *Command Used To Kick A Mentioned User*
* Mute - *Command Used To Mute A Mentioned User*
* Slowmode - *Command Used To Add Or Remove Slow Mode Time In The Channel The Command Was Run In*
* Unmute - *Command Used To Unmute The Mentioned User*
* Unban - *Command Used To Unban The Mentioned UserID*
* Unwarn - *Command Used To UnWarn The Mentioned User*
* Warn - *Command Used To Warn The Mentioned User. 3 Warns And The User Is Banned. Warns Are Stored On MongoDB*
* Warnings - *Command Used To See The Warnings The Mentioned User Has.
* Add Role - *Command Used To Add Roles To The Mentioned User.
* Lock Channel - *Command Used To Lock The Channel This Command Was Run In*
* Unlock Channel - *Command Used To Unlock The Channel This Command Was Run In*

### Owner Commands

* Eval - *Used To Evaluate A Code Inside The Bot. VERY DANGEROUS COMMAND*
* Execute - *Executes Commands In The Console. VERY DANGEROUS COMMAND*

### Utility Commands

* Help - *Shows All The Commands In The Bot And Thier Usage*
* Ping - *Shows The Ping Of The Bot*
* Uptime - *Shows The Uptime Of The Bot*
* Suggest - *Command Used To Give Suggestions*
