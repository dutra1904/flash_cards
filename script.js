// Base de perguntas e respostas
let questions = [
  {
    question: "What is the capital of France?",
    correct: "B",
    options: { A: "Berlin", B: "Paris", C: "Madrid", D: "Rome" },
    info: "Paris is the capital city of France and is known as the City of Light."
  },
  {
    question: "What is 2 + 2?",
    correct: "C",
    options: { A: "3", B: "5", C: "4", D: "6" },
    info: "The answer is 4 because it is the sum of 2 and 2."
  },
  {
    question: "What is the largest planet in our Solar System?",
    correct: "D",
    options: { A: "Earth", B: "Venus", C: "Mars", D: "Jupiter" },
    info: "Jupiter is the largest planet in our Solar System."
  },
];

let currentQuestion = 0;
let correctCount = 0;
let incorrectCount = 0;

// Selecionar elementos
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const addCardContainer = document.getElementById("add-card-container");
const flashcardGame = document.getElementById("flashcard-game");
const mainMenu = document.getElementById("main-menu");
const backToMainButton = document.getElementById("back-to-main"); // Botão de voltar ao menu
const backToMenuGameButton = document.getElementById("back-to-menu-game"); // Botão de voltar ao menu durante o jogo

// Função para carregar a pergunta
function loadQuestion() {
  feedbackEl.textContent = "";
  if (currentQuestion < questions.length) {
    const current = questions[currentQuestion];
    questionEl.textContent = current.question;
    answersEl.innerHTML = "";

    Object.entries(current.options).forEach(([key, value]) => {
      const button = document.createElement("button");
      button.textContent = `${key}: ${value}`;
      button.addEventListener("click", () => checkAnswer(key));
      answersEl.appendChild(button);
    });
  } else {
    // Mostrar mensagem de fim de jogo quando todas as perguntas forem respondidas
    questionEl.textContent = "You've answered all the questions!";
    answersEl.innerHTML = "";
    feedbackEl.textContent = `Game Over! Correct answers: ${correctCount}, Incorrect answers: ${incorrectCount}`;
    feedbackEl.style.color = "blue";
    document.getElementById("next").style.display = "none"; // Esconder o botão de próxima pergunta
    document.getElementById("reset").style.display = "inline"; // Mostrar o botão de reiniciar
  }
}

// Verificar resposta
function checkAnswer(selected) {
  const current = questions[currentQuestion];
  if (selected === current.correct) {
    feedbackEl.textContent = "Congratulations! Correct answer.";
    feedbackEl.style.color = "green";
    correctCount++;
  } else {
    feedbackEl.textContent = "Sorry, that's incorrect.";
    feedbackEl.style.color = "red";
    incorrectCount++;
  }
}

// Função para mostrar a tela de adicionar flashcard
document.getElementById("create-flashcards").addEventListener("click", () => {
  mainMenu.style.display = "none";
  addCardContainer.style.display = "block";
});

// Função para mostrar a tela de jogo
document.getElementById("play-game").addEventListener("click", () => {
  mainMenu.style.display = "none";
  flashcardGame.style.display = "block";
  loadQuestion();
});

// Adicionar novo flashcard
const addCardForm = document.getElementById("add-card-form");
addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newQuestion = document.getElementById("new-question").value;
  const optionA = document.getElementById("option-a").value;
  const optionB = document.getElementById("option-b").value;
  const optionC = document.getElementById("option-c").value;
  const optionD = document.getElementById("option-d").value;
  const correctAnswer = document.getElementById("correct-answer").value.toUpperCase();
  const additionalInfo = document.getElementById("additional-info").value;

  if (!["A", "B", "C", "D"].includes(correctAnswer)) {
    alert("Correct answer must be A, B, C, or D.");
    return;
  }

  const newFlashCard = {
    question: newQuestion,
    correct: correctAnswer,
    options: { A: optionA, B: optionB, C: optionC, D: optionD },
    info: additionalInfo,
  };

  questions.push(newFlashCard);
  addCardForm.reset();
  alert("FlashCard added successfully!");

  // Voltar para o menu principal
  addCardContainer.style.display = "none";
  mainMenu.style.display = "block";
});

// Voltar para a tela inicial durante o jogo
backToMenuGameButton.addEventListener("click", () => {
  flashcardGame.style.display = "none";
  mainMenu.style.display = "block";
});

// Voltar para a tela inicial
backToMainButton.addEventListener("click", () => {
  addCardContainer.style.display = "none";
  mainMenu.style.display = "block";
});

// Mostrar resultados
document.getElementById("results").addEventListener("click", () => {
  alert(`Correct: ${correctCount}, Incorrect: ${incorrectCount}`);
});

// Resetar resultados
document.getElementById("reset").addEventListener("click", () => {
  correctCount = 0;
  incorrectCount = 0;
  currentQuestion = 0; // Resetando as perguntas para o início
  alert("Game reset!");
  loadQuestion(); // Recarregar a primeira pergunta
});

// Shuffle perguntas
document.getElementById("shuffle").addEventListener("click", () => {
  questions.sort(() => Math.random() - 0.5);
  loadQuestion();
});

// Mostrar mais informações
document.getElementById("more-info").addEventListener("click", () => {
  alert(questions[currentQuestion].info);
});

// Próxima pergunta
document.getElementById("next").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    currentQuestion = 0; // Reinicia o jogo se as perguntas acabaram
  }
  loadQuestion();
});
