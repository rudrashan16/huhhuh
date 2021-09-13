var boy,injection;
var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10,maze11,maze12,maze13,maze14,maze15,maze17,maze18,maze19,maze20,maze21,maze22,maze23,maze24,maze25,maze26,maze27,maze28,maze29,maze30,maze31,maze32,maze33,maze34,maze35,maze36,maze37,maze38,maze39,maze40,maze41,maze42,maze43,maze44,maze45,maze46,maze47,maze48,maze49,maze50,maze51,maze52;
function preload() {
boyImage=loadImage("infected_human.png");
slug1=loadImage("Slug.png");
slug2=loadImage("goul1.png")
smileImage=loadImage("smile.png");
injectionImage=loadImage("injection.png")

 }

function setup() {
  createCanvas(500,500);

   boy = createSprite(480,25,30,30);
  boy.addImage("boy",boyImage);
  boy.scale=0.1;

   injection = createSprite(35,190,30,30);
  injection.addImage("injection",injectionImage);
  injection.scale=0.18;

  monster1 =createSprite(390,450,40,40);
monster1.addImage("slug",slug1);
monster1.scale =0.3;

 monster =createSprite(160,65,40,40);
monster.addImage("monster",slug2);
monster.scale =0.1;

  maze=createSprite(250,3,500,5) 
  maze.shapeColor=("brown");

  maze1=createSprite(495,277,5,450) 
  maze1.shapeColor=("brown");

  maze2=createSprite(472,51,50,5) 
  maze2.shapeColor=("brown");
  
  maze3=createSprite(390,50,5,90) 
  maze3.shapeColor=("brown");

  maze4=createSprite(413,95,50,5) 
  maze4.shapeColor=("brown");

   maze5=createSprite(437,113,5,40) 
  maze5.shapeColor=("brown");

  maze6=createSprite(465,180,60,5) 
  maze6.shapeColor=("brown");

  maze7=createSprite(470,250,50,5) 
  maze7.shapeColor=("brown");

  maze7=createSprite(470,310,100,5) 
  maze7.shapeColor=("brown");

  maze7=createSprite(435,355,5,95) 
  maze7.shapeColor=("brown");

   maze8=createSprite(375,370,5,65) 
  maze8.shapeColor=("brown");

   maze9=createSprite(415,400,80,5) 
  maze9.shapeColor=("brown");

  maze10=createSprite(245,498,500,5) 
  maze10.shapeColor=("brown");

  maze11=createSprite(460,440,65,5) 
  maze11.shapeColor=("brown");

  maze12=createSprite(455,490,5,70) 
  maze12.shapeColor=("brown");

   maze13=createSprite(365,50,50,5) 
  maze13.shapeColor=("brown");

  maze14=createSprite(340,150,40,5) 
  maze14.shapeColor=("brown");

 maze15=createSprite(387,167,5,40) 
  maze15.shapeColor=("brown");

  maze16=createSprite(375,185,30,5) 
  maze16.shapeColor=("brown");

  maze17=createSprite(390,233,5,100) 
  maze17.shapeColor=("brown");

  maze18=createSprite(377,281,30,5) 
  maze18.shapeColor=("brown");

  maze19=createSprite(360,267,5,30) 
  maze19.shapeColor=("brown");

   maze20=createSprite(335,252,50,5) 
  maze20.shapeColor=("brown");

   maze21=createSprite(307,262,5,70) 
  maze21.shapeColor=("brown");

   maze22=createSprite(285,297,50,5) 
  maze22.shapeColor=("brown");

   maze23=createSprite(273,40,80,5) 
  maze23.shapeColor=("brown");

   maze24=createSprite(309,10,5,60) 
  maze24.shapeColor=("brown");

   maze25=createSprite(279,115,5,150) 
  maze25.shapeColor=("brown");

  maze26=createSprite(297,190,120,5) 
  maze26.shapeColor=("brown");

 maze27=createSprite(354,203,5,30) 
  maze27.shapeColor=("brown");

   maze28=createSprite(239,223,5,70) 
  maze28.shapeColor=("brown");

   maze29=createSprite(200,223,80,5); 
  maze29.shapeColor=("brown");

  maze30=createSprite(160,270,5,100); 
  maze30.shapeColor=("brown");

  maze31=createSprite(5,360,5,280); 
  maze31.shapeColor=("brown");

  maze32=createSprite(5,0,5,300); 
  maze32.shapeColor=("brown");

  maze33=createSprite(50,220,80,5); 
  maze33.shapeColor=("brown");

  maze33=createSprite(40,150,80,5); 
  maze33.shapeColor=("brown");


  maze34=createSprite(50,90,5,120); 
  maze34.shapeColor=("brown");

  maze35=createSprite(87,90,70,5); 
  maze35.shapeColor=("brown");

  maze36=createSprite(120,90,5,120); 
  maze36.shapeColor=("brown");

  maze37=createSprite(230,90,120,5); 
  maze37.shapeColor=("brown");

  maze38=createSprite(90,244,5,50); 
  maze38.shapeColor=("brown");

  maze39=createSprite(100,445,5,100); 
  maze39.shapeColor=("brown");

  maze40=createSprite(100,395,100,5); 
  maze40.shapeColor=("brown");
  
  maze41=createSprite(100,370,5,50); 
  maze41.shapeColor=("brown");

  maze42=createSprite(250,425,5,150); 
  maze42.shapeColor=("brown");

  maze44=createSprite(250,425,200,5); 
  maze44.shapeColor=("brown");

  maze45=createSprite(30,455,50,5); 
  maze45.shapeColor=("brown");

  maze46=createSprite(30,320,50,5); 
  maze46.shapeColor=("brown");

   maze47=createSprite(55,320,5,70); 
  maze47.shapeColor=("brown");

   maze48=createSprite(170,450,5,100); 
  maze48.shapeColor=("brown");

  maze49=createSprite(340,450,5,100); 
  maze49.shapeColor=("brown");

  maze50=createSprite(250,350,100,5); 
  maze50.shapeColor=("brown");

   maze51=createSprite(200,150,5,50); 
  maze51.shapeColor=("brown");

  maze52=createSprite(200,150,50,5); 
  maze52.shapeColor=("brown");

  
}

