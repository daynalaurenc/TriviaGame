    // Needs:
    // background image
    // DIV container: title, questions, answers, timer
    // First page has START button
        // similar to jewels buttons -- on click function
    // First Question appears , 1 per slide -- 30 sec timer at top
    // countdown timer: 30 seconds 
    // Answers : on click function for each multiple choice --> HOVER STAY (css) -- 
    // for all the buttons, 4 buttons, each button can have a value property >> false, false, false, true
    // $(this).val() -- call the function and assign T/F in the array
    // Automatic page -- Image, Whether Player answered Correct/Incorrect : with correct answer
    // call REMOVE function -- to the div using jquery
    // Timer happens 
    // Next Question appears w Fresh 30 sec timer
    // reset function game -- score -- Correct, Incorrect, Unanswered
        // Start Over? button
        //on click function

    // Questions:

    // Interval, Slideshow, SimpleTimer

$(document).ready(function() {

var correct = 0;
var incorrect = 0;
var unanswered = 0;

var number = 30;
var intervalId;

var themeQuestion = [{
    question: "In 'Happy Gilmore', why does Happy become a golfer?",
    choices: ["Attract women", "Pay back his loan sharks", "Impress his boss", "Buy his Grandma's house"],
    images: ["assets/images/golfball.jpg"],
    validAnswer: [3],
    },
    {
    question: "What is the name of Happy Gilmore's rival?",
    choices: ["Mikey Driver", "Shooter McGavin", "Angry Gillmore", "Lion Forest"],
    images: ["assets/images/shooter.jpg"],
    validAnswer: [1],
    },
    {
    question: "In 'Billy Madison', who did Billy fall in love with?",
    choices: ["His 3rd grade teacher", "His principal", "His classmate", "His maid"],
    images: ["assets/images/billymad.jpg"],
    validAnswer: [0],
    },
    {
    question: "In 'The Wedding Singer', what was Robbie Hart's dream job?",
    choices: ["Barber", "Model", "Rockstar", "Boy band member"],
    images: ["assets/images/wedding.jpg"],
    validAnswer: [2],
    },
    {
    question: "In 'Big Daddy', where did Kevin's girlfriend used to work?",
    choices: ["Denny's", "Bendle's Bowling Alley", "Hooters", "Strip club"],
    images: ["assets/images/hooters.jpg"],
    validAnswer: [2],
    },
    {
    question: "In 'The Water Boy', what team did Bobby Boucher play for?",
    choices: ["Western Louisiana Gators", "Notre Dame Fighting Irish", "Louisiana State University Tigers", "South Central LA State University Mud Dogs"],
    images: ["assets/images/waterboy.jpg"],
    validAnswer: [3],
    },
    {
    question: "What was 'Mr. Deeds' dream job?",
    choices: ["Sports Writer", "Def Jam Comedian", "Greeting Card Writer", "Baseball Coach"],
    images: ["assets/images/deeds.jpg"],
    validAnswer: [2],
    },
    {
    question: "Who played his counterpart, Jill, in the 'Jack and Jill' film?",
    choices: ["Dana Carvey", "David Spade", "Rob Schneider", "Adam Sandler"],
    images: ["assets/images/jackjill.jpeg"],
    validAnswer: [3],
    },
    {
    question: "Why do Chuck and Larry get married in 'I Now Prononce You Chuck and Larry'?",
    choices: ["Insurance Benefits", "Drunk Accident", "True Love", "Tired of Being Single"],
    images: ["assets/images/chucklarry.jpg"],
    validAnswer: [0],
    },
    {
    question: "How many Adam Sandler movies has Drew Barrymore been his love interest?",
    choices: ["1", "2", "3", "5"],
    images: ["assets/images/drew.jpg"],
    validAnswer: [2],
    },
}];

});


// $("#start_button").click(function(){
// $(this).hide();
// counter = setInterval(timer, 1000); 
// displayTrivia();
// }); 


// function timer(){
// count--;
// if (count <= 0) {
//  clearInterval(counter);
//  return;
// }

//  $("#timer").html("Time remaining: " + "00:" + count + " secs");
// }

function timerWrapper() {
    theClock = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            timeoutLoss();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }
};

// function displayTrivia() {
// $("#question_div").html(disneyQuestion[0].question);
// question++;

//   var choicesArr = disneyQuestion[0].choices;
//   var buttonsArr = [];

//   for (let i = 0; i < choicesArr.length; i++) {
//     var button = $('<button>');
//     button.text(choicesArr[i]);
//     button.attr('data-id', i);
//     $('#choices_div').append(button);
//    }

//   } 

//  $('#choices_div').on('click', 'button', function(e){
//  userPick = $(this).data("id");
//  disneyQuestion[0].validAnswer;
//  if(userPick != disneyQuestion[0].validAnswer) {

//  $('#choices_div').text("Wrong Answer! The correct answer is Rajah.");
//  incorrectAnswer++;

// } else if (userPick === disneyQuestion[0].validAnswer) {
// $('#choices_div').text("Correct!!! The pet tiger name is Rajah");
// correctAnswer++;

// }

// });









// });