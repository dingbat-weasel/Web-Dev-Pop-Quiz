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

var highscoreSet = [("", ""), ("", ""), ("", ""), ("", ""), ("", "")];

// Declare local location
var currentLocation = "loc_page_start";

// Declare global question variable
var q = 0;

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

// Element Shorthand Initialized
var questionEl = document.querySelector(".question");

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

// Next Question Displayed on Answer Click
function nextQuestion(q) {
  for (i = 1; i < 5; i++) {
    document.querySelector(`.answer${i}`).addEventListener("click", () => {
      q++;
      displayNewQuestion(q);
    });
  }
}
