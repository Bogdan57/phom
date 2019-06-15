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
    const button = document.querySelector(SELECTORS.BUTTON);
    button.addEventListener("click", onNumberClick);
});