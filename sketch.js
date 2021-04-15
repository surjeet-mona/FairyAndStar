var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyImage,fairyVoice,fairyBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImage=loadImage("images/fairyImage1.png");
	fairyVoice=loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.play();

	//create fairy sprite and add animation for fairy
	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy=createSprite(100,600);
	fairy.addImage(fairyImage);
    fairy.scale=0.3;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	fairyBody= Bodies.circle(150,550,5,{isStatic:true})
	World.add(world,fairyBody);

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  fairy.x=fairyBody.position.x
  fairy.y=fairyBody.position.y

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y>470 && starBody.position.y>470){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode=== LEFT_ARROW) {
		fairyBody.position.x=fairyBody.position.x+ -20;
	}
	
	if(keyCode===RIGHT_ARROW){
		fairyBody.position.x=fairyBody.position.x+20;
	}
}
