const quizData = [
  {
    question: "В чем отличие между локальной и глобальной переменной?",
    a: "Отличий нет",
    b: "Локальные можно переопределять, глобальные нельзя",
    c: "Глобальные можно переопределять, локальные нельзя",
    d: "Глобальные видны повсюду, локальные только в функциях",
    correct: "d",
  },
  {
    question: "JSON - это...",
    a: "имя создателя JavaScript",
    b: "JavaScript Over Network",
    c: "название следующей версии JavaScript",
    d: "JavaScript Object Notation",
    correct: "d",
  },
  {
    question: "Как объявить функцию в JavaScript?",
    a: "function:MyFunction()",
    b: "function = New MyFunction()",
    c: "function = MyFunction()",
    d: "function MyFunction()",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEl.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  window.navigator.vibrate(100);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2>Из ${quizData.length}  вопросов ${score} is correct </h2>

            <button onclick="location.reload()">Заново</button>
            `;
    }
  }
});
