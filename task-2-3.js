 // Генерация случайного угла от 0 до 360
 const minAngle = 0;
 const maxAngle = 360;
 const targetAngle = Math.floor(Math.random() * (maxAngle - minAngle + 1)) + minAngle;
 
 let attempts = 2; // Количество попыток
 let userInput; // Объявляем переменную для пользовательского ввода

 for (let i = 0; i < attempts; i++) {
     // Запрашиваем ввод пользователя
     userInput = prompt("Введите угол (от 0 до 360):");

     // Проверка на отмену ввода
     if (userInput === null) {
         alert("Вы отменили игру.");
         break;
     }

     // Преобразуем ввод в число
     let userAngle = Number(userInput);

     // Проверяем, является ли ввод числом
     if (isNaN(userAngle)) {
         alert("Пожалуйста, введите корректное число.");
         i--; // Уменьшаем счетчик попыток, чтобы не терять попытку за некорректный ввод
         continue; // Переходим к следующей итерации цикла
     }

     // Сравниваем введённый угол с загаданным
     if (userAngle < minAngle || userAngle > maxAngle) {
         alert("Число должно быть в диапазоне от " + minAngle + " до " + maxAngle + ".");
         i--; // Уменьшаем счетчик попыток
     } else if (userAngle === targetAngle) {
         alert("Попадание! Угаданный угол: " + targetAngle);
         break; // Выходим из цикла, так как пользователь угадал угол
     } else if (userAngle > targetAngle) {
         alert("Промах, возьмите чутка ниже.");
     } else {
         alert("Промах, возьмите чутка выше.");
     }
 }

 // Если пользователь не угадал после двух попыток
 if (userInput !== null && attempts === 2) {
     alert("Вы проиграли! Загаданный угол был: " + targetAngle);
 }