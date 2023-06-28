// Таблиця істинності для вмикача
var data = [
    ["x", "y"],
    [0, 0],
    [1, 1]
];

// Створення таблиці
var table = document.createElement("table");

// Заповнення таблиці даними
for (var i = 0; i < data.length; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < data[i].length; j++) {
        var cell = document.createElement("td");
        cell.textContent = data[i][j];
        row.appendChild(cell);
    }
    table.appendChild(row);
}

// Вставка таблиці у документ
document.body.appendChild(table);

// Функція перевірки відповіді
function checkAnswer() {
    var correctAnswers = data.slice(1).map(function(row) {
        return row[row.length - 1];
    });

    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    var userAnswers = [];

    checkboxes.forEach(function(checkbox) {
        var value = checkbox.checked ? 1 : 0;
        userAnswers.push(value);
    });

    if (userAnswers.length === 0) {
        alert("Ви не вибрали жодної відповіді!");
    } else if (JSON.stringify(userAnswers) === JSON.stringify(correctAnswers)) {
        alert("Вітаємо! Ваші відповіді є правильними.");
    } else {
        alert("На жаль, ваші відповіді є неправильними.");
    }
}

// Додавання події для кнопки перевірки
document.getElementById("checkButton").addEventListener("click", checkAnswer);
