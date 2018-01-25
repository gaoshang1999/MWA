class Rectangle{

    constructor(public width:number, public length :number){}

    calcSize() : number {
       return this.width * this.length;
    }
}

var rect = new Rectangle(5, 2);

console.log(rect.calcSize());