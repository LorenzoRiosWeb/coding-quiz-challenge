// Make variables for functionality of the code
var startBtn = document.getElementById("startBtn");
var time = 75;
var time_remaining = true;
var time_start = false;
var countdownTimer = document.getElementById("countdownTimer");
var homeContainer = document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionHeading = document.getElementById("questionHeading");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var answerResponser = document.getElementById("AnswerResponse");
var high_scores =[];
var output="";
// set a score of =0 at start of game
var score = 0;

let i = 0;
// create function for startBtn
startBtn.addEventListener("click", function(){
    quizContainer.style.display = "block";
    homeContainer.style.display = "none";
    countdownTimer.style.display = "block";
    document.getElementById("score_keeper").style.display = "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start = true;
});

// Created var for countdown timer
var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

// create a function that changes the time var
function setCountdownTimer(){
    if (time_start)
    time --;
    if(time<=0){
        end_quiz();
        time = 0
    }
    document.getElementById("timer").innerHTML = time;
}

// create function for answers var








//create function for inccorect answer time is subtracted








//when time reaches 0 screen shows game over








//creat local storage for highscore