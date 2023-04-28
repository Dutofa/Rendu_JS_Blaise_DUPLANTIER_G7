// Pour afficher les réponses et les enlever

const seeanswer1 = document.querySelector(".see-answer1");
const answer1 = document.querySelector(".answer1");
const seeanswer2 = document.querySelector(".see-answer2");
const answer2 = document.querySelector(".answer2");
const seeanswer3 = document.querySelector(".see-answer3");
const answer3 = document.querySelector(".answer3");
const seeanswer4 = document.querySelector(".see-answer4");
const answer4 = document.querySelector(".answer4");
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");

seeanswer1.addEventListener("click", () => {
  answer1.classList.toggle("mobile-menu");
  box1.classList.toggle("espace");
});

seeanswer2.addEventListener("click", () => {
  answer2.classList.toggle("mobile-menu");
  box2.classList.toggle("espace");
});

seeanswer3.addEventListener("click", () => {
  answer3.classList.toggle("mobile-menu");
  box3.classList.toggle("espace");
});

seeanswer4.addEventListener("click", () => {
  answer4.classList.toggle("mobile-menu");
  box4.classList.toggle("espace");
});

// Question1
const right = document.querySelector(".right");
const wrong = document.querySelector(".wrong");
const wrong2 = document.querySelector(".wrong-2");
const wrong3 = document.querySelector(".wrong-3");

right.addEventListener("click", () => {
  right.classList.add("green-screen");
});

wrong.addEventListener("click", () => {
  wrong.classList.add("red-screen");
});

wrong2.addEventListener("click", () => {
  wrong2.classList.add("red-screen");
});

wrong3.addEventListener("click", () => {
  wrong3.classList.add("red-screen");
});

// Question 2
const rightQ2 = document.querySelector(".right-Q2");
const wrongQ2 = document.querySelector(".wrong-Q2");
const wrong2Q2 = document.querySelector(".wrong-2-Q2");
const wrong3Q2 = document.querySelector(".wrong-3-Q2");

rightQ2.addEventListener("click", () => {
  rightQ2.classList.add("green-screen");
});

wrongQ2.addEventListener("click", () => {
  wrongQ2.classList.add("red-screen");
});

wrong2Q2.addEventListener("click", () => {
  wrong2Q2.classList.add("red-screen");
});

wrong3Q2.addEventListener("click", () => {
  wrong3Q2.classList.add("red-screen");
});

// Question 3

const rightQ3 = document.querySelector(".right-Q3");
const wrongQ3 = document.querySelector(".wrong-Q3");
const wrong2Q3 = document.querySelector(".wrong-2-Q3");
const wrong3Q3 = document.querySelector(".wrong-3-Q3");

rightQ3.addEventListener("click", () => {
  rightQ3.classList.add("green-screen");
});

wrongQ3.addEventListener("click", () => {
  wrongQ3.classList.add("red-screen");
});

wrong2Q3.addEventListener("click", () => {
  wrong2Q3.classList.add("red-screen");
});

wrong3Q3.addEventListener("click", () => {
  wrong3Q3.classList.add("red-screen");
});

// Question 4

const rightQ4 = document.querySelector(".right-Q4");
const wrongQ4 = document.querySelector(".wrong-Q4");
const wrong2Q4 = document.querySelector(".wrong-2-Q4");
const wrong3Q4 = document.querySelector(".wrong-3-Q4");

rightQ4.addEventListener("click", () => {
  rightQ4.classList.add("green-screen");
});

wrongQ4.addEventListener("click", () => {
  wrongQ4.classList.add("red-screen");
});

wrong2Q4.addEventListener("click", () => {
  wrong2Q4.classList.add("red-screen");
});

wrong3Q4.addEventListener("click", () => {
  wrong3Q4.classList.add("red-screen");
});

// Paramètre du dark mode

const darkmode = document.querySelector(".dark-mode");
const body = document.querySelector("body");

darkmode.addEventListener("click", () => {
  body.classList.toggle("body-dark");
  box1.classList.toggle("box-dark");
  box2.classList.toggle("box-dark");
  box3.classList.toggle("box-dark");
  box4.classList.toggle("box-dark");
});