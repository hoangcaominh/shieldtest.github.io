class Bar {
    constructor(text, x, y, width, height, color) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(this.text, this.x, this.y, screen.width);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + fontSize * 1.8, this.y - this.height, this.width, this.height);
    }

    /*
    lerp(a, b, percentage) {
        return (b - a) * percentage + a;
    }
    */

    Show(numerator, denominator) {
        var fraction = numerator / denominator;
        ctx.fillStyle = this.color;
        /*
        if (this.color != "#FF0000") {
            ctx.fillStyle = this.color;
        } else {
            if (fraction > 0.5) {
                ctx.fillStyle = "rgb(" + this.lerp(255, 0, (fraction - 0.5) * 2) + ", 255, 0)";
            } else {
                ctx.fillStyle = "rgb(255, " + this.lerp(0, 255, fraction * 2) + ", 0)";
            }
        }
        */
        ctx.clearRect(this.x + fontSize * 1.8, this.y - this.height, screen.width, this.height);
        ctx.fillRect(this.x + fontSize * 1.8, this.y - this.height, this.width * fraction, this.height);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(Math.ceil(numerator) + "/" + Math.ceil(denominator), this.x + fontSize * 2.4 + this.width, this.y, screen.width);
    }
}