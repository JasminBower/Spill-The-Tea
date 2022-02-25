let bg;
let corgi;


function preload(){
    bg = loadImage('../images/inside palace.jpeg');
    corgi = loadImage('../images/palaceCorgi.png');
};

function setup(){
    const canvas = createCanvas(1600, 850);
    canvas.parent('game-room');
   

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





function draw(){
    background(bg)
}