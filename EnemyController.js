import Enemy  from "./Enemy.js";


export default class EnemyController {
    enemyMap = [
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 0]
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2]
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2]
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ]
    enemyRows = [];

    constructor(canvas) {
        this.canvas = canvas;
        this.createEnemies();
    }
    draw(ctx){}

    createEnemies()  {
        this.enemyMap.forEach((row, rowIndex) => {
            this.enemyRows[rowIndex] = [];
            row.forEach((enemyNumber, enemyIndex) => {
                if(enemyNumber > 0){
                    this.enemyRows[rowIndex].push(
                        new Enemy(enemyIndex * 50,rowIndex * 35, enemyNumber)
                    );
                };
            });
        });

    }
}