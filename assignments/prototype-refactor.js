/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/




//  Constructor function that creates an object called GameOject

// Old code

// function GameObject(attrs) {
//     this.createdAt = new Date();
//     this.name = attrs.name;
//     this.dimensions = attrs.dimensions;
// }

// Refactored code

class GameObject {
    constructor(objAttrs) {
        this.createdAt = Date();
        this.dimensions = objAttrs.dimensions;

    }

    // Adds a method, destroy() to the object GameObjectddd

    // Old code

    // GameObject.prototype.destroy = function () {
    //     return `${this.name} was removed from the game.`;
    // };

    // Refactored code

    destroy() {
        return this.name + ' was removed from the game.';
    }

}
//  Creates an object called CharacterStats

// Old code

// function CharacterStats(characterAttrs) {
//     GameObject.call(this, characterAttrs);
//     this.healthPoints = characterAttrs.healthPoints;
// }

// Refactored code

class CharacterStats extends GameObject {
    constructor(characterAttrs) {
        super(characterAttrs);
        this.healthPoints = characterAttrs.healthPoints;
        this.name = characterAttrs.name;
        this.team = characterAttrs.team;
        this.weapons = characterAttrs.weapons;

    }
    
    // Creates a proto method that retruns the string "objectName.name took damage."

    // Old code

    // CharacterStats.prototype.takeDamage = function (characterAttrs) {
    //     return `${this.name} took damage.`;
    // };

    // Refactored code

    takeDamage() {
        return this.name + ' took damage';
    }

}

//  Creates an object called Humanoid.

//  Old code

// function Humanoid(humanAttrs) {
//     CharacterStats.call(this, humanAttrs);
//     this.team = humanAttrs.team;
//     this.weapons = humanAttrs.weapons;
//     this.language = humanAttrs.language;
// }


// Refactored code

class Humanoid extends CharacterStats {
    constructor(humanAttrs) {
        super(humanAttrs);
        this.language = humanAttrs.language;
    }


    //  Give object Humanoid the method .greet

    // Old code

    // Humanoid.prototype.greet = function (humanAttrs) {
    //     return `${this.name} offers a greeting in ${this.language}.`;
    // };

    // Refactored code

    greet() {
        return this.name + ' offers a greeting in ' + this.language;
    }
}

// Objects 

2   

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
  2      'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

