class BulletController {
    bullet = [];
    timeTillNextBulletAllowed = 0;

    constructor(canvas, maxBulletAtTime, bulletColor, soundEnable) {
        this.canvas = canvas;
        this.maxBulletAtTime = maxBulletAtTime;
        this.bulletColor = bulletColor;
        this.soundEnable = soundEnable;
        
        this.bulletSound = new Audio("src/assets/sound/shoot.wav");
        this.bulletSound.volume = 0.1;
    } 
}