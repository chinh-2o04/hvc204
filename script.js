function uploadFile() {
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    if (!file) {
        alert("Hãy chọn một file để tải lên!");
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            displayQuiz(data);
        }
    })
    .catch(error => console.error('Error:', error));
}

function displayQuiz(questions) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('h3');
        questionText.innerText = `${index + 1}. ${question.question}`;
        questionDiv.appendChild(questionText);

        question.options.forEach((option, idx) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option');
            optionDiv.innerText = option;
            optionDiv.onclick = () => selectOption(optionDiv, index, questions);
            questionDiv.appendChild(optionDiv);
        });

        quizContainer.appendChild(questionDiv);
    });
}

function selectOption(optionDiv, questionIndex, questions) {
    // Your logic to handle the selection of options (highlight correct answer, etc.)
}
