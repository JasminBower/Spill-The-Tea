let bg;
let corgiImg;
let corgi;
let teacup;
let teacupImg;
let teacupHeight = 100;
let teacupWidth = 100;
let cuthbertLives = 10;
let gameOver = false;


let teacupArray = [{x: 100, y: 600, teacupHeight, teacupWidth}, {x: 400, y: 900, teacupHeight, teacupWidth}, {x: 700, y: 500, teacupHeight, teacupWidth}, {x: 1000, y: 1800, teacupHeight, teacupWidth}];



const splashScreen = document.querySelector('#splashscreen');
const gameScreen = document.querySelector('#game-screen');
const gameOverScreen = document.querySelector('#game-over-screen');


const startBtn = document.querySelector('#start-btn');
const gameOverBtn = document.querySelector('#game-over-btn');
const restartBtn = document.querySelector('#restart-btn');

let score = document.querySelector('#score')

function preload(){
    bg = loadImage('../images/inside palace.jpeg');
    corgiImg = loadImage('../images/palaceCorgi.png');
    teacupImg = loadImage('../images/teacup.png')
};


function setup(){
    const canvas = createCanvas(1600, 700);
    //canvas.parent('game-screen');
    corgi = new Dog(560, 520, 125, 125);
    //teacup = new Tea(0, 0, teacupHeight, teacupWidth)

};

function draw(){
    background(bg)
    corgi.draw();
    if(teacupArray.length === 0){
    teacupArray =  [{x: 100, y: 800, teacupHeight, teacupWidth}, {x: 400, y: 900, teacupHeight, teacupWidth}, {x: 700, y: 700, teacupHeight, teacupWidth}, {x: 1000, y: 1800, teacupHeight, teacupWidth}]
    } 

teacupArray.forEach((cup, i )=> {
    let teacup = new Tea(cup.x, cup.y, teacupHeight, teacupWidth);
    teacup.draw();

      if(cup.y >= 0 && cuthbertLives >= 6 ){
        cup.y += 1
    } else if(cup.y >= 0){
        cup.y += 2
    }

    if(cup.y == 520 || cup.y == 521 ){
       cuthbertLives--
       score.innerHTML = `Score: ${cuthbertLives}`;
    };
    
    if (cup.y >= 700){
       cup.y = 0;
    };

    if(cuthbertLives === 0){
    
    gameOver = true;

};

    

if(corgi.x + corgi.width >= cup.x && corgi.x <= cup.x + cup.teacupWidth && 
corgi.y + corgi.width >= cup.y && corgi.y <= cup.y + cup.teacupHeight && corgi.x + corgi.width + corgi.height >= cup.x && corgi.x + corgi.width + corgi.height >= cup.x + cup.teacupHeight){
    
teacupArray.splice(i, 1)

} 


});




    
    
   if(keyIsDown(LEFT_ARROW) && corgi.x > 0){
   corgi.moveX(-10)
 } else if(keyIsDown(RIGHT_ARROW) && corgi.x + corgi.width < 1600){
   corgi.moveX(10)
 } else if(keyIsDown(UP_ARROW) && corgi.y > 0){
   corgi.moveY(-10)
 } else if(keyIsDown(DOWN_ARROW) && corgi.height + corgi.y < 645){
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

}; 


class Dog extends GameObject{
    constructor(x, y, width, height){
        super(x, y, width, height);
    }

    draw(){
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
};
// function isGameOver(){
//  console.log('game-over-boo') 
// }


  window.addEventListener('load', () => {
      console.log('in load');
    
   
        startBtn.addEventListener('click', () => {
            console.log('am I clicking?')
           splashScreen.style.display = 'none';
            gameScreen.style.display = 'flex';
            gameOverScreen.style.display = 'none';
        });




        if(gameOver === true){
            console.log('I lost the game boohoo')
            splashScreen.style.display = 'none';
            gameScreen.style.display = 'none';
            gameOverScreen.style.display = 'flex';

        }

        // gameOverBtn.addEventListener('click', () => {
         
        // });

        restartBtn.addEventListener('click', () => {
            console.log('agaiannnnnnnn')
            splashScreen.style.display = 'flex';
            gameScreen.style.display = 'none';
            gameOverScreen.style.display = 'none';
        })
    })





