$(document).ready(function(){
    
//GLOBAL VARIABLES
// ================================================================================================================================================
    
    // theGameSet array holds the information about each question as a different object
    var theGameSet = [
                        {
                            question:"How long is the great wall of China?",
                            answerChoices:["200 miles", "15,800 miles", "5,500 miles", "2,050 miles"],
                            solution:"The Great Wall of China is believed to cover 5,500 miles and took around 200 years to build!",
                            photo: '<img src="assets/images/GreatWall.jpg" alt="Great Wall of China" />',
                            correctIndex: 2
                        },
                        
                        {
                            question:"Where does the world's largest spider live?",
                            answerChoices:["South America", "Australia", "Asia", "Africa"],
                            solution:"The Goliath Bird-Eater Spider lives in the rainforests of South America and can have a leg span of over 12 inches!",
                            photo: "<img src='assets/images/Spider.jpg' alt='Goliath Bird-Eater Spider' />",
                            correctIndex: 0
                        },
        
                        {
                            question:"About how deep is the deepest part of the ocean?",
                            answerChoices:["5,000 feet", "100,000 feet", "30,000 feet", "500 feet"],
                            solution:"At the Mariana Trench the ocean is more than 32,800 feet deep--that’s over 6 miles!",
                            photo:"<img src='assets/images/DeepOcean.png' alt='Map of Mariana Trench' />",
                            correctIndex: 2
                        },
                        
                        {
                            question:"What percentage of the Earth is covered by land?",
                            answerChoices:["52%", "29%", "63%", "12%"],
                            solution:"Only 29% of the Earth is covered by land!",
                            photo:"<img src='assets/images/EarthLand.jpg' alt='Space view of Earth' />",
                            correctIndex: 1
                        },
                        
                        {
                            question:"In which country is the tallest waterfall in the world?",
                            answerChoices:["South Africa", "Thailand", "China", "Venezuela"],
                            solution:"Angel Falls in Venezuela is 3,212 feet tall!",
                            photo:"<img src='assets/images/AngelFalls.jpg' alt='Space view of Earth' />",
                            correctIndex: 3 
                        }
                      ];
    
    //The counter will keep track of what question the user is on and it will point to the correct index in theGameSet array
    var counter = 0;
    
    //The question interval stores the interval for the timer
    var questionInterval;
    
    //The clock starts at 14 because the initial display is set at 15 and then the interval will start
    var clock = 14;
    
    
    //The following three variables keep track of how the user is doing with their answer choices so they can be displayed at the end of the game
    var numCorrect = 0;
    
    var numIncorrect = 0;
    
    var numUnanswered = 0;
    
    
// FUNCTIONS
// ===============================================================================================================================================
    
    //This function is called when the page loads to set up the game start page
    function setUp(){
        $("#timer").html("<button class='start'>Start the Game!</button>");
        $("#question").html("<h3>Test yourself with Global Trivia!</h3>");
        $("#interact").html("<p>The timer starts at 15 for each question.</p> <p>Click on the answer you think is best.</p> <p>Good Luck!</p>");
    }
    
    //This function makes the timer count down
    function countDown(){
        //If the time runs out we want to display the solution page
        //The condition for when clock === -1 is set so time zero will display
        if(clock === -1){
             $("#timer").html("<p>Out of Time!</p>");
            
            //Stop the question Interval and reset the clock
            clearInterval(questionInterval);
            clock = 15;
        
            // Load solution and solution photo
            $("#question").html(theGameSet[counter].solution);
            $("#interact").html(theGameSet[counter].photo);
            
            // Increment the counter and correct. Load a new question page after 9 seconds
            counter++;
            numUnanswered++;
            setTimeout(function(){
                newQuestion(counter);
                }, 9000);
        }
        
        //If the clock is less than 10 we still want to keep the number displayed in 4 digits
        else if(clock<10){
        $("#timer").html("00:0" + clock);
        }
        
        //If the timer is in double digits, we don't need the extra zero
        else{
        $("#timer").html("00:" + clock);
        }
         clock--;
    }
    
    // This function will load a new question and answerChoices to the page as long as there are available questions
    function newQuestion(index){
        // If the counder is equal to the length of theGameSet array, we're out of questions and must go to the last page to see the stats
        if(counter === theGameSet.length){
            lastPage();
        }
        
        else{
            //Clear the interact div and reset the timer div to display 15
            $("#timer").html("00:15");
            $("#interact").empty();
        
            //Start the clock for the question Interval. I set if for less than a second to create more urgency!
            questionInterval = setInterval(countDown, 700);
        
            // Get the correct question out of our array of objects and put it into the question div in our HTML
            $("#question").html("<h3>" + theGameSet[index].question + "</h3>");
        
            // Loop through the answer choices for this object, adding them to the interact div with the class questionOption
            for(var i=0; i<theGameSet[index].answerChoices.length; i++){
                $("#interact").append("<p class='questionOption'>" + theGameSet[index].answerChoices[i] + "</p>" + "<hr>");
            }
        }
    }
    
    //This function loads the solution and the corresponding photo
    function afterQuestionClick(){
            clearInterval(questionInterval);
            clock = 14;
            $("#question").html(theGameSet[counter].solution);
            $("#interact").html(theGameSet[counter].photo);
            counter++;
    }
    
    //This function will populate the stats page at the end of the game and offer to start the game over
    function lastPage(){
        $("#timer").html("<button class='start'>Try Again!</button>");
        $("#question").html("<h3>How did you do?</h3>");
        $("#interact").html("<p>Correct: " + numCorrect + "</p><p>Incorrect: " + numIncorrect + "</p>"+ "<p>Unanswered: " + numUnanswered + "</p>");
        counter = 0;
        numCorrect = 0;
        numIncorrect = 0;
        numUnanswered = 0;
    }
    
    
// MAIN PROCESS
// =============================================================================================================================================
    
    //Start the game on the home page
    setUp();
    
    //When the user clicks the Start the Game button at the beginning or the Try Again button at the end a new question is loaded.
    $("#timer").click(".start", function(){
        newQuestion(counter);
    });
    
    //When the user clicks on a question
    $("#interact").on("click", ".questionOption", function(){
        
        // If the answer they clicked on matches the correctIndex, tell the user if they were right and run afterQuestionClick
        // Leave the solution up for 9 seconds before executing a newQuestion
        if(theGameSet[counter].correctIndex == theGameSet[counter].answerChoices.indexOf($(this).text())){
            $("#timer").html("<p>Correct!</p>");
            afterQuestionClick();
            numCorrect++;
            setTimeout(function(){
                newQuestion(counter);
                }, 9000);
        }
        //If the user does not pick the correct answer, let them know they were incorrect and show the solution for 9 seconds before
        // executing newQuestion
        else{
            $("#timer").html("<p>Incorrect...</p>");
            afterQuestionClick();
            numIncorrect++;
            setTimeout(function(){
                newQuestion(counter);
                }, 9000);
        }
        
    });
});
