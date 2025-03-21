document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    document.getElementById('startButton').classList.add('hidden');
    document.getElementById('questionsContainer').classList.remove('hidden');
    document.getElementById('submitButton').classList.remove('hidden');
    startTimer(5 * 60, document.getElementById('timer'));
    loadQuestions();
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `Time left: ${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(interval);
            showResult('You lost!', 'Time is up. Better luck next time!');
        }
    }, 1000);
}

function loadQuestions() {
    const questions = [
        { question: "What is the synonym of 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: "Joyful" },
        { question: "What is the antonym of 'fast'?", options: ["Quick", "Slow", "Rapid", "Swift"], answer: "Slow" },
        { question: "Which word is a noun?", options: ["Run", "Beautiful", "Happiness", "Quickly"], answer: "Happiness" },
        { question: "What is the past tense of 'go'?", options: ["Goes", "Went", "Gone", "Going"], answer: "Went" },
        { question: "Which word is a verb?", options: ["Jump", "Blue", "Quick", "Happiness"], answer: "Jump" },
        { question: "What is the synonym of 'big'?", options: ["Small", "Tiny", "Large", "Little"], answer: "Large" },
        { question: "What is the antonym of 'hot'?", options: ["Warm", "Cold", "Cool", "Boiling"], answer: "Cold" },
        { question: "Which word is an adjective?", options: ["Run", "Beautiful", "Happiness", "Quickly"], answer: "Beautiful" },
        { question: "What is the past tense of 'eat'?", options: ["Eats", "Eating", "Ate", "Eaten"], answer: "Ate" },
        { question: "Which word is an adverb?", options: ["Run", "Beautiful", "Happiness", "Quickly"], answer: "Quickly" },
        { question: "What is the synonym of 'smart'?", options: ["Dumb", "Intelligent", "Stupid", "Foolish"], answer: "Intelligent" },
        { question: "What is the antonym of 'strong'?", options: ["Weak", "Powerful", "Mighty", "Robust"], answer: "Weak" },
        { question: "Which word is a pronoun?", options: ["He", "Run", "Beautiful", "Happiness"], answer: "He" },
        { question: "What is the past tense of 'see'?", options: ["Sees", "Seeing", "Saw", "Seen"], answer: "Saw" },
        { question: "Which word is a conjunction?", options: ["And", "Run", "Beautiful", "Happiness"], answer: "And" }
    ];

    const quizForm = document.getElementById('quizForm');
    quizForm.innerHTML = ''; // Clear any existing questions
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map(option => `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label>`).join('<br>')}
        `;
        quizForm.appendChild(questionElement);
    });
}

document.getElementById('submitButton').addEventListener('click', submitQuiz);

function submitQuiz() {
    const questions = [
        { question: "What is the synonym of 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: "Joyful" },
        { question: "What is the antonym of 'fast'?", options: ["Quick", "Slow", "Rapid", "Swift"], answer: "Slow" },
        { question: "Which word is a noun?", options: ["Run", "Beautiful", "Happiness", "Quickly"], answer: "Happiness" },
        { question: "What is the past tense of 'go'?", options: ["Goes", "Went", "Gone", "Going"], answer: "Went" },
        { question: "Which word is a verb?", options: ["Jump", "Blue", "Quick", "Happiness"], answer: "Jump" },
        { question: "What is the synonym of 'big'?", options: ["Small", "Tiny", "Large", "Little"], answer: "Large" },
        { question: "What is the antonym of 'hot'?", options: ["Warm", "Cold", "Cool", "Boiling"], answer: "Cold" },
        { question: "Which word is an adjective?", options: ["Run", "Beautiful", "Happiness", "Quickly"], answer: "Beautiful" },
        { question: "What is the past tense of 'eat'?", options: ["Eats", "Eating", "Ate", "Eaten"], answer: "Ate" },
        { question: "Which word is an adverb?", options: ["Run", "Beautiful", "Happiness", "Quickly"], answer: "Quickly" },
        { question: "What is the synonym of 'smart'?", options: ["Dumb", "Intelligent", "Stupid", "Foolish"], answer: "Intelligent" },
        { question: "What is the antonym of 'strong'?", options: ["Weak", "Powerful", "Mighty", "Robust"], answer: "Weak" },
        { question: "Which word is a pronoun?", options: ["He", "Run", "Beautiful", "Happiness"], answer: "He" },
        { question: "What is the past tense of 'see'?", options: ["Sees", "Seeing", "Saw", "Seen"], answer: "Saw" },
        { question: "Which word is a conjunction?", options: ["And", "Run", "Beautiful", "Happiness"], answer: "And" }
    ];

    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    if (score >= 12) { // Assuming 80% is the passing score
        showResult('You won!', `Congratulations! You answered ${score} out of ${questions.length} questions correctly.`);
    } else {
        showResult('You lost!', `You answered ${score} out of ${questions.length} questions correctly. Better luck next time!`);
    }
}

function showResult(title, message) {
    document.getElementById('resultTitle').innerText = title;
    document.getElementById('resultMessage').innerText = message;
    document.getElementById('resultModal').style.display = 'block';
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 5000);
}

function closeResultModal() {
    document.getElementById('resultModal').style.display = 'none';
    window.location.href = 'index.html';
}