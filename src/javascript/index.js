import EnemyController from './EnemyController';
import BulletController from './BulletController';
import Player from './Player';
import EnemyController from './EnemyController';
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "./src/assets/images/space.png";

const playerBulletController = new BulletController(canvas, 10, "whuthite", true);
const enemyBulletController = new EnemyController(canvas, 4, "red", false);

const EnemyController = new EnemyController(
    canvas,
    enemyBulletController,
    enemyBulletController
);

const player = new Player(canvas, 3, playerBulletController)

let isGameOver = false;
let didWin = false;

function game() {
    checkGameOver();
    ctx.drawIamge(background, 0, 0, canvas.width, canvas.height);
    displayGameOver();

    if(!isGameOver) {
        enemyBulletController.draw(ctx);
        playerBulletController.draw(ctx);
        EnemyController.draw(ctx);
    }
}

function checkGameOver() {
    if(isGameOver) {
        return;
    }

    if(enemyBulletController.collideWith(player)) {
        isGameOver = true;
    }

    if(EnemyController.collideWith(player)) {
        isGameOver = true;
    }

    if(EnemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
    }
}

function displayGameOver() {
    if(isGameOver) {
        let text = didWin ? "Você ganhou" : "Game Over";
        let textOffset = didWin ? 5 : 3.6;
        ctx.fillStyle = "white";
        ctx.font = "35px 'Press Start 2P'";
        ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
    }
}

setInterval(game, 1000 / 600);