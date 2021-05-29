class Iron {
    constructor(x,y){

      var  options = {
            restitution : 0.8,
            friction : 3,
            density :30
        }

        this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x,y,50,50, options)
		World.add(world, this.body);
        this.width = 50
        this.height = 50

    }

display()
{

    var ironpos=this.body.position;	
    var angle = this.body.angle	
			push()
			translate(ironpos.x, ironpos.y);
            rotate (angle)

			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("pink");
    rect(0,0,this.width,this.height)
    pop()
}



}






