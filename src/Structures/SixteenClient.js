const { Client, Collection, Permissions } = require('discord.js');
const Util = require('./Util');

module.exports = class SixteenClient extends Client {

	constructor(options = {}) {
		super({
			disableMentions: 'everyone'
		});
		this.validate(options);

		this.commands = new Collection();

		this.aliases = new Collection();

		this.events = new Collection();

		this.utils = new Util(this);

		this.owners = options.owners;
	}

	validate(options) {
		if (typeof options !== 'object') throw new TypeError('Options Should Be A Type Of Object.');

		if (!options.token) throw new Error('You Must Pass The Token For The Client.');
		this.token = options.token;

		if (!options.prefix) throw new Error('You Must Pass A Prefix For The Client.');
		if (typeof options.prefix !== 'string') throw new TypeError('Prefix Should Be A Type Of String.');
		this.prefix = options.prefix;

		if (!options.defaultPerms) throw new Error('You must pass default perm(s) for the Client.');
		this.defaultPerms = new Permissions(options.defaultPerms).freeze();
	}

	async start(token = this.token) {
		this.utils.loadCommands();
		this.utils.loadEvents();
		super.login(token);
	}

};
