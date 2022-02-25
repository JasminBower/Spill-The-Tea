let bg;
let corgiImg;
let corgi;


function preload(){
    bg = loadImage('../images/inside palace.jpeg');
    corgiImg = loadImage('../images/palaceCorgi.png');
};

function setup(){
    const canvas = createCanvas(1600, 850);
    canvas.parent('game-room');
    corgi = new Dog(0, 0, 50, 50)
   

}

class GameObject{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    };

    draw(){
        image(img, this.x, this.y, this.width, this.height)
    };

    moveX(num){
        this.x += num;
    };

    moveY(num){
        this.y += num;
    };
}; 


class Dog extends GameObject{
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.x = x;
        this.y = y;
    }

    draw(){
        image(corgiImg, this.x, this.y, width, height);
    }
};






function draw(){
    background(bg)
    corgi.draw();
}