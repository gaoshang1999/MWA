class Person{

    constructor(private _firstName :string
        , public enumerable:boolean=true
        , public configurable:boolean=true){}

    get firstName() : string {
       return this._firstName;
    }
    set firstName(value : string)  {
       this._firstName = value.toUpperCase();
    }
}

var p = new Person('ShangGao');
console.log(p.firstName);
p.firstName = 'NewName'
console.log(p.firstName);