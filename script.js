const quizData = [
  {
    question: "Which type of JavaScript language is ___",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    correct: "b",
  },
  {
    question:
      "Which one of the following also known as Conditional Expression:",
    a: "Alternative to if-else",
    b: "Switch statement",
    c: "If-then-else statement",
    d: "immediate if",
    correct: "d",
  },
  {
    question: "Which of the following is not JavaScript Data Types?",
    a: "Undefined",
    b: "Number",
    c: "Boolean",
    d: "Float",
    correct: "d",
  },
  {
    question: " What does javascript use instead of == and !=?",
    a: "It uses bitwise checking",
    b: "It uses === and !== instead",
    c: "It uses equals() and notequals() instead",
    d: "It uses equalto()",
    correct: "b",
  },
  {
    question: "What is defination of an undefined value in JavaScript?",
    a: "Variable used in the code does not exist",
    b: "Variable is not assigned to any value",
    c: "Property does not exist",
    d: "All of the above",
    correct: "d",
  },
];

const questionEle = document.getElementById("question");
const quiz = document.getElementById("quiz");
const answerEle = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
// let answer=undefined;
let score = 0;

loadQuiz();
function loadQuiz() {
  deleteAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEle.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  // console.log('clicked');

  let answer = undefined;

  answerEle.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
    // console.log(answer.checked);
  });
  return answer;
}

function deleteAnswers() {
  answerEle.forEach((answerEl) => {
    answerEl.checked = false;
    // console.log(answer.checked);
  });
}

submitBtn.addEventListener("click", () => {
  //check to see answer
  const answer = getSelected();
  // console.log(answer);

  if (answer) {
    if (answer == quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
            <button onclick = "location.reload()">Reload</button>`;

      // alert('Congratulations ! You finished it.');
    }
  }
});
