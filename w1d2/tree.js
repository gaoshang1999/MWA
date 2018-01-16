const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 

const f = function(tree, doc){			
	if ( tree.files.includes(doc)){
		return true;
	}
	if (tree.subFolders.length == 0 ){
		return false;
	}

	for (let t of tree.subFolders) {
	   if( f(t, doc) ){
		   return true;
	   }
	}	
	return false;
}

const find = doc => tree => f(tree, doc);

let a = find("paper.pdf")(tree); // true 
let b = find("randomfile")(tree); // false
let c = find("logs1")(tree); // true

console.log(a);
console.log(b);
console.log(c);