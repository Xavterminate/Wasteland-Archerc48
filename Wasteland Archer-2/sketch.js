var playerImage,player,enemy1,enemy1Image,enemy2,enemy2Image,arrow,arrowImage,backgroundImage,arrows, loaded;
var arrowGroup,enemy1Group,health,score,enemy2Group,gamestate,enemy3,enemy4,enemy3Group,enemy4Group;
var enemy3Image,enemy4Image,cannonBall,cannonBallImg,cannonBallGroup,shipParts;
function preload(){
    playerImage=loadImage("Archer-Character.png");
    backgroundImage=loadImage("Background.png");
    enemy1Image=loadImage("Enemy1.png");
    enemy2Image=loadImage("Enemy2.png");
    arrowImage=loadImage("Arrow.png");
    enemy3Image=loadImage("Cannon.png");
    enemy4Image=loadImage("FighterJet-E4.png");
    cannonBallImg=loadImage("CannonBall.png");
    arrows=20;
    loaded=true;
    arrowGroup=[];
    enemy1Group=[];
    enemy2Group=[];
    enemy3Group=[];
    enemy4Group=[];
    shipParts=0;
    health=3;
    score=0;
    gamestate=0;
}
function setup(){
    createCanvas(windowWidth,8000);
    player=createSprite(windowWidth/2,50,50,50);
    player.addImage("Basic",playerImage);
    player.scale=0.3;
    enemy1Spawn();
    enemy2Spawn();
    enemy3Spawn();
    enemy4Spawn();
   

}
function draw(){
    background(backgroundImage);
    drawSprites();
    player.debug=true;
   if(gamestate===0){
    
    fill("white");
    text("welcome to wasteland archer, a birds eye view battle game. ",width/2, 150);
    text("You are stranded in a desert wasteland. Your only hope of leaving is destroying the overlord",width/2, 200);
    text("Controls",width/2, 250)
    text("Press e to shoot, press r to reload, wasd to move, q for melee(WIP), mouse wheel to move camera.",width/2, 300);
    text("Progress down the screen, fighting enemies for points. Fight the boss ate the end",width/2, 350)
    text("WARNING. This game takes some time and can't be saved. Make sure you have plenty of time",width/2, 400);
    text("Press e to begin",width/2, 450);
    if(keyDown("E")){
        gamestate=1;
    }
   }
   if(gamestate===1){
    
    text("Arrows:"+arrows,player.position.x,player.position.y-70);
   text("Score:"+score,player.position.x,player.position.y-130);
   text("Health:"+health,player.position.x,player.position.y-100);
   
    if(keyDown("W")){
        player.position.y-=5;
    }
    if(keyDown("S")){
        player.position.y+=20;
    }
    if(keyDown("A")){
        player.position.x-=5;
    }
    if(keyDown("D")){
        player.position.x+=5;
    }
    if(keyDown("E")){
        arrowShoot();
    }
    if(keyDown("R")){
        if(arrows>0&&loaded===false){
            loaded=true
            arrows-=1;
        }
        
    }
    
    enemyCollides_1();
    enemyMove_1();
    enemyCollides_2();
    enemyMove_2();
    enemyCollides_4
    enemyMove_4();
    
    enemyCollides_3();
}
    if(gamestate===2){
        text("You lose")
    }
}

function enemy1Spawn(){
    for(var i=0;i<10;i++){
        enemy1=createSprite(Math.round(random(50,width)),Math.round(random(200,1000)),10,10);
        enemy1.addImage("enemyImage",enemy1Image);
        enemy1.scale=0.25;
        enemy1.debug=true;
        enemy1Group.push(enemy1);
        
    }
}
function arrowShoot(){
   
        if(loaded===true){arrow=createSprite(player.position.x,player.position.y,10,10);
            arrow.addImage("arrowImage",arrowImage);
            arrow.scale=0.3;
            arrow.velocity.y=40;
           
            loaded=false;
            arrowGroup.push(arrow);
        }
    
}
function enemyCollides_1(){
    for(var i=0;i<arrowGroup.length;i++){
        for(var j=0;j<enemy1Group.length;j++){
            if(arrowGroup[i].collide(enemy1Group[j])){
                console.log("collision succesful")
                
                arrowGroup[i].destroy();
                enemy1Group[j].destroy();
                score++
             
              
            i=0
            j=0
            }
        }
    }
    for(var i=0;i<enemy1Group.length;i++){
        if(enemy1Group[i].collide(player)){
            health-=1
            enemy1Group[i].destroy();

        }
    }
}
function enemyMove_1(){
    for(var i=0;i<enemy1Group.length;i++){
        if(enemy1Group[i].position.y>player.position.y&&enemy1Group[i].position.y<player.position.y+100){
            enemy1Group[i].velocity.y=-4;
        }
        if(enemy1Group[i].position.y<player.position.y&&enemy1Group[i].position.y>player.position.y-100){
            enemy1Group[i].velocity.y=4;
        }
        if(enemy1Group[i].position.x>player.position.x&&enemy1Group[i].position.x<player.position.x+100){
            enemy1Group[i].velocity.x=-4;
        }
        if(enemy1Group[i].position.x<player.position.x&&enemy1Group[i].position.x>player.position.x-100){
            enemy1Group[i].velocity.x=4;
        }
    }
}

