//DEPENDANCY FOR inquirer NPM PACKverb
var inquirer = require('inquirer');

var adjectives = ["hairy"];
var nouns = ["kitchen chair"];
var verbs = ["walks"];
var counter = 0;

//CONSTRUCTOR FUNCTION USED TO CREATE Programmers OBJECTS
function makeStoryList(adjective, noun, verb) {
    this.adjective = adjective;
    this.noun = noun;
    this.verb = verb;  
    adjectives.push(answers.adjective);
    nouns.push(answers.noun);
    verbs.push(answers.verb);  
    //CREATES THE printInfo METHOD AND APPLIES IT TO ALL Programmer OBJECTS
    this.printInfo = function() {
        console.log("adjective: " + this.adjective + "\nnoun: " + this.noun + "\nverb: " + this.verb + "\n");
    }
}

//RUNS INQUIRER AND ASKS THE USER A SERIES OF QUESTIONS WHOSE REPLIES ARE STORED WITHIN THE VARIABLE answers INSIDE OF THE .then STATEMENT.
function askForStuff(georgeIsAFunction) { 
    inquirer.prompt([{
        name: "adjective",
        message: "Give me an adjective."
        }, {
        name: "noun",
        message: "Give me a noun."
        }, {
        name: "verb",
        message: "Give me a verb."
        }]).then(function(answers) {

        if( counter < 2 ){
            adjectives.push(answers.adjective);
            nouns.push(answers.noun);
            verbs.push(answers.verb);
            counter++;
            askForStuff(printStory);
        }
        else {
            georgeIsAFunction();
        }
    })
}//function

askForStuff();
function printStory(adjArr, nounArr, verbArr){
    console.log("happy callback");
    //put random thing to find one of the array items and string a sentence together
}

/*.then(function(answers) {

    adjectives.push(answers.adjective);
    nouns.push(answers.noun);
    verbs.push(answers.verb);
    //var story = "The " + answers.adjective + " " + answers.noun + " " + answers.verb;
    var storyWords = new makeStoryList(answers.adjective, answers.noun, answers.verb);
    
    storyWords.printInfo();
*/
    
