const display = document.querySelector('.answer-numbers');
const numButtons = document.querySelectorAll('#num');
const operandButtons = document.querySelectorAll('#op');
const clearAllButton = document.querySelector('.C');
const deleteButton = document.querySelector('.delete');
const equalsButton = document.querySelector('.equals');


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function percent(a, b) {
    return a % b;
}


let operator = null;
let answer = null;

function operate(operator, a, b) {
    return operator(a, b);
}

deleteButton.addEventListener('click', () => {
    let string = display.textContent.toString();
    display.textContent = string.substring(0, string.length - 1);
});

clearAllButton.addEventListener('click', () => {
    location.reload();
});

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    })
});

let arrNum = null;
let firstNum = null;
let secondNum = null;
operandButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = display.textContent + ' ' + button.textContent + ' ';
        operator = button.classList;
    })
});



equalsButton.addEventListener('click', () => {
    arrNum = display.textContent.split(' ');
    firstNum = arrNum[0];
    secondNum = arrNum[2];

    if (operator.value == 'percent') {
        return answer = operate(percent, Number(firstNum), Number(secondNum)),
        display.textContent = answer;
    } else if (operator.value == "division") {
        return answer = operate(divide, Number(firstNum), Number(secondNum)),
        display.textContent = answer;
    } else if (operator.value == 'multi') {
        return answer = operate(multiply, Number(firstNum), Number(secondNum)),
        display.textContent = answer;
    } else if (operator.value == 'minus') {
        return answer = operate(subtract, Number(firstNum), Number(secondNum)),
        display.textContent = answer;
    } else if (operator.value == 'plus') {
        return answer = operate(add, Number(firstNum), Number(secondNum)),
        display.textContent = answer;
    } else {
        console.log('Write numbers please!');
    }
})