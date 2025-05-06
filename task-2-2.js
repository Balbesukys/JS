let randomNumber = Math.floor(Math.random() * 10) + 1; // Генерация случайного числа от 1 до 10
    let attempts = 0;

    function guessNumber() {
        const userInput = document.getElementById('userInput').value;
        const messageDiv = document.getElementById('message');
        attempts++;

        if (userInput == randomNumber) {
            messageDiv.innerHTML = `Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`;
            resetGame();
        } else if (userInput < randomNumber) {
            messageDiv.innerHTML = 'Значение слишком маленькое. Попробуйте снова.';
        } else {
            messageDiv.innerHTML = 'Значение слишком большое. Попробуйте снова.';
        }
    }

    function resetGame() {
        randomNumber = Math.floor(Math.random() * 10) + 1; // Генерация нового числа
        attempts = 0;
        document.getElementById('userInput').value = ''; // Очистка поля ввода
    }