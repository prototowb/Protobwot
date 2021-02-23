const {Client, Collection} = require("discord.js");

module.exports = class clientBuild extends Client {
    constructor(options) {
        super(options) 

        this.commands = new Collection();
        this.cooldowns = new Collection();
        this.aliases = new Collection();
        this.config = require('../config.js');
        this.recent = new Set();
    }
}