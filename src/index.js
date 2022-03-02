let bg;
let corgiImg;
let corgi;
let teacup;
let teacupImg;
let teacupHeight = 100;
let teacupWidth = 100;
let cuthbertLives = 5;
let y = 1;

let teacupArray = [{x: 100, y: 0}, {x: 400, y: 0}, {x: 700, y: 0}, {x: 1000, y: 0}];



const splashScreen = document.querySelector('#splashscreen');
const gameScreen = document.querySelector('#game-screen');
const gameOverScreen = document.querySelector('#game-over-screen');


const startBtn = document.querySelector('#start-btn');
const gameOverBtn = document.querySelector('#game-over-btn');
const restartBtn = document.querySelector('#restart-btn');

function preload(){
    bg = loadImage('../images/inside palace.jpeg');
    corgiImg = loadImage('../images/palaceCorgi.png');
    teacupImg = loadImage('../images/teacup.png')
};


function setup(){
    const canvas = createCanvas(1600, 700);
    //canvas.parent('game-screen');
    corgi = new Dog(560, 520, 125, 125);
    teacup = new Tea(0, 0, teacupHeight, teacupWidth)

};

function draw(){
    background(bg)
    corgi.draw();
    rainTeacups();

    teacup.draw()
    if(y > 0){
        teacup.y += 2
    }

     if(keyIsDown(LEFT_ARROW)){
   corgi.moveX(-10)
 } else if(keyIsDown(RIGHT_ARROW)){
   corgi.moveX(10)
 } else if(keyIsDown(UP_ARROW)){
   corgi.moveY(-10)
 } else if(keyIsDown(DOWN_ARROW)){
   corgi.moveY(10)
 };
};

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
        //console.log(this.width, '<<<<<')
        image(corgiImg, this.x, this.y, this.width, this.height);
    }
      moveX(num){
        this.x += num;
    };

    moveY(num){
        this.y += num;
    };
};

class Tea extends GameObject{
    constructor(x, y, width, height){
        super(x, y, width, height)
    }

    draw(){
       image(teacupImg, this.x, this.y, this.width, this.height);
    };
}



function rainTeacups() {
teacupArray.forEach(cup => {
    ///console.log(cup, 'cup')
    let teapot = new Tea(cup.x, cup.y, teacupHeight, teacupWidth);
    teapot.draw();
    teapot.y += 10;
})
  
};

  window.addEventListener('load', () => {
      console.log('in load');
         //noCanvas()
        //  splashScreen.style.display = 'flex';
        //  gameScreen.style.display = 'none';
        //  gameOverScreen.style.display = 'none';

   
        startBtn.addEventListener('click', () => {
            console.log('am I clicking?')
           splashScreen.style.display = 'none';
            gameScreen.style.display = 'flex';
            gameOverScreen.style.display = 'none';
            rainTeacups()
        });

        gameOverBtn.addEventListener('click', () => {
            console.log('I lost the game boohoo')
            splashScreen.style.display = 'none';
            gameScreen.style.display = 'none';
            gameOverScreen.style.display = 'flex';

        });

        restartBtn.addEventListener('click', () => {
            console.log('agaiannnnnnnn')
            splashScreen.style.display = 'flex';
            gameScreen.style.display = 'none';
            gameOverScreen.style.display = 'none';
        })
    })





