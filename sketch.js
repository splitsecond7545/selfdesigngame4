var house1,house2,house3, house4;
var person1, person2, person3, person4;
var covid;
var edges = [];
var pc;


function setup() {
  createCanvas(1200,800);
  //fill("white");
  house1 = createSprite(143, 40, 300, 200);
  house1.shapeColor = "white";

  house2 = createSprite( 1044, 40, 300, 200);
  house2.shapeColor = "white";

  house3 = createSprite(153, 701, 300, 200);
  house3.shapeColor = "white";

  house4 = createSprite(1050, 701, 300, 200);
  house4.shapeColor = "white";

  person1 = createSprite(150, 50, 20, 20);
  person1.shapeColor = "green";

  person2 = createSprite(1050, 50, 20, 20);
  person2.shapeColor = "green";

  person3 = createSprite(150, 771, 20, 20);
  person3.shapeColor = "green";

  person4 = createSprite(1050, 771, 20, 20);
  person4.shapeColor = "green";

  pc = createSprite(50, 50, 20, 20);
  pc.shapeColor = "green";

  covid = createSprite(600, 400, 10, 10);
  covid.shapeColor = "red";

  edges = createEdgeSprites();
}

function draw() {
  background(0);
  
  if(keyIsDown(UP_ARROW)){
    pc.velocityX = 0;
    pc.velocityY = -3;
  }

  if(keyIsDown(DOWN_ARROW)){
    pc.velocityX = 0;
    pc.velocityY = 3;
  }

  if(keyIsDown(LEFT_ARROW)){
    pc.velocityX = -3;
    pc.velocityY = 0;
  }

  if(keyIsDown(RIGHT_ARROW)){
    pc.velocityX = 3;
    pc.velocityY = 0;
  }
  
  //covid.velocityX = 2;
  //covid.velocityY = 4;
  if(covid.isTouching(edges[0]) || covid.isTouching(edges[1]) ||  covid.isTouching(edges[2]) || covid.isTouching(edges[3])){
      covid.bounceOff(edges[0]);
      covid.bounceOff(edges[1]);
      covid.bounceOff(edges[2]);
      covid.bounceOff(edges[3]);
      covid.velocityX = covid.velocityX * (-1);
      covid.velocityY = covid.velocityY * (-1);
  }
  if(covid.isTouching(house1) || covid.isTouching(house2) ||  covid.isTouching(house3) || covid.isTouching(house4)){
    covid.bounceOff(house1);
    covid.bounceOff(house2);
    covid.bounceOff(house3);
    covid.bounceOff(house4);
    covid.velocityX = covid.velocityX * (-1);
    covid.velocityY = covid.velocityY * (-1);
}

person1.velocityX = 3.5;
person1.velocityY = 3;


if(person1.isTouching(edges[0]) || person1.isTouching(edges[1]) ||  person1.isTouching(edges[2]) || person1.isTouching(edges[3])){
  person1.bounceOff(edges[0]);
  person1.bounceOff(edges[1]);
  person1.bounceOff(edges[2]);
  person1.bounceOff(edges[3]);
}
if(person1.isTouching(house1) || person1.isTouching(house2) ||  person1.isTouching(house3) || person1.isTouching(house4)){
person1.bounceOff(house1);
person1.bounceOff(house2);
//person1.bounceOff(house3);
//person1.bounceOff(house4);
}

if(person1.isTouching(covid)){
  person1.shapeColor = "red";
}

if(person1.shapeColor === "red"){
  fill("red");
  textSize(15);
  text("PERSON 1 GOT INFECTED WITH COVID-19. PERSON 1 MUST GO INTO ISOLATION", 300, 50);
}


person2.velocityX = -3;
person2.velocityY = 2.9;


if(person2.isTouching(edges[0]) || person2.isTouching(edges[1]) ||  person2.isTouching(edges[2]) || person2.isTouching(edges[3])){
  person2.bounceOff(edges[0]);
  person2.bounceOff(edges[1]);
  person2.bounceOff(edges[2]);
  person2.bounceOff(edges[3]);
}
if(person2.isTouching(house1) || person2.isTouching(house2) ||  person2.isTouching(house3) || person2.isTouching(house4)){
person2.bounceOff(house1);
person2.bounceOff(house2);
//person2.bounceOff(house3);
//person2.bounceOff(house4);
}

if(person3.isTouching(edges[0]) || person3.isTouching(edges[1]) ||  person3.isTouching(edges[2]) || person3.isTouching(edges[3])){
  person3.bounceOff(edges[0]);
  person3.bounceOff(edges[1]);
  person3.bounceOff(edges[2]);
  person3.bounceOff(edges[3]);
}

if(person4.isTouching(edges[0]) || person4.isTouching(edges[1]) ||  person4.isTouching(edges[2]) || person4.isTouching(edges[3])){
  person4.bounceOff(edges[0]);
  person4.bounceOff(edges[1]);
  person4.bounceOff(edges[2]);
  person4.bounceOff(edges[3]);
}

if(person2.isTouching(covid)){
  person2.shapeColor = "red";
}

if(person2.shapeColor === "red"){
  fill("red");
  textSize(15);
  text("PERSON 2 GOT INFECTED WITH COVID-19. PERSON 2 MUST GO INTO ISOLATION", 300, 100);
}

if(person3.isTouching(person2)){
  person3.shapeColor = "red";
}

if(person3.shapeColor === "red"){
  fill("red");
  textSize(15);
  text("PERSON 3 GOT INFECTED WITH COVID-19. PERSON 3 MUST GO INTO ISOLATION", 300, 150);
}

if(person4.isTouching(person1)){
  person4.shapeColor = "red";
}

if(person4.shapeColor === "red"){
  fill("red");
  textSize(15);
  text("PERSON 4 GOT INFECTED WITH COVID-19. PERSON 4 MUST GO INTO ISOLATION", 300, 200);
}

if(person3.shapeColor === "red" && person4.shapeColor === "red"){
  person3.velocityX = +3;
  person3.velocityY = -3;

  person4.velocityX = -3;
  person4.velocityY = -3;

  person1.velocityY = -3;
  person2.velocityY = -3;
}

covid_movement();

//person3.velocityX = 2;
//person4.velocityX = -2;
  drawSprites();
}

function covid_movement(){
  if(person1.shapeColor === "red" && person2.shapeColor === "red"){
    covid.velocityY = -2;
  console.log(frameCount);
  }

  if(covid.isTouching(edges[0]) || covid.isTouching(edges[1]) ||  covid.isTouching(edges[2]) || covid.isTouching(edges[3])){
    covid.bounceOff(edges[0]);
    covid.bounceOff(edges[1]);
    covid.bounceOff(edges[2]);
    covid.bounceOff(edges[3]);
    covid.velocityX = covid.velocityX * (-1);
    covid.velocityY = covid.velocityY * (-1);
}
}