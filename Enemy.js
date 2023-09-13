export default class Enemy {
    constructor (x, y, imageNumber){
        this.x = x;
        this.y = y;
        this.width = 44;
        this.height = 32;

        this.image = new Image();
        this.Image.src = `images2/enemy${imageNumber}.png`;

    }
}