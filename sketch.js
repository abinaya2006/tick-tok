var hours,mins,secs;


function preload(){
  ha=loadImage("hall.jpg")
}
function setup() {
  createCanvas(1380,800);
  angleMode(DEGREES);
}

function draw() {
  background(ha);


   
 stroke("orange")
 fill ("orange")
 rect(730, 350,255, 75, 20);

 h = hour();

 noStroke()
 fill("green")
 textSize(50)
text( h%12+":",735, 400);

m=minute()
noStroke()
 fill("green")
 textSize(50)
text( m+":",815, 400);

s=second()
noStroke()
 fill("green")
 textSize(50)
text( s,895, 400);
  hours=hour();
  mins=minute();
  secs=second();
  translate(200,200);
  rotate(-90);
  scAngle=map(secs,0,60,0,360);
  mAngle=map(mins,0,60,0,360);
  hourAngle=map(hours%12,0,12,0,360);
  //Seconds Hand
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,90,0);
  pop();
  //Seconds Arc
  strokeWeight(10);
  stroke("red");
  noFill()
  arc(0,0,300,300,0,scAngle);
  drawSprites();
  //Minute Hand
  push();
  rotate(mAngle);
  stroke("black");
  strokeWeight(7);
  line(0,0,80,0);
  pop();
  //Minutes Arc
  strokeWeight(10);
  noFill();
  stroke("black");
  arc(0,0,280,280,0,mAngle);
  //Hour Hand
  push();
  rotate(hourAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  //Hour Arc
  strokeWeight(10);
  noFill();
  stroke("yellow");
  arc(0,0,260,260,0,hourAngle);



   
  drawSprites();
}