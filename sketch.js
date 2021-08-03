var iss, spacebg;
var spacecraft, spacecraftImg1, spacecraftImg2, spacecraftImg3, spacecraftImg4;
var hasDocked = false;

function preload(){
  issImg = loadImage("iss.png");
  spacebgImg = loadImage("spacebg.jpg");
  spacecraftImg1 = loadImage("spacecraft1.png");
  spacecraftImg2 = loadImage("spacecraft2.png");
  spacecraftImg3 = loadImage("spacecraft3.png");
  spacecraftImg4 = loadImage("spacecraft4.png");

}

function setup() {
  createCanvas(800,400);
  bg = createSprite (300,200)
  bg.addImage(spacebgImg);
  bg.scale = 1.5;


  iss = createSprite (400, 200, 20 ,20);
  iss.addImage(issImg);
  iss.scale = 0.3;

  spacecraft = createSprite(400, 300, 20, 20);
  spacecraft.addImage(spacecraftImg1);
  spacecraft.scale = 0.1;




 
}

function draw() {
  background(255,255,255);  

  if(!hasDocked){

    if(keyDown(LEFT_ARROW)){
     spacecraft.addImage(spacecraftImg3);
     spacecraft.position.x = 395;
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraftImg4);
      spacecraft.position.x = 405;
     }

     if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraftImg2);
     }

     if(keyDown(UP_ARROW)){
      spacecraft.velocityY = -0.5;
     }
  }
  
  if(spacecraft.isTouching(iss)){
    var hasDocked = true;
    text("Docking Successful!", 400, 100);
 

  }

  drawSprites();
}