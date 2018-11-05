class Animal {
  constructor (name) {
    this.name = name;
  }

  greeting () { return this.name + ' says hello!'; }
}

class Lion extends Animal {
  constructor () {
    super('Lion');
    this.maneLength = Math.random();
  }

  roar () { return 'ROOOAAAR!'; }
}
