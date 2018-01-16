//Excesise 1

'use strict';

class Musician{
	constructor(name){
		this.name = name
	}
}

var Violinist = new Musician("Violinist");
var Pianist = new Musician("Pianist");

Musician.prototype.play = function(piece){
	return `${this.name} is now playing ${piece}`;
}


console.log(Violinist.play("Mozart "));
console.log(Pianist.play("Beethoven"));



//Excesise 2

'use strict';

 String.prototype.filterWords = function(arr) {
	 
	 if (arguments.length == 0) {
      throw new Error('No parameter arr!');
    }
	 if (!Array.isArray(arr)) {
      throw new TypeError(arr + ' is not an Array');
    }
	let str = this;
	arr.forEach( (a) => str = str.replace(a, "***"));
	return str;
 }
 
 
 console.log("This house is nice!".filterWords(["house", "nice"]));

//Excesise 3


'use strict';

function isWeekend(){
	const todayDate = new Date();
	const day = todayDate.getDay(); // 0 - 6 (0 is Sunday)

	// your code here
    const week = {0:"weekend", 6:"weekend", 1:"weekday", 2:"weekday", 3:"weekday", 4:"weekday", 5:"weekday"};
	return week[day];
}


console.log(isWeekend());

//Excesise 4

'use strict';

 const item = {
	"name":"Biscuits",
	"type":"regular",
	"category":"food",
	"price": 2.0
  };

   const applyCoupon = x => y => z=> ({price: z.price * (1 - y) })
 
  console.log(
  	applyCoupon("food")(0.1)(item).price === 1.8
  );