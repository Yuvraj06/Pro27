class Chain{

    constructor(bodyA,pointB){

       
        
        var options={
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 250

        }

        this.pointB = pointB;
        this.body=Constraint.create(options);
        World.add(world, this.body); 
    }

    display(){

        var pointAa = this.pointB;
        var pointBa = this.body.bodyA.position;
        strokeWeight(10);
        stroke("white");
        noFill();
        line(pointAa.x, pointAa.y,pointBa.x,pointBa.y);
    }
}