var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Pokemon(type) {
	var maxFeedings = 10;
	var maxHungryDays = 3;
	var pokemonType = type;
	var self = this;

	process.nextTick(function() {
		var feedings = 0;
		var hungryDays = 0;
		self.emit('born');
		var t = setInterval(function() {
			self.emit('feed', ++feedings);
			if (feedings === maxFeedings) {
				self.emit('die', feedings);
				clearInterval(t);
			}
		})
	})
};

util.inherits(Pokemon, EventEmitter);
module.exports = Pokemon;