function enemy2Spawn(){
    for(var i=0;i<30;i++){
        enemy2=createSprite(Math.round(random(10,width)),Math.round(random(970,3000)),10,10);
        enemy2.addImage("enemyImage",enemy2Image);
        enemy2.scale=0.25;
        enemy2.debug=true;
        enemy2Group.push(enemy2);

    }
}

function enemyCollides_2(){
    for(var i=0;i<arrowGroup.length;i++){
        for(var j=0;j<enemy2Group.length;j++){
            if(arrowGroup[i].collide(enemy2Group[j])){
                console.log("collision succesful")
                if(Math.round(random(0,2))===2){
                    arrows+=5
                }
                arrowGroup[i].destroy();
                enemy2Group[j].destroy();
                score+=3
             
              
            i=0
            j=0
            }
        }
    }
    for(var i=0;i<enemy2Group.length;i++){
        if(enemy2Group[i].collide(player)){
            health-=1
            enemy2Group[i].destroy();
        }
    }
}
function enemyMove_2(){
    for(var i=0;i<enemy2Group.length;i++){
        if(enemy2Group[i].position.y>player.position.y&&enemy2Group[i].position.y<player.position.y+100){
            enemy2Group[i].velocity.y=-4;
        }
        if(enemy2Group[i].position.y<player.position.y&&enemy2Group[i].position.y>player.position.y-100){
            enemy2Group[i].velocity.y=4;
        }
        if(enemy2Group[i].position.x>player.position.x&&enemy2Group[i].position.x<player.position.x+100){
            enemy2Group[i].velocity.x=-4;
        }
        if(enemy2Group[i].position.x<player.position.x&&enemy2Group[i].position.x>player.position.x-100){
            enemy2Group[i].velocity.x=4;
        }
    }
}
function enemy3Spawn(){
    for(var i=0;i<10;i++){
        enemy3=createSprite(Math.round(random(10,width)),Math.round(random(3000,5000)),10,10);
        enemy3.addImage("enemyImage",enemy3Image);
        enemy3.scale=0.25;
        enemy3.debug=true;
        enemy3Group.push(enemy3);

    }
}

function enemyCollides_3(){
    for(var i=0;i<arrowGroup.length;i++){
        for(var j=0;j<enemy3Group.length;j++){
            if(arrowGroup[i].collide(enemy3Group[j])){
                console.log("collision succesful")
                
                arrowGroup[i].destroy();
                enemy3Group[j].destroy();
                score+=5
             
              
            i=0
            j=0
            }
        }
    }
    for(var i=0;i<enemy3Group.length;i++){
        if(enemy3Group[i].collide(player)){
            health-=1
            enemy3Group[i].destroy();
        }
    }
}
function enemy4Spawn(){
    for(var i=0;i<40;i++){
        enemy4=createSprite(Math.round(random(10,width)),Math.round(random(5000,7500)),10,10);
        enemy4.addImage("enemyImage",enemy4Image);
        enemy4.scale=0.25;
        enemy4.debug=true;
        enemy4Group.push(enemy4);

    }
}

function enemyCollides_4(){
    for(var i=0;i<arrowGroup.length;i++){
        for(var j=0;j<enemy4Group.length;j++){
            if(arrowGroup[i].collide(enemy4Group[j])){
                console.log("collision succesful")
               
                    shipParts+=5
                
                arrowGroup[i].destroy();
                enemy4Group[j].destroy();
                score+=7
             
              
            i=0
            j=0
            }
        }
    }
    for(var i=0;i<enemy4Group.length;i++){
        if(enemy4Group[i].collide(player)){
            health-=1
            enemy4Group[i].destroy();
        }
    }
}
function enemyMove_4(){
    for(var i=0;i<enemy4Group.length;i++){
        if(enemy4Group[i].position.y>player.position.y&&enemy4Group[i].position.y<player.position.y+100){
            enemy4Group[i].velocity.y=-9;
        }
        if(enemy4Group[i].position.y<player.position.y&&enemy4Group[i].position.y>player.position.y-100){
            enemy4Group[i].velocity.y=9;
        }
        if(enemy4Group[i].position.x>player.position.x&&enemy4Group[i].position.x<player.position.x+100){
            enemy4Group[i].velocity.x=-9;
        }
        if(enemy4Group[i].position.x<player.position.x&&enemy4Group[i].position.x>player.position.x-100){
            enemy4Group[i].velocity.x=9;
        }
    }
}