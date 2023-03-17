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

//QUESTIONS

//Question 1
function question1() {
    for(i=0; i< a1.length; i++) {
        answers.innerHTML += `<li><button class="answersButton1" id="Btn">${a1[i]}</button></li>`;
        };
    function correctCheck1(event) {
        var correctChoice = answers.children[1].children[0];
        if(event.target === correctChoice) {
            points++;
            console.log(points);
            clearAnswers();
            clear();
            question.innerHTML = "Correct!";
            insertQuestions(1);
            question2();
        } else {
            time--;
            clearAnswers();
            clear();
            question.innerHTML = "Incorrect!";
            insertQuestions(1);
            question2();
        };
    };
    for(i=0; i< 4; i++) {
        answers.children[i].children[0].addEventListener('click', correctCheck1);
    };
};

//Question 2
function question2() {
    for(i=0; i< a2.length; i++) {
        answers.innerHTML += `<li><button class="answersButton1" id="Btn">${a2[i]}</button></li>`;
        };
    function correctCheck1(event) {
        var correctChoice = answers.children[3].children[0];
        if(event.target === correctChoice) {
            points++;
            console.log(points);
            clearAnswers();
            clear();
            question.innerHTML = "Correct!";
            insertQuestions(2);
            question3();
        } else {
            time--;
            clearAnswers();
            clear();
            question.innerHTML = "Incorrect!";
            insertQuestions(2);
            question3();
        };
    };
    for(i=0; i< 4; i++) {
        answers.children[i].children[0].addEventListener('click', correctCheck1);
    };
};

//Question 3
function question3() {
    for(i=0; i< a3.length; i++) {
        answers.innerHTML += `<li><button class="answersButton1" id="Btn">${a3[i]}</button></li>`;
        };
    function correctCheck1(event) {
        var correctChoice = answers.children[2].children[0];
        if(event.target === correctChoice) {
            points++;
            console.log(points);
            clearAnswers();
            clear();
            question.innerHTML = "Correct!";
            insertQuestions(3);
            question4();
        } else {
            time--;
            clearAnswers();
            clear();
            question.innerHTML = "Incorrect!";
            insertQuestions(3);
            question4();
        };
    };
    for(i=0; i< 4; i++) {
        answers.children[i].children[0].addEventListener('click', correctCheck1);
    };
};

//Question 4
function question4() {
    for(i=0; i< a4.length; i++) {
        answers.innerHTML += `<li><button class="answersButton1" id="Btn">${a4[i]}</button></li>`;
        };
    function correctCheck1(event) {
        var correctChoice = answers.children[0].children[0];
        if(event.target === correctChoice) {
            points++;
            console.log(points);
            clearAnswers();
            clear();
            question.innerHTML = "Correct!";
            insertQuestions(4);
            question5();
        } else {
            time--;
            clearAnswers();
            clear();
            question.innerHTML = "Incorrect!";
            insertQuestions(4);
            question5();
        };
    };
    for(i=0; i< 4; i++) {
        answers.children[i].children[0].addEventListener('click', correctCheck1);
    };
};

//Question 5
function question5() {
    for(i=0; i< a5.length; i++) {
        answers.innerHTML += `<li><button class="answersButton1" id="Btn">${a5[i]}</button></li>`;
        };
    function correctCheck1(event) {
        var correctChoice = answers.children[0].children[0];
        if(event.target === correctChoice) {
            points++;
            console.log(points);
            clearAnswers();
            clear();
            question.innerHTML = "Correct!";
            insertQuestions(5);
            question6();
        } else {
            time--;
            clearAnswers();
            clear();
            question.innerHTML = "Incorrect!";
            insertQuestions(5);
            question6();
        };
    };
    for(i=0; i< 4; i++) {
        answers.children[i].children[0].addEventListener('click', correctCheck1);
    };
};

//Question 6
function question6() {
    for(i=0; i< a6.length; i++) {
        answers.innerHTML += `<li><button class="answersButton1" id="Btn">${a6[i]}</button></li>`;
        };
    function correctCheck1(event) {
        var correctChoice = answers.children[1].children[0];
        if(event.target === correctChoice) {
            points++;
            console.log(points);
            clearAnswers();
            clear();
            question.innerHTML = "Correct!";
            insertQuestions(6);
            question7();
        } else {
            time--;
            clearAnswers();
            clear();
            question.innerHTML = "Incorrect!";
            insertQuestions(6);
            question7();
        };
    };
    for(i=0; i< 4; i++) {
        answers.children[i].children[0].addEventListener('click', correctCheck1);
    };
};

//Question 7
function question7() {
    for(i=0; i< a6.length; i++) {
        answers.innerHTML += `<li><button class="answersButton1" id="Btn">${a7[i]}</button></li>`;
        };
    function correctCheck1(event) {
        var correctChoice = answers.children[1].children[0];
        if(event.target === correctChoice) {
            points++;
            console.log(points);
            clearAnswers();
            clear();
            count.innerHTML = "Time: 0";
            answers.innerHTML ="";
            intro.innerHTML ="";
            question.innerHTML = "";
            result.className = "result";
            score.textContent = points;
            time = 0;
            clearInterval(timer);
        } else {
            time--;
            clearAnswers();
            clear();
            question.innerHTML = "Incorrect!";
            count.innerHTML = "Time: 0";
            answers.innerHTML ="";
            intro.innerHTML ="";
            question.innerHTML = "";
            result.className = "result";
            score.textContent = points;
            time = 0;
            clearInterval(timer);
        };
    };
    for(i=0; i< 4; i++) {
        answers.children[i].children[0].addEventListener('click', correctCheck1);
    };
};

//Enter Score and Save to Local Storage
var showHighScoreButton = document.querySelector('.showHighScore');
var highScoresAppear = document.querySelector("#highScores");

function entry() {
    var entry = {
        Initials: initialsEntry.value,
        Score: points,
    };
    localStorage.setItem("Entry", JSON.stringify(entry));
};

function getEntry() {
    var pastScore = JSON.parse(localStorage.getItem("Entry"));
    listItem.innerHTML += `<li class="item">${pastScore.Initials}: ${pastScore.Score}</li>`;
};


function enterInitials(event){
    event.preventDefault();
    result.remove();
    entry();
    getEntry();
    question.innerHTML = "High Scores:"
    highScoresAppear.className = "highScores";
};

// High Scores
var listItem = document.querySelector(".scoresList");


function showHighScore() {
    startButton.remove();
    welcomeParagraph.remove();
    highScoresAppear.className = "highScores";
    intro.innerHTML ="High Scores";
    result.className = "resultInitial";
    // getEntry();
};

//Go Back
var goBack = document.querySelector('#goBack');
var goBack2 = document.querySelector('#goBack2');

function home() {
   location.reload();
};

goBack.addEventListener('click', home);
goBack2.addEventListener('click', home);
showHighScoreButton.addEventListener('click', showHighScore);
submitButton.addEventListener('click', enterInitials);
startButton.addEventListener('click', start);
