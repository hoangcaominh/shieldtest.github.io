var canvas = document.getElementById("cvs");
var ctx = canvas.getContext("2d");
// ctx.canvas.height = 100;

const fontSize = 27;
const padding = {
    x: 20,
    y: 40
};

ctx.canvas.width = screen.width - 20;
ctx.canvas.height = padding.y * 2 + fontSize * 1.8;

ctx.font = fontSize + "px Arial";