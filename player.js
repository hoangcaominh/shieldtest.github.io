class Player {
    constructor() {
        this.Name = "Noname";
        this.HP = 30;
        this.HP_MAX = 30;
        this.SP = 30;
        this.SP_MAX = 30;
        this.ATK = 1;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(this.Name, padding.x, padding.y, screen.width);
        this.HPBar = new Bar("HP", padding.x, padding.y + fontSize, 400, 20, "#FF0000");
        this.SPBar = new Bar("SP", padding.x, padding.y + fontSize * 2, 400, 20, "#15BCF4");
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

var allowLevelUp = true;

function SPRecovered(target) {
    // SP_MAX increment formula
    if (allowLevelUp) {
        target.SP_MAX += Math.round((target.SP_MAX - target.SP) * 15 / 100);
    }
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
    allowLevelUp = false;
    target.SP = Math.min(target.SP + increment, target.SP_MAX);
    if (target.SP == target.SP_MAX) {
        allowLevelUp = true;
        document.getElementById("rcvButton").disabled = false;
        clearInterval(recoverTask);
    }
    // console.log("SP: " + target.SP);
}