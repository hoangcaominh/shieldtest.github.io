class Player {
    constructor() {
        this.Name = "Noname";
        this.HP = 30;
        this.HP_MAX = 30;
        this.SP = 30;
        this.SP_MAX = 30;
        this.ATK = 1;
        this.HPBar = new Bar("HP", 0, 20, 400, 20, "#FF0000");
        this.SPBar = new Bar("SP", 0, 20 + fontSize, 400, 20, "#15BCF4");
    }
}

function Heal(target) {
    // console.log("HP: " + target.HP);
    target.HP = Math.min(target.HP + 2 / (1000 / delay), target.HP_MAX);
    if (target.HP == target.HP_MAX) {
        document.getElementById("healButton").disabled = false;
        clearInterval(healTask);
    }
}

function SPRecovered(target) {
    // SP_MAX increment formula
    target.SP_MAX += (target.SP_MAX - target.SP) * 15 / 100;
    // SP increment formula
    // Quick-recover formula (squared cubic root)
    return Math.cbrt(target.SP_MAX) ** 2 / (1000 / delay);
    // Square root formula
    // return Math.sqrt(target.SP_MAX) / (1000 / delay);
    // Cubic root formula
    // return Math.cbrt(target.SP_MAX) / (1000 / delay);
    // Super-slow-recover formula (log2)
    // return Math.log2(target.SP_MAX) / (1000 / delay);
}

function Recover(target) {
    target.SP = Math.min(target.SP + increment, target.SP_MAX);
    if (target.SP == target.SP_MAX) {
        document.getElementById("rcvButton").disabled = false;
        clearInterval(recoverTask);
    }
    // console.log("SP: " + target.SP);
}