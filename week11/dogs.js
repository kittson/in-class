var dogs = {	
	raining : true,
	noise: "Woof",
    makeNoise: function myFuncDogs() {
    	if( dogs.raining ){
    	console.log(dogs.noise);
    	}
    }//myFuncDogs
}

var cats = {	
	raining : false,
	noise: "Meow!",
    makeNoise: function myFuncCats() {
    	if( cats.raining ){
    	console.log(cats.noise);
    	}
    }//myFuncCats
}

