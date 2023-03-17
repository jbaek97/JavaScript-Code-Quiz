//Variables
var startButton = document.querySelector("#start");
var a1 = ["An equation that can be inserted", "An array is a list of items within brackets", "A beam from the sun", "An algorithm"];
var a2 = ["It adds to an array", "It creates a new function", "It cons the soul", "It prints whatever is passed into it onto the console"];
var a3 = ["We use the keyword car", "We use the term bar", "The term var", "We use far"];
var a4 = ["It's a bunch of characters that are surrounded by quotes", "A piece of thread", "The word sing with some extra letters", "Something you can knit with virtually"];
var a5 = ["We use the html tags 'script'", "We ask a director to write a script", "We ask the band that wrote 'Hall of Fame' to help us", "I don't know"];
var a6 = ["It does something 'for' you", "It allows you to loop through a line of code in a set amount of times", "It loops something ti'll you get to four", "It makes fruit loops"];
var a7 =[".sj", ".js", "j.s", "s.j"];
var questions = ["What is an Array?", "What does console.log() do?", "What comes before variable declaration?", "What is a string?", "What do you use to connect JavaScript to HTML?", "What does a for-loop do?", "What do you append to a File Name in order to turn a file into JavaScript?"];
var answers = document.querySelector("#answers");
var intro = document.querySelector('.intro');
var question = document.querySelector('.question');
var gameFinished = document.querySelector('.gameFinished');
var result = document.querySelector('#result');
var score = document.querySelector('.score');
var submitButton = document.querySelector('#submitBtn');
var initialsEntry = document.querySelector("#initials");
var welcomeParagraph = document.querySelector(".p")

//Clear Functions

function clear() {
    return intro.innerHTML = "";
};

function clearAnswers() {
    return answers.innerHTML = "";
};

function insertQuestions(x) {
    return intro.innerHTML = questions[x];
};

//Points 

var points = 0;

//Start Function

function start() {
    startButton.remove();
    welcomeParagraph.remove();
    intro.innerHTML = "";
    insertQuestions(0);
    question1();
    timer();
};


//TIMER
var time = 30;
var count = document.querySelector(".time");
function timer() {
    setInterval(function () {
        if( time > 1) {
            time--;
            count.innerHTML = `Time: ${time}`;
        } else if ( time === 1) {
            count.innerHTML = "Time: 0";
            answers.innerHTML ="";
            intro.innerHTML ="";
            question.innerHTML = "";
            result.className = "result";
            score.textContent = points;
            clearInterval(timer);
        }
    }, 1000)
}
