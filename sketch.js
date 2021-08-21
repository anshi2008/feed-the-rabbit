var garden,rabbit,apple,leaf,orangeleaf,redleaf;
var gardenImg,rabbitImg,appleImg,leafImg,orangeleafImg,redleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
  orangeleafImg = loadImage("orangeLeaf.png")
  redleafImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);

  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX

  var select_sprites = Math.round(random(1,3));
  if(frameCount % 80 == 0){
  if(select_sprites == 1)
  {createApples();}
  else if (select_sprites == 2)
  {createApples();}
  else{ createApples(); } }


  var select_sprites = Math.round(random(1,3));
  if(frameCount % 80 == 0){
  if(select_sprites == 1)
  {createLeaves();}
  else if (select_sprites == 5)
  {createLeaves();}
  else{ createLeaves(); } }

  var select_sprites = Math.round(random(1,3));
  if(frameCount % 80 == 0){
  if(select_sprites == 1)
  {createorangeLeaves();}
  else if (select_sprites == 2)
  {createorangeLeaves();}
  else{ createorangeLeaves(); } }

  var select_sprites = Math.round(random(1,3));
  if(frameCount % 80 == 0){
  if(select_sprites == 1)
  {createredLeaves();}
  else if (select_sprites == 2)
  {createredLeaves();}
  else{ createredLeaves(); } }
  drawSprites();
}

function createApples() {
apple = createSprite(random(50,350),40,10,10)
apple.addImage(appleImg)
apple.scale=0.10
apple.velocityY = 5
apple.lifetime = 150
}

function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10)
  leaf.addImage(leafImg)
  leaf.scale=0.10
  leaf.velocityY = 5
  leaf.lifetime = 150
}

function createorangeLeaves(){
  orangeleaf = createSprite(random(50,350),40,10,10)
  orangeleaf.addImage(orangeleafImg)
  orangeleaf.scale=0.10
  orangeleaf.velocityY = 5
  orangeleaf.lifetime = 150
}

function createredLeaves(){
  redleaf = createSprite(random(50,350),40,10,10)
  redleaf.addImage(redleafImg)
  redleaf.scale=0.10
  redleaf.velocityY = 5
  redleaf.lifetime = 150
}