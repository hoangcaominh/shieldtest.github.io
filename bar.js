class Bar {
    constructor(text, x, y, width, height, color) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        
        ctx.fillStyle = "#000000";
        ctx.fillText(this.text, this.x, this.y, 100);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + fontSize * 1.8, this.y - this.height, this.width, this.height);
    }

    Show(numerator, denominator) {
        var fraction = numerator / denominator;
        ctx.fillStyle = this.color;
        ctx.clearRect(this.x + fontSize * 1.8, this.y - this.height, screen.width, this.height);
        ctx.fillRect(this.x + fontSize * 1.8, this.y - this.height, this.width * fraction, this.height);
        ctx.fillStyle = "#000000";
        ctx.fillText(Math.ceil(numerator) + "/" + Math.ceil(denominator), this.x + fontSize * 2.4 + this.width, this.y, 100);
    }
}