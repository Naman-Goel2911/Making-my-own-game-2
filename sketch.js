var boy, boyAnimation, boyImage;
var zombie, zombieAnimation;
var ghost, ghostAnimation;
var islandImage;
var canvas;
var back;
var edges;

//add ghosts,zombies, power potatoes
//feedback as the score        

function preload()
{
  //load animation for the boy, zombie, ghost, island
  boyStanding = loadAnimation("Images/boystanding.png");
  boyWalkingR = loadAnimation("Images/boywalkingr1.png", "Images/boywalkingr2.png", "Images/boywalkingr3.png", "Images/boywalkingr4.png", "Images/boywalkingr5.png", "Images/boywalkingr6.png", "Images/boywalkingr7.png", "Images/boywalkingr8.png");
  boyWalkingL = loadAnimation("Images/boywalkingl1.png", "Images/boywalkingl2.png", "Images/boywalkingl3.png", "Images/boywalkingl4.png", "Images/boywalkingl5.png", "Images/boywalkingl6.png", "Images/boywalkingl7.png", "Images/boywalkingl8.png");

  zombieAnimation = loadAnimation("Images/zombiewalking1.png", "Images/zombiewalking2.png", "Images/zombiewalking3.png", "Images/zombiewalking4.png", "Images/zombiewalking5.png", "Images/zombiewalking6.png", "Images/zombiewalking7.png", "Images/zombiewalking8.png",);

  ghostAnimation = loadAnimation("Images/ghostwalking1.png", "Images/ghostwalking2.png", "Images/ghostwalking3.png", "Images/ghostwalking4.png", "Images/ghostwalking5.png", "Images/ghostwalking6.png", "Images/ghostwalking7.png", "Images/ghostwalking8.png");

  islandImage = loadImage("Images/islandimage.jpg");

  //back = loadImage();
}

function setup() 
{
  //create a boy, give animation appropriately.

  canvas = createCanvas(displayWidth, displayHeight);

  edges = createEdgeSprites();

  back = createSprite((displayWidth-50)/2, (displayHeight-100)/2, displayWidth*3, displayHeight*3);
  back.addImage(islandImage);
  
  boy = createSprite((displayWidth-50)/2, (displayHeight-100)/2,  50, 130);
  boy.addAnimation("boyIsStanding", boyStanding);
  boy.addAnimation("boyIsWalkingL", boyWalkingL);
  boy.addAnimation("boyIsWalkingR", boyWalkingR);

  boy.scale = 0.6
}

function draw() 
{
  //back = background(islandImage);  
  background(255);
  //imageMode(CENTER);
  //image(islandImage, (displayWidth-50)/2, (displayHeight-100)/2, displayWidth*3, displayHeight*3);
  drawSprites();


  if(keyDown("w"))
  {
     boy.changeAnimation("boyIsWalkingL", boyWalkingL);
     boy.y = boy.y - 10;
  }
  if(keyDown("s"))
  {
     boy.changeAnimation("boyIsWalkingR", boyWalkingR);
     boy.y = boy.y + 10;
  }
  if(keyDown("a"))
  {
     boy.changeAnimation("boyIsWalkingL", boyWalkingL);
     boy.x = boy.x - 10;
  }
  if(keyDown("d"))
  {
   boy.changeAnimation("boyIsWalkingR", boyWalkingR);
   boy.x = boy.x + 10;
  }

  camera.position.x = boy.x;
  camera.position.y = boy.y;

  boy.collide(edges);
}

function spawnZombie()
{
  
}

function spawnGhost()
{

}

