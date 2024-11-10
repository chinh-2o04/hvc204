let questions = []; // This will store all questions from JSON

// Function to load questions
async function loadQuestions() {
  const response = await fetch('questions.json');
  questions = await response.json();
}

function startQuiz() {
  const randomQuestions = [];
  while (randomQuestions.length < 30) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    if (!randomQuestions.includes(questions[randomIndex])) {
      randomQuestions.push(questions[randomIndex]);
    }
  }
  displayQuestions(randomQuestions);
}

function displayQuestions(questionsArray) {
  const questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = '';
  questionsArray.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `
      <h2>Question ${index + 1}</h2>
      <p>${question.question}</p>
      ${question.options.map(
        (option, i) => `<input type="radio" name="q${index}" value="${option}">${option}<br>`
      ).join('')}
    `;
    questionContainer.appendChild(questionElement);
  });
}

loadQuestions();
