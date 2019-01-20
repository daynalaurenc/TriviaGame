$(document).ready(function() {

var questions = [
    {
    q: "In Happy Gilmore, why does Happy become a golfer?",
    options: ["To Attract Women", "To Pay Back His Loan Sharks", "To Impress His Boss", "To Buy His Grandma's House"],
    images: "assets/images/golfball.jpg",
    answer: "To Buy His Grandma's House",
    },
    {
    q: "What is the name of Happy Gilmore's rival?",
    options: ["Mikey Driver", "Shooter McGavin", "Angry Gillmore", "Lion Forest"],
    images: "assets/images/shooter.jpg",
    answer: "Shooter McGavin",
    },
    {
    q: "In Billy Madison, who did Billy fall in love with?",
    options: ["His 3rd Grade Teacher", "His Principal", "His Classmate", "His Maid"],
    images: "assets/images/billymad.jpg",
    answer: "His 3rd Grade Teacher",
    },
    {
    q: "In The Wedding Singer, what was Robbie Hart's dream job?",
    options: ["Barber", "Model", "Rockstar", "Boy band member"],
    images: "assets/images/wedding.jpg",
    answer: "Rockstar",
    },
    {
    q: "In Big Daddy, where did Kevin's girlfriend used to work?",
    options: ["Denny's", "Bendle's Bowling Alley", "Hooters", "Strip club"],
    images: "assets/images/hooters.jpg",
    answer: "Hooters",
    },
    {
    q: "In The Water Boy, what team did Bobby Boucher play for?",
    options: ["Western Louisiana Gators", "Notre Dame Fighting Irish", "Louisiana State University Tigers", "South Central LA State University Mud Dogs"],
    images: "assets/images/waterboy.jpg",
    answer: "South Central LA State University Mud Dogs",
    },
    {
    q: "What was Mr. Deeds dream job?",
    options: ["Sports Writer", "Comedian", "Greeting Card Writer", "Baseball Coach"],
    images: "assets/images/deeds.jpg",
    answer: "Greeting Card Writer",
    },
    {
    q: "Who played his counterpart, Jill, in the Jack and Jill film?",
    options: ["Dana Carvey", "David Spade", "Rob Schneider", "Adam Sandler"],
    images: "assets/images/jackjill.jpeg",
    answer: "Adam Sandler",
    },
    {
    q: "Why do Chuck and Larry get married in I Now Prononce You Chuck and Larry?",
    options: ["Insurance Benefits", "Drunk Accident", "True Love", "Tired of Being Single"],
    images: "assets/images/chucklarry.jpg",
    answer: "Insurance Benefits",
    },
    {
    q: "How many Adam Sandler movies has Drew Barrymore been his love interest?",
    options: ["1", "2", "3", "5"],
    images: "assets/images/drew.jpg",
    answer: "3",
    },

];

// var image = $("<img>").attr("src", imgURL);


var $app = $('#app');
var correct = 0;
var incorrect = 0;
var questionIndex = 0;
var remainingTime;
var timer;


function init(){
    var $start = $('<button>Start</button>');
    $start.on('click', showQuestion);
    $app.empty();
    $app.append($start);
    correct = 0;
    incorrect = 0;
    questionIndex = 0;

}

init();


function displayClock() {
    remainingTime--;
    if (remainingTime === 0) {
        clearInterval(timer);
        showAnswer();
    }
    $('#clock').text(remainingTime);
}


function showQuestion() {
    remainingTime = 30;
    $app.empty();
    var question = questions[questionIndex];
    var $question = $('<div class="card">'); //'<div>'
    var $clock = ('<div>Time Remaining: <span id="clock">' + remainingTime + '</span></div>');
    var $q = $('<h2>' + question.q + '</h2>');
    var $button;
    timer = setInterval(displayClock, 1000);

    $question.append($clock);
    $question.append($q);

    for (var i=0; i<question.options.length; i++){
        $button = $('<button>' + question.options[i] + '</button>');
        $button.on('click', handleAnswer);
        
        $question.append($button);
    
    }
   $app.append($question);
}

function handleAnswer(){
    var value = $(this).text();
        showAnswer(value);
}

function showAnswer(userAnswer) {
    var question = questions[questionIndex];
    $app.empty();
    $app.append('<h2>Answer</h2>');
    $app.append('<h3>Correct Answer is: ' + question.answer + '</h3>');
    $app.append('<h3>You Selected: ' + userAnswer + '</h3>');
    if (userAnswer === "undefined") {
        $app.append('<h2>Time Out!</h2>');
        incorrect++;
    } else if (userAnswer === question.answer) {
        correct++;
    } else {
        incorrect++;
    }

    questionIndex++;
    if (questionIndex < questions.length) {
        setTimeout(showQuestion, 5000);
    } else {
        setTimeout(showScore, 5000)
    }
}

function showScore (){
    $app.empty();
    var $score = $("<h2>Let's See How You Did: </h2>");
    $app.append($score);
    var correctAnswer = $('<p>Correct Answers: ' + correct + '</p>');
    var incorrectAnswer = $('<p>Incorrect Answers: ' + incorrect + '</p>');
    $app.append(correctAnswer, incorrectAnswer);
}




});

