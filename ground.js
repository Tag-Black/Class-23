class Ground
{
    constructor(x, y, width, height)
    {
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, {isStatic: true});
        World.add(world, this.body);
    }

    display()
    {
        rectMode(CENTER);
        fill("green");
        var pos = this.body.position 
        rect(pos.x, pos.y, this.width, this.height);
    }
}