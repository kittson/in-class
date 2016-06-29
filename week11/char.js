function Character(name,profession,gender,age,strength,hitpoints){	
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitpoints = hitpoints;
	this.printstats = function() {  
		for (var property in this){
			if( typeof this[property] != 'function'){
		  		console.log(this[property]);
			}
		}  	    	
    }//printing stats
}

var george = new Character("George", "carpenter", "neutral", 44, 30, 35);
var harriet = new Character("Harriet", "surfer", "female", 26, 40, 30);

george.printstats();
harriet.printstats();