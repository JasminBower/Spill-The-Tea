let bg;
let corgiImg;
let corgi;
let teacup;
let teacupImg;


function preload(){
    bg = loadImage('../images/inside palace.jpeg');
    corgiImg = loadImage('../images/palaceCorgi.png');
    teacupImg = loadImage('../images/teacup.png')
};

function setup(){
    const canvas = createCanvas(1600, 700);
    canvas.parent('game-room');
    corgi = new Dog(560, 520, 125, 125);

   

}

class GameObject{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    };

    // draw(){
    //     image(corgiImg, this.x, this.y, this.width, this.height)
    // };

    // moveX(num){
    //     this.x += num;
    // };

    // moveY(num){
    //     this.y += num;
    // };
}; 


class Dog extends GameObject{
    constructor(x, y, width, height){
        super(x, y, width, height);
    }

    draw(){
        console.log(this.width, '<<<<<')
        image(corgiImg, this.x, this.y, this.width, this.height);
    }
      moveX(num){
        this.x += num;
    };

    moveY(num){
        this.y += num;
    };
};






function draw(){
    background(bg)
    corgi.draw();
     if(keyIsDown(LEFT_ARROW)){
   corgi.moveX(-10)
 } else if(keyIsDown(RIGHT_ARROW)){
   corgi.moveX(10)
 } else if(keyIsDown(UP_ARROW)){
   corgi.moveY(-10)
 } else if(keyIsDown(DOWN_ARROW)){
   corgi.moveY(10)
 };
}