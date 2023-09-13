import EnemyController from "./EnemyController.js";
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.Width = 600;
canvas.height = 600;

const background = new Image();
background.src = "images2/space.png";

const enemyController = new EnemyController(canvas);

function game() {
    ctx.drawImage(background, 0, 0, canvas.Width, canvas.height);
    enemyController.draw(ctx);
}


setInterval(game, 1000/60);