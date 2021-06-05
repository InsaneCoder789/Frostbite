const SixteenClient = require('./Structures/SixteenClient');
const config = require('../config.json');

const client = new SixteenClient(config);
client.start();
