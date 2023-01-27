var questionSet = [
  {
    question: "A list of steps that complete a task is called:",
    answer1: "Sequence",
    answer2: "Input",
    answer3: "Algorithm",
    answer4: "Code",
    correctAnswer: "Algorithm",
  },
  {
    question:
      "An algorithm that has been written in a way that can be read by a machine is called:",
    answer1: "Debugging",
    answer2: "Program",
    answer3: "Iterating",
    answer4: "Function",
    correctAnswer: "Program",
  },
  {
    question:
      "A part of a program that helps to reduce the difficulty of writing code is called:",
    answer1: "Function",
    answer2: "Algorithm",
    answer3: "Code",
    answer4: "Bug",
    correctAnswer: "Function",
  },
  {
    question: "Statements that only run under certain conditions are called:",
    answer1: "Output",
    answer2: "Conditional",
    answer3: "Iterating",
    answer4: "Debugging",
    correctAnswer: "Conditional",
  },
  {
    question:
      "A placeholder value for a piece of information that can change is called:",
    answer1: "Event",
    answer2: "Variable",
    answer3: "Function",
    answer4: "Input",
    correctAnswer: "Variable",
  },
  {
    question: "A loop functions using what method of repetitive action:",
    answer1: "Debugging",
    answer2: "Output",
    answer3: "Iteration",
    answer4: "Repitition",
    correctAnswer: "Iteration",
  },
];

var highscoreSet = [];

// Declare local location
var currentLocation = "loc_page_start";

// Declare global question variable
var q = 0;

// Declare global score
var amountCorrect = 0;
var score;

// Declare timer
var timeLeft = 100;
var finalTime;

// Page Shorthand Initialized
var page_start = document.querySelector(".page_start");
var page_question = document.querySelector(".page_question");
var page_establishHighscore = document.querySelector(
  ".page_establishHighscore"
);
var page_highscores = document.querySelector(".page_highscores");

// Button Shorthand Initialized
var viewHSBtn = document.querySelector(".viewHighscores");
var startBtn = document.querySelector(".startButton");
var answerBtns = document.querySelectorAll(".answer");
var answer1Btn = document.querySelector(".answer1");
var answer2Btn = document.querySelector(".answer2");
var answer3Btn = document.querySelector(".answer3");
var answer4Btn = document.querySelector(".answer4");
var submitScoreBtn = document.querySelector(".submit");
var backBtn = document.querySelector(".back");

// Element Shorthand Initialized
var questionEl = document.querySelector(".question");
var feedbackEl = document.querySelector(".validation");
var timerEl = document.querySelector(".timer");
var scoreEl = document.querySelector(".score");
var userInput = document.querySelector(".initials_input");

// Timer
function timer() {
  var timer = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (window.q === questionSet.length) {
      clearInterval(timer);
    } else if (timeLeft <= 0) {
      window.finalTime = 0;
      clearInterval(timer);
      console.log(finalTime);
      timerEl.textContent = finalTime;
      finalScore(amountCorrect, finalTime);
    }
  }, 1000);
}

// View Highscores Button
viewHSBtn.addEventListener("click", () => {
  if (currentLocation === "loc_page_start") {
    page_start.style.display = "none";
    page_highscores.style.display = "inline-block";
    viewHSBtn.innerHTML = "&#8592;";
    currentLocation = "loc_page_highscores";
  } else if (currentLocation === "loc_page_highscores") {
    page_highscores.style.display = "none";
    page_start.style.display = "inline-block";
    viewHSBtn.innerHTML = "View Highscores";
    currentLocation = "loc_page_start";
  } else {
    console.warn("Issues with direction of viewHSBtn");
  }
});

// Start Button
startBtn.addEventListener("click", () => {
  page_start.style.display = "none";
  page_question.style.display = "inline-block";
  currentLocation = "loc_page_question";
  displayNewQuestion(q);
  timer();
  nextQuestion(q);
});

// Display a New Question
function displayNewQuestion(q) {
  questionEl.innerHTML = questionSet[q].question;
  answer1Btn.innerHTML = questionSet[q].answer1;
  answer2Btn.innerHTML = questionSet[q].answer2;
  answer3Btn.innerHTML = questionSet[q].answer3;
  answer4Btn.innerHTML = questionSet[q].answer4;
}

// Validate User Choice
function validateChoice(event) {
  if (event.target.textContent === questionSet[q].correctAnswer) {
    window.amountCorrect++;
    feedbackEl.innerHTML = "Correct!";
  } else {
    feedbackEl.innerHTML = "Incorrect!";
  }
}

// Answer Buttons; Validate and New Question on Click
function nextQuestion(q) {
  for (i = 1; i < 5; i++) {
    document.querySelector(`.answer${i}`).addEventListener("click", (event) => {
      // Validate and store
      validateChoice(event);

      q++;
      window.q++;

      if (window.q === questionSet.length) {
        console.log("done with questions");
        window.finalTime = Number(timeLeft);
        timerEl.innerHTML = finalTime;
        finalScore(amountCorrect, finalTime);
        page_question.style.display = "none";
        page_establishHighscore.style.display = "inline-block";
        establishHighscore(score, highscoreSet);
      } else {
        displayNewQuestion(q);
      }
    });
  }
}

function finalScore(amountCorrect, finalTime) {
  percentageCorrect = amountCorrect / questionSet.length;
  console.log(percentageCorrect);
  console.log(finalTime);
  score = Math.floor(percentageCorrect * finalTime);
  return;
}

function establishHighscore(score, highscoreSet) {
  scoreEl.innerHTML = score;
  submitScoreBtn.addEventListener("click", (event) => {
    event.preventDefault();
    var userInput = document.getElementById("initials").value;
    var newScore = { userInput, score };
    highscoreSet.push(newScore);
    highscoreSet.sort((a, b) => b.score - a.score);

    console.log(highscoreSet);
    page_establishHighscore.style.display = "none";
    page_highscores.style.display = "inline-block";

    document.querySelector(
      ".hs1"
    ).textContent = `${highscoreSet[0].userInput}: ${highscoreSet[0].score}`;
    document.querySelector(
      ".hs1"
    ).textContent = `${highscoreSet[1].userInput}: ${highscoreSet[1].score}`;
    document.querySelector(
      ".hs1"
    ).textContent = `${highscoreSet[2].userInput}: ${highscoreSet[2].score}`;
    document.querySelector(
      ".hs1"
    ).textContent = `${highscoreSet[3].userInput}: ${highscoreSet[3].score}`;
    document.querySelector(
      ".hs1"
    ).textContent = `${highscoreSet[4].userInput}: ${highscoreSet[4].score}`;
  });
}
