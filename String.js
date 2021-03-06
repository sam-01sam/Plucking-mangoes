class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.01,
            length: 40,       
        }
        this.pointB = pointB;
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }
    attach(body){
		this.string.bodyA = body;
	}
	
    display(){
        if(this.string.bodyA ){
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.string.bodyA = null;
    }
}