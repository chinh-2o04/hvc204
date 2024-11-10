const questions = [
    { 
        text: "Bạn biết Chính qua đâu?", 
        options: ["Tình cờ", "Bạn bè giới thiệu"] 
    },
    { 
        text: "Bạn có thích Chính chứ?", 
        options: ["Có", "Không"] 
    },
    { 
        text: "Làm quen với tớ nhé?", 
        options: ["Đồng ý", "Không đồng ý"] 
    }
];

let currentQuestion = 0;

function start() {
    const name = document.getElementById("nameInput").value;
    if (name) {
        document.querySelector("h1").textContent = `Chào ${name}!`;
        document.querySelector("p").style.display = "none";
        document.getElementById("nameInput").style.display = "none";
        document.querySelector("button").style.display = "none";
        document.getElementById("questionContainer").style.display = "block";
        showQuestion();
    } else {
        alert("Hãy nhập tên của bạn nhé!");
    }
}
function showQuestion() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answerButtons");
    answerButtons.innerHTML = "";  // Xóa các nút trả lời cũ
    const question = questions[currentQuestion];
    questionElement.textContent = question.text;

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "answer-button";
        if (option === "Không đồng ý" && currentQuestion === 2) {
            button.onclick = () => moveButton(button);
        } else {
            button.onclick = () => handleAnswer(option);
        }
        answerButtons.appendChild(button);
    });
}

function handleAnswer(option) {
    if (currentQuestion === 2 && option === "Đồng ý") {
        showFireworks();
        showPhoneNumber();
    } else if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function showFireworks() {
    const fireworksContainer = document.createElement("div");
    fireworksContainer.className = "fireworks";
    document.body.appendChild(fireworksContainer);
    setTimeout(() => fireworksContainer.remove(), 5000);
}

function showPhoneNumber() {
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Số điện thoại của Chính: 0975070643";
    phoneNumber.className = "phone-number";
    document.querySelector(".container").appendChild(phoneNumber);
}
