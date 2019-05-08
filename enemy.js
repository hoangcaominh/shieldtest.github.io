class Enemy {
    constructor() {
        this.Name = "Porky";
        this.HP = 1;
        this.HP_MAX = 1;
        this.ATK = 14;
    }
}

var multiplier, stop;

function Attack(attacker, target) {
    document.getElementById("healButton").disabled = true;
    document.getElementById("rcvButton").disabled = true;

    var damage = attacker.ATK / (1000 / 50) / multiplier;
    target.SP -= damage;
    multiplier *= 1.023;
    stop -= damage;

    if (target.SP <= 0) {
        target.HP = Math.max(target.HP + target.SP, 0);
        target.SP = 0;
        document.getElementById("healButton").disabled = false;
    }

    if (stop <= 0) {
        document.getElementById("rcvButton").disabled = false;
        document.getElementById("atkButton").disabled = false;
        clearInterval(attackTask);
    }
    clearInterval(healTask);
    clearInterval(recoverTask);
}