$(document).ready(function(){
//GLOBAL VARIABLES
// ==================================================================================================================
var theGameSet = [
                    {
                        question:"How long is the great wall of China?",
                        answerChoices:["200 miles", "15,800 miles", "5,500 miles", "2,050 miles"],
                        solution:"The Great Wall of China is believed to cover 5,500 miles and took around 200 years to build!",
                        photo: '<img src="../images/GreatWall.jpg" alt="Great Wall of China" />',
                        correctIndex: 2
                    },
                    
                    {
                        question:"Where does the world's larges spider live?",
                        answerChoices:["South America", "Australia", "Asia", "Africa"],
                        solution:"The Goliath Bird-Eater Spider lives in the rainforests of South America and can have a leg span of over 12 inches!",
                        photo: "<img src='../images/Spider.jpg' alt='Goliath Bird-Eater Spider' />",
                        correctIndex: 0
                    },
    
                    {
                        question:"How deep is the deepest part of the ocean?",
                        answerChoices:["5,000 feet", "100,000 feet", "30,000 feet", "500 feet"],
                        solution:"At the Mariana Trench the ocean is more than 32,800 feet deep--that’s over 6 miles!",
                        photo:"<img src='../images/DeepOcean.png' alt='Map of Mariana Trench' />",
                        correctIndex: 2
                    },
                    
                    {
                        question:"What percentage of the Earth is covered by land?",
                        answerChoices:["52%", "29%", "63%", "12%"],
                        solution:"Only 29% of the Earth is covered by land!",
                        photo:"<img src='../images/EarthLand.jpg' alt='Space view of Earth' />",
                        correctIndex: 1
                    }
                  ];
                        // How/Where would I then go to push another questions into this array?
var counter = 0;

var questionInterval;

var solutionInterval;

var clock = 15;

var numCorrect = 0;

var numIncorrect = 0;

// FUNCTIONS
// ==================================================================================================================
//This function will reset the game after a player has finished 
function reSet(){
    $("#timer").html("<button class='start'>Start the Game!</button>");
    $("#question").html("<h3>Want to test your global trivia smarts?");
    $("#interact").html("<p>These are some instructions</p><p>Even moreInstructions!</p>");
    counter = 0;
    numCorrect = 0;
    numIncorrect = 0;
}

//This function makes the timer work
function countDown(){
    $("#timer").html("00:" + clock);
    clock--;
}

// This function will add a new question and answerChoices to the page
function newQuestion(index){
    //Clear the timer and interact divs
    $("#timer").html("00:15");
    $("#interact").empty();
    
    //Start the clock for the question Interval
    questionInterval = setInterval(countDown, 1000);
    
    // Go to the object at a specified index in our array and put the question string into the question div in our HTML
    $("#question").html(theGameSet[index].question);
    
    // Go through the answer choices for this object and add them to the interact div with the class questionOption
    for(var i=0; i<theGameSet[index].answerChoices.length; i++)
    $("#interact").append("<p class='questionOption'>" + theGameSet[index].answerChoices[i] + "</p>" + "<hr>");
   
}

// MAIN PROCESS
// ==================================================================================================================
//Start the game on the home page
reSet();

$(".start").click(function(){
    
    newQuestion(counter);
});
    
$("#interact").on("click", ".questionOption", function(){
    
    // //Tell the user if they were right
    // if(theGameSet[counter].correctIndex === theGameSet[counter].indexOf(this.text())){
        $("#timer").html("<h2>Correct!</h2>");
        
        //Stop the question Interval and reset the clock
        clearInterval(questionInterval);
         clock = 15;
    
        // Load solution and solution photo
        $("#question").html(theGameSet[counter].solution);
        $("#interact").html(theGameSet[counter].photo);
        
        // Increment the counter and correct. Load a new question page after three seconds
        counter++;
        numCorrect++;
        setTimeout(function(){
            newQuestion(counter);
            }, 3000);
    //     }
        
    // else{
    //     $("#timer").html("<h2>Incorrect...</h2>");
    //     alert("right");
        
    //     //Stop the question Interval and reset the clock
    //     clearInterval(questionInterval);
    //     clock = 15;
    
    //     // Load solution and solution photo
    //     $("#question").html(theGameSet[counter].solution);
    //     $("#interact").html(theGameSet[counter].photo);
        
    //     // Increment the counter and incorrect. Load a new question page after three seconds
    //     counter++;
    //     numIncorrect++;
    //     setTimeout(function(){
    //         newQuestion(counter);
    //         }, 3000);
        // }
    
});
    
})