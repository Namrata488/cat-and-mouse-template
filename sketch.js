var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {

    //DO:-load all the images
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/_______");
    tomImg2=loadAnimation("images/_______","images/______");
    tomImg3= loadAnimation("images/_______");
    jerryImg1=loadAnimation("images/_______");
    jerryImg2= loadAnimation("images/______","images/_______");
    jerryImg3=loadAnimation("images/_______");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("______", _______);
    tom.scale = _____;

    jerry = createSprite(200, 600);
    jerry.addAnimation("________", ________);
    jerry.scale = _____;

}

function draw() {

    background(____);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        //DO:- give zero velocity to tom
        tom.velocityX=___;
        tom.addAnimation("tomLastImage", ________);
        tom.x =____;
        tom.scale=____;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", _______);
        jerry.scale=____;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", __________);
        jerry.frameDelay = 25;
        jerry.changeAnimation("____________");
    }
}