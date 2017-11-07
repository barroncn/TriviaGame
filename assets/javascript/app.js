$(document).ready(function(){
//GLOBAL VARIABLES
// ==================================================================================================================
var questions = [ "How long is the great wall of China?", 
                  "Where does the world's larges spider live?",
                  "How deep is the deepest part of the ocean?",
                  "What percentage of the Earth is covered by land?",
                ];

var answerChoices = [ ["200 miles", "15,800 miles", "5,500 miles", "2,050 miles"],
                      ["South America", "Australia", "Asia", "Africa"],
                      ["5,000 feet", "100,000 feet", "30,000 feet", "500 feet"],
                      ["52%", "29%", "63%", "12%"]
                    ];

var solutions = ["The Great Wall of China is believed to cover 5,500 miles and took around 200 years to build!", 
                "The Goliath Bird-Eater Spider lives in the rainforests of South America and can have a leg span of over 12 inches!",
                "At the Mariana Trench the ocean is more than 32,800 feet deep--that’s over 6 miles!",
                "Only 29% of the Earth is covered by land!"];
                
var photos = ["<img src='../images/GreatWall.jpg' alt='Great Wall of China' />",
              "<img src='../images/Spider.jpg' alt='Great Wall of China' />",
              "<img src='../images/DeepOcean.png' alt='Great Wall of China' />",
              "<img src='../images/EarthLand.jpg' alt='Great Wall of China' />"
              ];
              
var correctIndex = [2, 0, 2, 1];
    
var counter = 0;

// FUNCTIONS
// ==================================================================================================================
//This function will reset the game after a player has finished 
function reSet(){

}

// MAIN PROCESS
// ==================================================================================================================

    
    
})


// Array of questions.
// Array of answers pages. 
// have a question counter that will equal the number of the question in the array.
// You have a timer for the question and then a timer for the result.
// Once the question timer is zero, the result page and counter are triggered. 
// Once the result timer is zero, when time runs out counter++, the question page is triggered with the counter at +1.
// QUESTIONS:
//      How long is the Great Wall of China?
//      What's the average temperature of the hottest place on Earth?
//      Where does the worlds largest spider live?
//      What is the population of Russia?
//      How deep is the deepest part of the ocean?
//      What is the national food of France?
//      Who was the first Prime Minister of Great Brittain?
//      When did Alaska become a state?