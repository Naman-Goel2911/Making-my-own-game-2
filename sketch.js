var boy, boyAnimation, boyImage;
var zombie, zombieAnimation;
var ghost, ghostAnimation;
var islandImage;

function preload()
{
  //load animation for the boy, zombie, ghost, island
  boyImage = loadImage("Images/boystanding.png");
  boyAnimation = loadAnimation("Images/boywalking1.png", "Images/boywalking2.png", "Images/boywalking3.png", "Images/boywalking4.png", "Images/boywalking5.png", "Images/boywalking6.png", "Images/boywalking7.png", "Images/boywalking8.png");

  zombieAnimation = loadAnimation("Images/zombiewalking1.png", "Images/zombiewalking2.png", "Images/zombiewalking3.png", "Images/zombiewalking4.png", "Images/zombiewalking5.png", "Images/zombiewalking6.png", "Images/zombiewalking7.png", "Images/zombiewalking8.png",);

  ghostAnimation = loadAnimation("Images/ghostwalking1.png", "Images/ghostwalking2.png", "Images/ghostwalking3.png", "Images/ghostwalking4.png", "Images/ghostwalking5.png", "Images/ghostwalking6.png", "Images/ghostwalking7.png", "Images/ghostwalking8.png");

  islandImage = loadImage("Images/islandimage.jpg");
}

function setup() 
{
  //create a boy, give animation appropriately.

  createCanvas(displayWidth*3, displayHeight*3);
  
  boy = createSprite(3000, 430, 50, 130);
  boy.addImage("boyIsStanding", boyImage);
  boy.scale = 0.8
}

function draw() 
{
  background(islandImage);  

  if(keyDown("w"))
  {
     boy.changeAnimation("boyIsWalking", boyAnimation);
     boy.y = boy.y + 10;
  }
  if(keyDown("s"))
  {
     boy.changeAnimation("boyIsWalking", boyAnimation);
     boy.y = boy.y - 10;
  }
  if(keyDown("a"))
  {
     boy.changeAnimation("boyIsWalking", boyAnimation);
     boy.x = boy.x - 10;
  }
  if(keyDown("d"))
  {
     boy.changeAnimation("boyIsWalking", boyAnimation);
     boy.x = boy.x + 10;
  }

  camera.position.x = boy.x;
  camera.position.y = boy.y;

  drawSprites();
}

function spawnZombie()
{
  
}

function spawnGhost()
{

}

