let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// Load questions from JSON
async function loadQuestions() {
    const response = await fetch("questions.json");
    questions = await response.json();
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        ${question.options.map((option, index) => `
            <div class="option" onclick="selectAnswer(${index})">${option}</div>
        `).join("")}
    `;
}

// Handle answer selection
function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const correctOption = question.options.findIndex(option => option.includes('<span style="color:red">'));
    if (selectedIndex === correctOption) {
        score++;
    }
    document.querySelectorAll(".option").forEach((opt, idx) => {
        opt.style.backgroundColor = idx === correctOption ? "green" : idx === selectedIndex ? "red" : "#e4e4e4";
    });
    document.getElementById("next-button").style.display = "block";
}

// Load the next question
function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById("next-button").style.display = "none";
    } else {
        displayScore();
    }
}

// Display score
function displayScore() {
    document.getElementById("quiz-container").innerHTML = `<h3>Your Score: ${score} / ${questions.length}</h3>`;
}

loadQuestions();
