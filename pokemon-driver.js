var Pokemon = require('./pokemon');

var p = new Pokemon(7);

p.on('born', function() {
    console.log("I'm a baby Pokemon! I was just born! Feed me!");
});

p.on('feed', function(count) {
    console.log("Thanks for feeding me! This is my " + count + "meal!");
});

p.on('die', function(count) {
    console.log("Oh no! After " + count + "feedings I die. See yah!");
});