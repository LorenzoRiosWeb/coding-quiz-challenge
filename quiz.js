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
var correctAnswer = document.getElementById("correctAnswer");
var high_scores =[];
var output="";
// set a score of =0 at start of game
var score = 0;

let i = 0;
// create function for startBtn
startBtn.addEventListener("click", function() {
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
function setCountdownTimer() {
    if (time_start)
    time --;
    if(time<=0){
        end_quiz();
        time = 0
    }
    document.getElementById("timer").innerHTML = time;
}

// create function for answers var
var questionArray = [{
    question:"Question: Arrays in JavaScript can be used to store?",
    answerChoice: ["A) numbers and strings", "B) Other Arrays", "C) Booleans", "D) All of the Above"],
    correctAnswer :3
},{
    question:"Question: Which HTML tag below can you use to write JavaScript",
    answerChoice: ["A) <javascript>", "B) <script>", "C) <scripted", "D) <js>"],
    correctAnswer:1
},{
    question:"Question: Commonly used data-types for Javascript Do not include",
    answerChoice: ["A) Alerts", "B) Booleans", "C) Numbers", "D) Strings"],
    correctAnswer:0
}, {
    question:"Question: The condition used in an if/else statement is enclosed with ",
    answerChoice: ["A) Curly Brackets{} ", "B) Square Brackets [] ", "C) Parenthasies() ", "D) None of the Above "],
    correctAnswer:2
},{
    question:"Question: Which very useful tool is used during the development and debugging for printing content to teh debugger is ",
    answerChoice: ["A) console.log", "B) terminal/bash", "C) JavaScript", "D) for loops"],
    correctAnswer:0
}
]

//create function for inccorect answer time is subtracted
answerA.addEventListener('click', function(event){
    event.stopPropagation();
    correctAnswer = questionsArrau[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    //make if statement to check if answer is wrong or right
    if(0 === correctAnswer){
        document.getElementById("AnswerResponse").innerHTML = "Correct! Good Job 😊";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
        },
        1000
        );
        // when answer is correct will increase users scores
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -=5;
        // when user choose wrong answer minus 5 seconds
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck next time!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
        },
        1000
        );
    }
    if (i >= questionArray.length -1){
    end_quiz();
    }else{
        i++
        setQuizQuestions();
    }
});
answerB.addEventListener('click', function(event){
    event.stopPropagation();
    correctAnswer = questionsArrau[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    //make if statement to check if answer is wrong or right
    if(1 === correctAnswer){
        document.getElementById("AnswerResponse").innerHTML = "Correct! Good Job 😊";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
        },
        1000
        );
        // when answer is correct will increase users scores
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -=5;
        // when user choose wrong answer minus 5 seconds
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck next time!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
        },
        1000
        );
    }
    if (i >= questionArray.length -1){
    end_quiz();
    }else{
        i++
        setQuizQuestions();
    }
});
answerC.addEventListener('click', function(event){
    event.stopPropagation();
    correctAnswer = questionsArrau[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    //make if statement to check if answer is wrong or right
    if(2 === correctAnswer){
        document.getElementById("AnswerResponse").innerHTML = "Correct! Good Job 😊";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
        },
        1000
        );
        // when answer is correct will increase users scores
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -=5;
        // when user choose wrong answer minus 5 seconds
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck next time!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
        },
        1000
        );
    }
    if (i >= questionArray.length -1){
    end_quiz();
    }else{
        i++
        setQuizQuestions();
    }
});
answerD.addEventListener('click', function(event){
    event.stopPropagation();
    correctAnswer = questionsArrau[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    //make if statement to check if answer is wrong or right
    if(3 === correctAnswer){
        document.getElementById("AnswerResponse").innerHTML = "Correct! Good Job 😊";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
        },
        1000
        );
        // when answer is correct will increase users scores
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -=5;
        // when user choose wrong answer minus 5 seconds
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck next time!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
        },
        1000
        );
    }
    if (i >= questionArray.length -1){
    end_quiz();
    }else{
        i++
        setQuizQuestions();
    }
});

//when time reaches 0 screen shows game over
    function end_quiz(){
        document.getElementById("game_over").style.display= "block";
        document.getElementById("quizContainer").style.display="none";
        document.getElementById("countdownTimer").style.display= "none";
        document.getElementById("score_keeper").style.display= "none";
        document.getElementById("AnswerResponse").innerHTml="";
        document.getElementById("end_score").innerHTMl= score;
    }

    // final score and initials
    function submit_score() {
        high_scores.push(document.getElementById(" ").value + " " + score);
        view_high_scores();
    }

    localStorage.setItem("score", JSON.stringify(AnswerResponse));
    localStorage.setItem("initials", JSON.stringify(initials));

    









//creat local storage for highscore