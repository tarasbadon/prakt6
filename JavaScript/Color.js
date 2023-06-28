const cselect = document.querySelector('select');
const body = document.querySelector('body');

function change() {
    body.style.backgroundColor = cselect.value;
}
