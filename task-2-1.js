
const quizQuestions = [
    { question: "Какой язык используется для веб-разработки?", answer: "JavaScript" },
    { question: "Кто создал JavaScript?", answer: "Бренден Ик" },
    { question: "Что такое CSS?", answer: "Cascading Style Sheets" },
    { question: "Какой метод используется для выбора элемента по его ID в JavaScript?", answer: "getElementById" },
    { question: "Что такое HTML?", answer: "HyperText Markup Language" }
];

let correctAnswersCount = 0; 
let userAnswer; 


for (let i = 0; i < quizQuestions.length; i++) {
    const currentQuestion = quizQuestions[i];
    
    
    userAnswer = prompt(currentQuestion.question);

    
    if (userAnswer === null) {
        alert("Вы отменили ввод. Игра завершена.");
        break; 
    }

    // Проверяем ответ пользователя
    if (userAnswer.trim() === currentQuestion.answer) {
        alert("Правильный ответ");
        correctAnswersCount++; 
    } else {
        alert("Неправильный ответ. Правильный ответ: " + currentQuestion.answer);
    }
}

if (userAnswer !== null) { 
    alert("Вы ответили правильно на " + correctAnswersCount + " из " + quizQuestions.length + " вопросов.");
}
