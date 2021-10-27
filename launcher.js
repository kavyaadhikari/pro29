class polgon{
	constructor(x,y,r)
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("polygon.png")
		this.body=Bodies.rectangle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	
	    this.bodyA=body
		this.pointB=anchor
		this.polygon=Constraint.create(options)
		World.add(world,this.polygon)
	

	attach(body)
		this.polygon.bodyA=body;
	

	fly()
		this.polygon.bodyA=null;
	

	display()
	{	if(this.polygon.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
		line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}

