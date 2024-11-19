/*Add your JavaScript here*/
// console.log("hello world");

// console.log(3);
// console.log("Total = "+(3+10+1));
// console.log("Books I read this year = "+3);

// var books = 3;
// var movies = 10;
// var shows = 2;
// var totalMedia = books + shows + movies;
// console.log("Number of books I read = " + books);
// console.log("Number of movies I watched = " + movies);
// console.log("Number of shows I watched = " + shows);
// console.log("All of the media I have consumed = " + totalMedia);

var moviesScore = 0;
var booksScore = 0;

var questionsAnswered = 0;

var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");

q1a1.addEventListener("click", books);
q1a2.addEventListener("click", movies);

q2a1.addEventListener("click", movies);
q2a2.addEventListener("click", books);

q3a1.addEventListener("click", books);
q3a2.addEventListener("click", movies);

q4a1.addEventListener("click", books);
q4a2.addEventListener("click", movies);

q5a1.addEventListener("click", movies);
q5a2.addEventListener("click", books);

q6a1.addEventListener("click", books);
q6a2.addEventListener("click", movies);

q7a1.addEventListener("click", books);
q7a2.addEventListener("click", movies);

q8a1.addEventListener("click", movies);
q8a2.addEventListener("click", books);

q9a1.addEventListener("click", movies);
q9a2.addEventListener("click", books);


q1a1.addEventListener("click", disableQuestion1);
q1a2.addEventListener("click", disableQuestion1);

q2a1.addEventListener("click", disableQuestion2);
q2a2.addEventListener("click", disableQuestion2);

q3a1.addEventListener("click", disableQuestion3);
q3a2.addEventListener("click", disableQuestion3);

q4a1.addEventListener("click", disableQuestion4);
q4a2.addEventListener("click", disableQuestion4);

q5a1.addEventListener("click", disableQuestion5);
q5a2.addEventListener("click", disableQuestion5);

q6a1.addEventListener("click", disableQuestion6);
q6a2.addEventListener("click", disableQuestion6);

q7a1.addEventListener("click", disableQuestion7);
q7a2.addEventListener("click", disableQuestion7);

q8a1.addEventListener("click", disableQuestion8);
q8a2.addEventListener("click", disableQuestion8);

q9a1.addEventListener("click", disableQuestion9);
q9a2.addEventListener("click", disableQuestion9);

restart.addEventListener("click", reset);

function books() {
    booksScore += 1;
    questionsAnswered += 1;

    console.log("Questions answered = " + questionsAnswered + " Books score = " + booksScore);

    if (questionsAnswered == 9) {
        console.log("The quiz is done!");
        updateResult();
    }
    
}



function movies() {
    moviesScore += 1;
    questionsAnswered += 1;

    console.log("Questions answered = " + questionsAnswered + " Movies score = " + moviesScore);

    if (questionsAnswered == 9) {
        console.log("The quiz is done!");
        updateResult();
    }
}

function updateResult() {
    if (moviesScore >= 5) {
        result.innerHTML = "You are a movie person!";
        console.log("You are a movie person!");
    }
    if (booksScore >= 5) {
        result.innerHTML = "You are a book person!";
        console.log("You are a book person!");
    }
}

function reset() {
    result.innerHTML = "Your result is...";
    moviesScore = 0;
    booksScore = 0;
    questionsAnswered = 0;
    console.log("MoviesScore = " + moviesScore);
    console.log("BooksScore = " + booksScore);
    console.log("questionsAnswered = " + questionsAnswered);
    enableAllButtons();
}

function disableQuestion(button1, button1) {
    button1.disabled = true;
    button2.disabled = true;
}

function disableQuestion1() {
    q1a1.disabled = true;
    q1a2.disabled = true;
}

function disableQuestion2() {
    q2a1.disabled = true;
    q2a2.disabled = true;
}

function disableQuestion3() {
    q3a1.disabled = true;
    q3a2.disabled = true;
}

function disableQuestion4() {
    q4a1.disabled = true;
    q4a2.disabled = true;
}

function disableQuestion5() {
    q5a1.disabled = true;
    q5a2.disabled = true;
}

function disableQuestion6() {
    q6a1.disabled = true;
    q6a2.disabled = true;
}

function disableQuestion7() {
    q7a1.disabled = true;
    q7a2.disabled = true;
}

function disableQuestion8() {
    q8a1.disabled = true;
    q8a2.disabled = true;
}

function disableQuestion9() {
    q9a1.disabled = true;
    q9a2.disabled = true;
}

function enableAllButtons() {
    q1a1.disabled = false;
    q1a2.disabled = false;

    q2a1.disabled = false;
    q2a2.disabled = false;

    q3a1.disabled = false;
    q3a2.disabled = false;

    q4a1.disabled = false;
    q4a2.disabled = false;

    q5a1.disabled = false;
    q5a2.disabled = false;

    q6a1.disabled = false;
    q6a2.disabled = false;

    q7a1.disabled = false;
    q7a2.disabled = false;

    q8a1.disabled = false;
    q8a2.disabled = false;

    q9a1.disabled = false;
    q9a2.disabled = false;
}