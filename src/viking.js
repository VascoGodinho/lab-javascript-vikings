// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
    }

}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    
    receiveDamage(damage){
        this.health = this.health - damage;

        if(0 < this.health)
        {
            return `${this.name} has received ${damage} points of damage`;
        }
        else if (damage > this.health)
        {
            return `${this.name} has died in act of combat`
        }
    }
        battleCry()
        {
            return `Odin Owns You All!`
        }
    }

    



// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(damage){
        this.health -= damage;

        if(0 < this.health)
        {
            return `A Saxon has received ${damage} points of damage`;
        }
        else if (damage > this.health)
        {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
     this.vikingArmy = [];
     this.saxonArmy = [];
    }
    
    addViking(Viking){
        this.vikingArmy.push(Viking);

    }
    
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];

        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const result = randomSaxon.receiveDamage(randomViking.strength);
           
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);

        return result;
        ;
    }

    saxonAttack(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];

        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const result = randomViking.receiveDamage(randomSaxon.strength);

        this.vikingArmy = this.vikingArmy.filter(Viking => Viking.health > 0);

        return result;
    }

    showStatus(){
        if(this.saxonArmy.length === 0)
        {
            return `Vikings have won the war of the century!`;
        }
        else if(this.vikingArmy.length === 0)
        {
            return `Saxons have fought for their lives and survived another day...`;
        }
        else if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0)
        {
            return `Vikings and Saxons are still in the thick of battle.`; 
        }
    }
}
