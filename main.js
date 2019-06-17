'use strict';

const SELECTORS = {
    INPUT: ".number__field",
    BUTTON: ".numbers__button",
};

function onNumberClick(event) {
    const input = document.querySelector(SELECTORS.INPUT);
    const buttonValue = event.target.innerHTML;

    input.value += buttonValue.toString();
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelectorAll(SELECTORS.BUTTON).forEach (function (button) {
    button.addEventListener("click", onNumberClick);
});
/*function onNumberClick(e) {
    // e - MouseEvent (содержит информацию о клике)
    if (e.target.innerHTML === 'c') {
        // Если нажата кнопка "с", то стирает все из текстового поля
        textArea.innerHTML = '0';
    } else if (e.target.innerHTML === '=') {
        // Если нажата кнопка "=", то, приведя выражение
        // в текстовом поле к javascript, вычислить значение
        textArea.innerHTML = eval(textArea.innerHTML);
    } else if (textArea.innerHTML === '0') {
        // Если textarea содержит только "0", то
        // стереть "0" и записать
        // значения кнопки в текстовое поле
        textArea.innerHTML = e.target.innerHTML;
    } else {
        // Добавление значения кнопки в текстовое поле
        textArea.innerHTML += e.target.innerHTML;
    }
}
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(SELECTORS.BUTTON);
    button.addEventListener("click", onNumberClick);
});
*/