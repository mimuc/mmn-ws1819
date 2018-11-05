function Animal (name) { this.name = name; }
Animal.prototype.greeting = function () { return this.name + ' says hello!'; }

function Lion () {
  Animal.call(this, 'Lion'); // ~ super call
  this.maneLength = Math.random();
}

Lion.prototype = Object.create(Animal.prototype); // "Lion extends Animal"
Lion.prototype.roar = function () { return 'ROOAAAAR!'; }


const lion = new Lion();
console.info(lion.greeting());
console.info(lion.roar());
