const form = document.querySelector('form');
const resultInput = document.querySelector('#result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const number1 = +document.querySelector('#number1').value;
    const number2 = +document.querySelector('#number2').value;

    const sumer = number1 + number2;

    resultInput.value = sumer;

});