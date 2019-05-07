class Enemy {
    constructor() {
        this.HP = 1;
        this.HP_MAX = 1;
        this.ATK = 14;
    }

    Attack(target) {
        target.SP -= this.ATK;

        if (target.SP <= 0) {
            target.HP = Math.max(target.HP + target.SP, 0);
            target.SP = 0;
        }

        this.ATK += this.ATK * 5 / 100;
    }
}