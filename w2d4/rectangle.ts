class Shape{
    constructor(public width:number=0, public length :number=0){}

}

class Rectangle extends Shape{

    constructor(public width:number, public length :number){
        super(width, length)
    }

    calcSize() : number {
       return this.width * this.length;
    }
}

var rect = new Rectangle(5, 2);

console.log(rect.calcSize());