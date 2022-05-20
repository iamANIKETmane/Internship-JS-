const quizData = [
  {
    question: "When did india got independence?",
    a: "1940",
    b: "1840",
    c: "1947",
    d: "1948",
    correct: "c",
  },
  {
    question: "national animal of india?",
    a: "lion",
    b: "tiger",
    c: "peacock",
    d: "elephant",
    correct: "b",
  },
  {
    question: "Who is the president of india?",
    a: "Narendra Modi",
    b: "Sharad Pawar",
    c: "Rahul Gandi ",
    d: "Ram Nath Kovind",
    correct: "d",
  },
  {
    question: "national bird of india?",
    a: "hen",
    b: "crow",
    c: "peacock",
    d: "elephant",
    correct: "c",
  },
  {
    question: "Who is the president of USA?",
    a: "Narendra Modi",
    b: "Joe Biden",
    c: "Kamla Haris  ",
    d: "Ram Nath Kovind",
    correct: "b",
  },
  {
    question: "full form of html ",
    a: "hyper text markup language",
    b: "high textual meaning language ",
    c: "hello text maker language ",
    d: "none of the above ",
    correct: "a",
  },
  {
    question: "What year was Js launched ?",
    a: "2020",
    b: "1996",
    c: "2002 ",
    d: "1994",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
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

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
