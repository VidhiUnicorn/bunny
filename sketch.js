var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leavesImg = loadImage ("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;

  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 === 0){
    if(select_sprites === 1){
      create_apples();
  }
   else{
      create_leaves();
  }

}
  drawSprites();
}

function create_apples(){
  var apples = createSprite (random(50,350) ,40,10,10);
  apples.addImage(applesImg);
  apples.scale = 0.09;
  apples.velocityY = 3;
  apples.lifeTime = 400;

  
}

function create_leaves(){
  var leaves = createSprite (random(50,350), 40, 10, 10);
  leaves.addImage(leavesImg);
  leaves.scale = 0.09;
  leaves.velocityY = 3;
  leaves.lifeTime = 400;

}