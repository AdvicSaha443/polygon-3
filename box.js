class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          'restitution': 0.5,
          'friction': 1,
          'density': 1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed < 3) {
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        } else {
        World.remove(world, this.body);
        push()
        this.Visiblity = this.Visiblity -5;
        tint(255, this.Visiblity);
        pop();
        }
    }

    score() {
      if (this.Visiblity < 0 && this.Visiblity > -105) {
        score++;
      }
    }
    
  };


 