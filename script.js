var player = new Player();
var enemy = new Enemy();
var delay = 10, refresh = setInterval(draw, delay);
var attackTask, healTask, recoverTask;

function draw() {
    player.HPBar.Show(player.HP, player.HP_MAX);
    player.SPBar.Show(player.SP, player.SP_MAX);
}

function AttackButton() {
    multiplier = 2, stop = enemy.ATK;
    document.getElementById("atkButton").disabled = true;
    attackTask = setInterval(Attack, delay, enemy, player);
    console.log(enemy.Name + "'s attack! " + Math.floor(enemy.ATK) + " damage to " + player.Name + "!");
    enemy.ATK += Math.round(enemy.ATK * 5 / 100);
}

function HealButton() {
    if (player.HP < player.HP_MAX) {
        document.getElementById("healButton").disabled = true;
        healTask = setInterval(Heal, delay, player);
        console.log(player.Name + " used Heal");
    }
}

function RecoverButton() {
    if (player.SP < player.SP_MAX) {
        document.getElementById("rcvButton").disabled = true;
        increment = SPRecovered(player);
        recoverTask = setInterval(Recover, delay, player);
        console.log(player.Name + " used Recover");
    }
}