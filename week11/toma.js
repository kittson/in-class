function Digipet(hungry,bored,sleepy,age){	
	this.hungry = hungry;
	this.bored = bored;
	this.sleepy = sleepy;
	this.age = age;	
    this.feed = function(){
    	if(this.hungry){
    		console.log("That was ymmy!\n");
    		this.hungry = false;
    		this.sleepy = true;
    	}
    	if(!this.hungry){
    		console.log("no thanks, I'm full\n");
    	}
    };
    this.sleepy = function(){
    	if(this.sleepy){
    		console.log("zzzzzzzzz\n");
    		this.bored = true;
    		this.sleepy = false;
    		this.increaseAge();
    	}
    	if(!this.sleepy){
    		console.log("no way! I'm not tired\n");
    	}
    };
    this.play = function(){};
    	if(this.bored){
    		console.log("Yay Let's play!\n");
    		this.bored = false;
    		this.hungry = true;
    	}
    	if(!this.bored){
    		console.log("Not right now, Later?\n");
    	}
    this.increaseAge = function(){
    	this.age++;
    	console.log("Happy Birthday to me, I am " + age + "years old\n");
    };
}

var dog = new Digipet("false", "true", "false", 0);
var cat = new Digipet("false", "true", "false", 0);

dog.outside = false;
dog.bark = console.log("Woof! Woof! \n");
dog.goOutside = function(){
	if(!this.outside){
    		console.log("Yay I love the outdoors!\n");
    		this.outside = true;
    		this.bark;
    }
};

cat.houseCondition = 100;
cat.meow = console.log("Meow! Meow! \n");

cat.destroyFurniture = function(){
	if( this.houseCondition != 0){
		this.houseCondition - 10;
		console.log("muhahah\n");
		this.bored = false;
		this.sleepy = true;
	}
};

cat.buyFurniture = function(){
	if( this.houseCondition != 0){
		this.houseCondition + 50;
		console.log("are you sure about this\n");
	}
};

// dog.goOutside();
// cat.destroyFurniture();
// cat.buyFurniture();


var animal = process.argv[2];
var method = process.argv[3];
this.dog = new Digipet;
this[animal][method]();