function draw() {
  background("lightblue");
  
  

         /* createEdgeSprites();
          boy.bounceOff(maze1);
          boy.bounceOff(maze2);
          boy.bounceOff(maze3);
          boy.bounceOff(maze4);
          boy.bounceOff(maze5);
          boy.bounceOff(maze6);
          boy.bounceOff(maze7);
          boy.bounceOff(maze8);
          boy.bounceOff(maze9);
          boy.bounceOff(maze10);
          boy.bounceOff(maze11);
          boy.bounceOff(maze12);
          boy.bounceOff(maze13);
          boy.bounceOff(maze14);
          boy.bounceOff(maze15);
          boy.bounceOff(maze16);
          boy.bounceOff(maze17);
          boy.bounceOff(maze18); 
          boy.bounceOff(maze19);
          boy.bounceOff(maze20);
          boy.bounceOff(maze21);
          boy.bounceOff(maze22);
          boy.bounceOff(maze23);
          boy.bounceOff(maze24);
          boy.bounceOff(maze25);
          boy.bounceOff(maze26);
          boy.bounceOff(maze27);
          boy.bounceOff(maze28);
          boy.bounceOff(maze29);
          boy.bounceOff(maze30);
          boy.bounceOff(maze31);
          boy.bounceOff(maze32);
          boy.bounceOff(maze33);
          boy.bounceOff(maze34);
          boy.bounceOff(maze35);
          boy.bounceOff(maze36);
          boy.bounceOff(maze37);
          boy.bounceOff(maze38);
          boy.bounceOff(maze39);
          boy.bounceOff(maze40);
          boy.bounceOff(maze41);
          boy.bounceOff(maze42);
          boy.bounceOff(maze43);
          boy.bounceOff(maze44);
          boy.bounceOff(maze45);
          boy.bounceOff(maze46);
          boy.bounceOff(maze47);
          boy.bounceOff(maze48);
          boy.bounceOff(maze49);
          boy.bounceOff(maze50);
          boy.bounceOff(maze51);
          boy.bounceOff(maze52);*/

          if(boy.isTouching(maze1)||boy.isTouching(maze2)||boy.isTouching(maze3)||boy.isTouching(maze4)||boy.isTouching(maze5)||boy.isTouching(maze6)||boy.isTouching(maze7)||boy.isTouching(maze8)||boy.isTouching(maze9)||boy.isTouching(maze10)||boy.isTouching(maze11)||boy.isTouching(maze12)|| boy.isTouching(maze13)||boy.isTouching(maze14)||boy.isTouching(maze15)||boy.isTouching(maze16)||boy.isTouching(maze17)||boy.isTouching(maze18)||boy.isTouching(maze19)||boy.isTouching(maze20)||boy.isTouching(maze21)||boy.isTouching(maze22)||boy.isTouching(maze23)||boy.isTouching(maze24)||boy.isTouching(maze25)||boy.isTouching(maze26)||boy.isTouching(maze27)||boy.isTouching(maze28)||boy.isTouching(maze29)||boy.isTouching(maze30)||boy.isTouching(maze31)||boy.isTouching(maze32)||boy.isTouching(maze32)||boy.isTouching(maze33)||boy.isTouching(maze34)||boy.isTouching(maze35)||boy.isTouching(maze36)||boy.isTouching(maze37)||boy.isTouching(maze38)||boy.isTouching(maze39)||boy.isTouching(maze40)||boy.isTouching(maze41)||boy.isTouching(maze42)||boy.isTouching(maze43)||boy.isTouching(maze44)||boy.isTouching(maze45)||boy.isTouching(maze46)||boy.isTouching(maze47)||boy.isTouching(maze48)||boy.isTouching(maze49)||boy.isTouching(maze50)||boy.isTouching(maze51)||boy.isTouching(maze52)) {
            boy.x=480;
            boy.y=25;
          }
 
          if (keyDown(RIGHT_ARROW)) {
            boy.x =boy.x+5;
            
            }
        
            if (keyDown(LEFT_ARROW)) {
              boy.x =boy.x-5;
              
              }
        
              if (keyDown(UP_ARROW)) {
                boy.y =boy.y-5;
                
                }
        
                if (keyDown(DOWN_ARROW)) {
                  boy.y =boy.y+5;
                  
                  }


  drawSprites();
}