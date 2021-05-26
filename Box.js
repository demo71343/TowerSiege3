class Box {
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0.0
         
      }
      this.image=loadImage("block.png");
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    score(){
      if(this.visibility < 0 && this.visibility >= -105){
        score++;
      }
    }
    display(){

      
        var pos= this.body.position;
        if(this.body.speed <3){
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
      else{
        
        push();
        this.visibility = this.visibility - 5;
        tint(255,this.visibility);
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
        pop();
        World.remove(world, this.body);
    }
  }
}