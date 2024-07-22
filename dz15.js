const crypto = require('crypto');

class RoboDogBuilder {
  constructor(name) {
    this.name = name;
    this.intelligence = 0;
    this.aggression = 0;
    this.strength = 0;
    this.endurance = 0;
    this.commands = {};
    this.uuid = null;
  }

  setIntelligence(value) {
    if (value < 0 || value > 10) {
      throw new Error('Intelligence must be between 0 and 10');
    }
    this.intelligence = value;
    return this;
  }

  setAggression(value) {
    if (value < 0 || value > 10) {
      throw new Error('Aggression must be between 0 and 10');
    }
    this.aggression = value;
    return this;
  }

  setStrength(value) {
    if (value < 0 || value > 10) {
      throw new Error('Strength must be between 0 and 10');
    }
    this.strength = value;
    return this;
  }

  setEndurance(value) {
    if (value < 0 || value > 10) {
      throw new Error('Endurance must be between 0 and 10');
    }
    this.endurance = value;
    return this;
  }

  addCommand(commandName, commandFunction) {
    this.commands[commandName] = commandFunction;
    return this;
  }

  validate() {
    const totalPoints = this.intelligence + this.aggression + this.strength + this.endurance;
    if (totalPoints !== 30) {
      throw new Error('Total points must be exactly 30');
    }
    this.uuid = crypto.randomUUID();
    return this;
  }

  build() {
    if (!this.uuid) {
      throw new Error('RoboDog is not validated');
    }
    const dog = {
      name: this.name,
      intelligence: this.intelligence,
      aggression: this.aggression,
      strength: this.strength,
      endurance: this.endurance,
      uuid: this.uuid,
      attackEnemy: () => {
        const successRate = (this.strength + this.aggression) / 2;
        console.log(`${this.name} attacks the enemy with a success rate of ${successRate}`);
      }
    };
    for (const [commandName, commandFunction] of Object.entries(this.commands)) {
      dog[commandName] = commandFunction;
    }
    return Object.freeze(dog);
  }
}

// Example usage:
const alf = new RoboDogBuilder('Alf')
  .setIntelligence(10)
  .setAggression(5)
  .setStrength(5)
  .setEndurance(10)
  .addCommand('bark', () => console.log('Alf is barking'))
  .validate()
  .build();

alf.bark();
alf.attackEnemy();
