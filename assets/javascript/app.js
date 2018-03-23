
//User clicks start button
$(document).ready(function(){
    $("#start").click(function(){
        $(".questions").css("display", "block");
        $("#timer").on("#start");
        $("#start").css("display", "none");
        console.log(".questions");
        run();
    });
});


// countdown clock begins
var number = 120;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
} 

function decrement() {
    number--;
    $("#timer").html("<h2>Time Remaining: " + number + " seconds</h2>");

    if (number === 0) {
        check();
        alert("Time Up! (Scroll to the bottom for Results)");
        clearInterval(intervalId);
    }
}


// show questions
function check(){

var q1 = document.quiz.q1.value; 
var q2 = document.quiz.q2.value; 
var q3 = document.quiz.q3.value; 
var q4 = document.quiz.q4.value; 
var q5 = document.quiz.q5.value; 
var q6 = document.quiz.q6.value; 
var q7 = document.quiz.q7.value; 
var q8 = document.quiz.q8.value; 
var q9 = document.quiz.q9.value; 
var q10 = document.quiz.q10.value; 
var correct = 0;
var incorrect = 0;


// user selects questions

if (q1 == "venus") {
    correct++;
} else if (q1 == "saturn", "earth") {
    incorrect++;
}

if (q2 == "earth") {
    correct++;
} else if (q2 == "uranus", "mercury") {
    incorrect++;
}

if (q3 == "8") {
    correct++;
} else if (q3 == "9", "3") {
    incorrect++;
}

if (q4 == "Jupiter") {
    correct++;
} else if (q4 == "Saturn", "Venus") {
    incorrect++;
} 

if (q5 == "harvest") {
    correct++;
} else if (q5 == "blood", "fall") {
    incorrect++;
} 

if (q6 == "uranus") {
    correct++;
} else if (q6 == "neptune", "jupiter") {
    incorrect++;
} 

if (q7 == "polaris") {
    correct++;
} else if (q7 == "ra", "big") {
    incorrect++;
} 

if (q8 == "mars") {
    correct++;
} else if (q8 == "jupiter", "uranus") {
    incorrect++;
} 

if (q9 == "alan") {
    correct++;
} else if (q9 == "lance", "neil") {
    incorrect++;
} 

if (q10 == "plench") {
    correct++;
} else if (q10 == "grab", "clencher") {
    incorrect++;
} 
clearInterval(intervalId);

// 5. user clicks submit or time runs out
    document.getElementById("after_submit").style.visibility="visible";
// 6. show results


    
    document.getElementById("number_correct").innerHTML="You got " + correct + " correct.";
    document.getElementById("number_incorrect").innerHTML="You got " + incorrect + " incorrect.";
    
}