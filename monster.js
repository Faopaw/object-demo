const config = {
   WEREWOLF_MAXHEALTH:  100,
   WEREWOLF_ATTACK_POINT: 10
};

class Monster {
    constructor(maxHealth, attackPoint) {
        this.maxHealth = maxHealth;
        this.health    = this.maxHealth;
        this.attackPoint = attackPoint;
    }

    attack(monster) {
        monster.beingHit(this.attackPoint);
    }

    /**
     * The monster is being inflicted by "damage" amount of damage.
     * If "damage" is larger than this monster's current health,
     * only "current health" amount of damage is actually being inflicted.
     * 
     * e.g., if current health is 5, damage is 10, only 5 damage is actually inflicted.
     * 
     * @param number A damage to be beaten to this monster. 
     * @returns The actual damage inflicted.
     */
    beingHit(damage) { 
        if (damage > this.health) {
            damage = this.health;
        }
        this.health -= damage;
        return damage;
    }
}

class Werewolf extends Monster {
    constructor() {
        super(config.WEREWOLF_MAXHEALTH, config.WEREWOLF_ATTACK_POINT);
    }
}

class Vampire extends Monster {
    constructor() {
        super(config.asdfa   , config.asdf);
    }    

    attack(monster) {
        const damage = monster.beingHit(this.attackPoint);
        this.heal(damage);
    }

    heal(amount) {
        this.health += amount;
        if (this.health > this.maxHealth) {
            this.health = this.maxHealth;
        }
    }
}

// test it!
const ww1 = new Werewolf();
const ww2 = new Werewolf();

console.log(ww1);
console.log(ww2);
ww1.attack(ww2);
ww1.attack(ww2);
console.log(ww1);
console.log(ww2);

const vam1 = new Vampire();
ww1.attack(vam1);
ww1.attack(vam1);
console.log(vam1);
vam1.attack(ww1);
console.log(ww1);
console.log(vam1);