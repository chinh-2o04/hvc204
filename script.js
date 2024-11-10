const questions = [
    { question: "2 + 2 = ?", answers: [{ text: "4", correct: true }, { text: "5", correct: false }] },
    { question: "5 - 2 = ?", answers: [{ text: "3", correct: true }, { text: "4", correct: false }] },
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add("hide");
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = "";
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        alert("Đúng!");
    } else {
        alert("Sai!");
    }
    nextButton.classList.remove("hide");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        alert("Kết thúc trắc nghiệm!");
        startQuiz();
    }
});

startQuiz();
