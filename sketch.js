var database ,dog,dog1,dog2
var position
//var form
var feed,add
var foodobject
var Feedtime
var Lastfeed
//Create variables here

function preload()

{
  dogimg1 = loadImage("images/dogImg.png")
  dogimg2 = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
  console.log(database);
 
  //foodobject=new Food()
  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg1)
  dog.scale=0.2
 
  var dogo = database.ref('Food');
  dogo.on("value", readPosition, showError);
  

} 

function draw(){
 background(46,139,87);

 if(keyWentDown(UP_ARROW)){
  writePosition(position);
  dog.addImage(dogimg2);
}
 
 drawSprites();
 fill(255,255,254);
  stroke("black");
  text("Food remaining : "+position,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20); 
 fill(255,255,254);
 textSize(15);


}
function readPosition(data){
  position = data.val();
  
}

function showError(){
  console.log("Error in writing to the database");
}

function writePosition(nazo){
  if(nazo<=0){
    nazo=0;
  }else{
    nazo=nazo-1;
  } 
  database.ref('/').set({
    'Food': nazo
  })

}

