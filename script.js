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

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", books);
q1a2.addEventListener("click", movies);

q2a1.addEventListener("click", movies);
q2a2.addEventListener("click", books);

q3a1.addEventListener("click", movies);
q3a2.addEventListener("click", books);

function books() {
    booksScore += 1;
    questionsAnswered += 1;

    console.log("Questions answered = " + questionsAnswered + " Books score = " + booksScore);
}

function movies() {
    moviesScore += 1;
    questionsAnswered += 1;

    console.log("Questions answered = " + questionsAnswered + " Movies score = " + moviesScore);
}