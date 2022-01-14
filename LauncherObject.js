class LauncherObject{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stifness: 0.004,
            length: 10 
        }

        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
attach(body){
    this.bodyA = bodyA;
}
    fly()
{
 this.launcher.bodyA=null;
}
    display(){

      if(this.launcher.bodyA){


         var pointA = this.launcher.bodyA.position;
         var pointB = this.pointB
         strokeWeight(4);
         line(pointA.x, pointA.y, pointB.x, pointB.y)
    
     }

      
    }
    }