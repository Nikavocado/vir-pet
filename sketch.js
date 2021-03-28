//Create variables here
var dog,dogImg,happyDogImg,database,foodS,foodStack;


function preload()
{
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")

	//load images here
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  foodStock=database.ref("food")
  foodStock.on("value",readStock)
  foodStock.set(20)

  dog=createSprite(250,350,10,60);
  dog.addImage(dogImg)
  dog.scale=0.2;

}
bakckground("green")
if(food!==undefined){
  textSize(20)
  fill(255)
  text("press Up Arrow to feed milk",50,50)
  text("food remaining:"+foodS,50,50);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImg);
  }
if(keyWentUp(UP_ARROW)){
  dog.addImage(happyDogImg)

}
if(foodS===0){
  foodS=20;
  
}

drawSprites();

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
  database.ref("/").update({
  Food:x

  })
}
function readStock(data){
  foodS=data.val();
}

}

function draw() {  

  drawSprites();
  //add styles here

}



