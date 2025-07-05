// Variables

// Get element from html variables
const app = document.querySelector(".quiz-app"); // App
const allQuestions = document.querySelectorAll(".question-container"); // Questions
let question = document.querySelector(".quiz-app > .active"); // Active question
const allAnswers = document.querySelectorAll(".answers .answer"); // Un changed Answers
let answers = document.querySelectorAll(".answers .answer"); // Changed Answers
let trueAnswer = document.querySelector(".active .true"); // True answer
const nextBtnContainer = document.querySelector(".next"); // Next button container
const nextBtn = document.querySelector(".next button"); // Next button
const resultContainer = document.querySelector(".result"); // User result container
const result = document.querySelector(".result p"); // How many right answers paragraph
const playAgainBtn = document.querySelector(".play-again-btn button"); // Play again button

// Counter variables
let trueAnswersCounter = 0; // True answers counter
let indexOfQuestion = 0; // Index of the activated question
// End of variabkes

// Functions

// Change to elements that contains active (questions,answers,true answer)
function changeVaiablesWithActive() {
  allQuestions[indexOfQuestion].classList.add("active");
  question = document.querySelector(".quiz-app > .active");
  answers = document.querySelectorAll(".active .answers .answer");
  trueAnswer = document.querySelector(".active .true");
}

// Change the background of the answer on clicking it to see if it is true or false
function resultOfAnswer() {
  answers.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      console.log(trueAnswersCounter);

      // If answer is true
      if (ele.classList.contains("true")) {
        ele.style.cssText = "background-color: lightgreen;";
        // Increase true answers by one for each true answer
        trueAnswersCounter++;
        // If answer is false
      } else {
        ele.style.cssText = "background-color: #e88a84;";
      }
      nextBtnContainer.style.cssText = "display: flex;"; // Show next btn after chosing an answer
      question.style.cssText = "pointer-events: none;"; // You can not change your answer after chosing an answer
      app.style.cssText = "cursor: no-drop;"; // Change the cursor to no-drop after chosing an answer
      trueAnswer.style.cssText = "background-color: lightgreen;";
    });
  });
}
// End of fuctions

// Go to the beginning after clicking play again button
playAgainBtn.addEventListener("click", () => {
  trueAnswersCounter = 0; // Set trueAnswersCounter to 0
  indexOfQuestion = 0; // Set indexOfQuestion to 0
  resultContainer.classList.remove("active");
  // Excute changeVaiablesWithActive function
  changeVaiablesWithActive();
  // Remove background-color property from all answers
  allAnswers.forEach((answer) => {
    answer.style.removeProperty("background-color");
  });
});

// Go to the next section after clicking next btn
nextBtn.addEventListener("click", () => {
  nextBtnContainer.style.cssText = "display: none;"; // Hide next btn after clicking next btn
  question.style.cssText = "pointer-events: auto;"; // You can not change your answer after chosing an answer
  app.style.cssText = "cursor: auto;"; // Change the cursor to no-drop after chosing an answer
  if (indexOfQuestion < 5) {
    indexOfQuestion++;
    result.textContent = `You Scored ${trueAnswersCounter} out of 4`;
  }
  allQuestions.forEach((question) => {
    question.classList.remove("active");
  });
  changeVaiablesWithActive();
  
});
resultOfAnswer();