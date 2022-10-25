var sprite;


function setup() {
    createCanvas(600,600);
    sprite = createSprite(300,300,40,40);
    sprite.y = sprite.height/2;
 
}


function draw() {
   background(0);
   sprite.velocity.y = 6;


   console.log(sprite.y);

   if(sprite.y > 600){
    sprite.y = sprite.height/2;
   }



   drawSprites();
}