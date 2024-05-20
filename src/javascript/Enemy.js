export default class Enemy {
    constructor(x, y, imageNumber) {
        this.x = x;
        this.y = y;
        this.width = 44;
        this.height = 32;
        this.image = new Image();
        this.image.src = `./src/assets/images/enemy${imageNumber}.png`;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    move(xvelocity, yvelocity) {
        this.x += xvelocity;
        this.y += yvelocity;
    }

    collideWith(sprite) {
        if(
            this.x + this.width > sprite.x &&
            this.x < sprite.x + sprite.width &&
            this.y + this.height > sprite.y &&
            this.y < sprite.y + sprite.height
        ) {
            return true;
        }
        return false;
    }
}