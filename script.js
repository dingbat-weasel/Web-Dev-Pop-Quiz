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

// Sets local location
var currentLocation = "loc_page_start";

// Pages Initialized
var page_start = document.querySelector(".page_start");
var page_question = document.querySelector(".page_question");
var page_establishHighscore = document.querySelector(
  ".page_establishHighscore"
);
var page_highscores = document.querySelector(".page_highscores");

// Buttons Initialized
var viewHSButton = document.querySelector(".viewHighscores");

viewHSButton.addEventListener("click", () => {
  if (currentLocation === "loc_page_start") {
    document.querySelector(".page_start").style.display = "none";
    document.querySelector(".page_highscores").style.display = "inline-block";
    document.querySelector(".viewHighscores").innerHTML = "&#8592;";
    currentLocation = "loc_page_highscores";
  } else if (currentLocation === "loc_page_highscores") {
    document.querySelector(".page_highscores").style.display = "none";
    document.querySelector(".page_start").style.display = "inline-block";
    document.querySelector(".viewHighscores").innerHTML = "View Highscores";
    currentLocation = "loc_page_start";
  } else {
    console.warn("Issues with direction of viewHSButton");
  }
});
