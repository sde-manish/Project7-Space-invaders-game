import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import bulletController from "./BulletController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 565;

const background = new Image();
background.src = "images2/space.png";

const playerBulletController = new bulletController(canvas, 10, "red", true);
const enemyController = new EnemyController(canvas);
const player = new Player(canvas, 3);

function game() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    enemyController.draw(ctx);
    player.draw(ctx);
}


setInterval(game, 1000/60);