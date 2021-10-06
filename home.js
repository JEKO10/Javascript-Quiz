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

answers.forEach((item) => {
  item.addEventListener("click", () => {
    btn.classList.remove("none");
  });
});

btn.addEventListener("click", () => {
  counter++;
  numQ++;
  btn.classList.add("none");
  btn.innerHTML = "Next";
  nextQuestion();
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
