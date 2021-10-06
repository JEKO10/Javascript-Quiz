import { question1 } from "./questions/question1.js";
import { question2 } from "./questions/question2.js";
import { question3 } from "./questions/question3.js";

const question = document.querySelector("#question");
const optionFirst = document.querySelector(".optionFirst");
const optionSecond = document.querySelector(".optionSecond");
const optionThird = document.querySelector(".optionThird");
const optionFourth = document.querySelector(".optionFourth");
const btn = document.querySelector("#btn");
const answers = document.querySelectorAll(".answer");

const questionsArray = [question1, question2, question3];
const random = Math.floor(Math.random() * 3);

let counter = -1;
let numQ = 0;
let correct = 0;
let wrong = 0;

answers.forEach((item) => {
  item.addEventListener("click", () => {
    btn.classList.remove("none");
    if (
      parseInt(item.getAttribute("data-num")) ===
      questionsArray[random].questions[counter].correctIndex
    ) {
      item.classList.add("correct");
      correct++;
    } else {
      item.classList.add("wrong");
      wrong++;
    }
    if (
      optionFirst.classList.contains("correct") ||
      optionFirst.classList.contains("wrong")
    ) {
      optionSecond.classList.add("hidden");
      optionThird.classList.add("hidden");
      optionFourth.classList.add("hidden");
    } else if (
      optionSecond.classList.contains("correct") ||
      optionSecond.classList.contains("wrong")
    ) {
      optionFirst.classList.add("hidden");
      optionThird.classList.add("hidden");
      optionFourth.classList.add("hidden");
    } else if (
      optionThird.classList.contains("correct") ||
      optionThird.classList.contains("wrong")
    ) {
      optionFirst.classList.add("hidden");
      optionSecond.classList.add("hidden");
      optionFourth.classList.add("hidden");
    } else if (
      optionFourth.classList.contains("correct") ||
      optionFourth.classList.contains("wrong")
    ) {
      optionFirst.classList.add("hidden");
      optionSecond.classList.add("hidden");
      optionThird.classList.add("hidden");
    }
  });
});

btn.addEventListener("click", () => {
  counter++;
  numQ++;
  btn.classList.add("none");
  btn.innerHTML = "Next";
  nextQuestion();
  answers.forEach((item) => {
    item.classList.remove("correct");
    item.classList.remove("wrong");
    item.classList.remove("hidden");
  });
});

const nextQuestion = () => {
  if (counter < 12) {
    question.innerHTML =
      `${numQ}. ` + questionsArray[random].questions[counter].question;
    optionFirst.innerHTML =
      questionsArray[random].questions[counter].answers[0];
    optionSecond.innerHTML =
      questionsArray[random].questions[counter].answers[1];
    optionThird.innerHTML =
      questionsArray[random].questions[counter].answers[2];
    optionFourth.innerHTML =
      questionsArray[random].questions[counter].answers[3];
  }
};
