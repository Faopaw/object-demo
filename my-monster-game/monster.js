const config = {
    WEREWOLF_MAX_HP: 100,
    WEREWOLF_AP: 20,
    VAMPIRE_MAX_HP: 80,
    VAMPIRE_AP: 15,
    VAMPIRE_BITE_CHANCE: 0.3,   // between 0 and 1, the chance of having a bite instead of normal attack.
    VAMPIRE_BITE_HEALING_RATE: 0.7,  // how much damage (in fraction) is converted to hp.
    MUMMY_MAX_CONSEC_ATTACK: 3,
    MUMMY_MAX_HP: 150,
    MUMMY_AP: 25,
    MUMMY_FAILED_ATTACK_LOSE_LIFE: 15,
};

class Monster {
    constructor(hp, maxHp, ap) {
        this.hitPoint = hp;
        this.maxHitPoint = maxHp;
        this.attackPoint = ap;
    }

    attack(anotherMonster) {
        anotherMonster.beingHit(this.attackPoint);
    }

    beingHit(damage) {
        // you have to improve it, to handle the case for having 1 HP, but being hit for 20 damages.
        // you have to tell the caller, the actual amount of damage done.
        if (this.hitPoint >= damage) {
            this.hitPoint -= damage;
            return damage;
        }
        else {
            damage = this.hitPoint;
            this.hitPoint = 0;
            return damage;
        }

    }

    isDead() {
        return (this.hitPoint <= 0);
    }

    toDomNode() {
        let cardDom = document.createElement('div');
        cardDom.setAttribute('class', 'monster');
        cardDom.innerHTML = `<h2>${this.constructor.name}</h2><p>HP: ${this.hitPoint} / ${this.maxHitPoint}</p>`
        return cardDom;
    }
}


class Werewolf extends Monster {
    constructor() {
        super(config.WEREWOLF_MAX_HP, config.WEREWOLF_MAX_HP, config.WEREWOLF_AP);
    }


}


class Vampire extends Monster {
    constructor() {
        super(config.VAMPIRE_MAX_HP, config.VAMPIRE_MAX_HP, config.VAMPIRE_AP);
    }

    attack(anotherMonster) {
        const actualDamage = anotherMonster.beingHit(this.attackPoint);
        if (Math.random() > config.VAMPIRE_BITE_CHANCE) {
            this.gainHealth(actualDamage * config.VAMPIRE_BITE_HEALING_RATE);
        }       
    }

    gainHealth(health) {
        this.hitPoint += health;
        if (this.hitPoint > this.maxHitPoint) {
            this.hitPoint = this.maxHitPoint;
        }
    }
}

class Mummy extends Monster {
    constructor() {
        super(config.MUMMY_MAX_HP, config.MUMMY_MAX_HP, config.MUMMY_AP);
        this.attackCount = 0;
    }

    attack(anotherMonster) {
        this.attackCount ++;
        if (this.attackCount < 3) {
            anotherMonster.beingHit(this.attackPoint);
        }
        else {
            this.beingHit(config.MUMMY_FAILED_ATTACK_LOSE_LIFE);
            this.attack = 0;
        }
    }
}

class Player {
    constructor() {
        this.hands = [];   // storing the cards
    }

    initHands(n) {
        for (let i = 0; i < n; i++) {
            let rand = Math.random();
            if (rand < (1 / 3))
                this.hands[i] = new Werewolf();
            else if (rand > (2 / 3)) 
                this.hands[i] = new Mummy();
            else 
                this.hands[i] = new Vampire();
        }
    }

    attack(anotherPlayer) {
        const attackCardIndex = Math.floor(Math.random() * this.hands.length);
        const defendCardIndex = Math.floor(Math.random() * anotherPlayer.hands.length);
        let attackCard = this.hands[attackCardIndex];
        let defendCard = anotherPlayer.hands[defendCardIndex];

        attackCard.attack(defendCard);

        if (defendCard.isDead()) {
            anotherPlayer.removeCardFromHand(defendCardIndex);               
        }
    }

    removeCardFromHand(index) {
        this.hands.splice(index, 1);
    }

    display(div) {  // takes an html element, and display hands in it.
        div.innerHTML = '';
        for (let card of this.hands) {
            div.appendChild(card.toDomNode());
        }
    }
}

// test it!

// const monster1 = new Monster(100, 100, 20);
// const monster2 = new Monster(200, 200, 40);

// monster1.attack(monster2);
// monster2.attack(monster1);

// console.log(monster1);
// console.log(monster2);

// const ww1 = new Werewolf();
// const ww2 = new Werewolf();

// ww1.attack(ww2);
// ww1.attack(ww2);

// console.log(ww1);
// console.log(ww2);

// const mm1 = new Mummy();

// mm1.attack(ww1);
// mm1.attack(ww1);
// console.log(mm1);

// mm1.attack(ww1);
// console.log(ww1);
// console.log(mm1);

// let player1 = new Player();
// let player2 = new Player();

// player1.initHands(1);
// player2.initHands(1);

// player1.attack(player2);
// console.log(player1.hands);
// console.log(player2.hands);

// player1.attack(player2);
// console.log(player1.hands);
// console.log(player2.hands);

// let ww1 = new Werewolf();

// let p1 = document.getElementById('human');
// p1.appendChild(ww1.toDomNode());

let p1 = new Player();
let p2 = new Player();

p1.initHands(2);
p2.initHands(2);

p1.display(document.getElementById("human"));
p2.display(document.getElementById("comp"));

document.getElementById('attack').addEventListener('click', function() {
    p1.attack(p2);
    p1.display(document.getElementById("human"));
    p2.display(document.getElementById("comp"));
}
);