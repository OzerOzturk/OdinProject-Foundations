let numberButtons = document.querySelectorAll('.number-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');
let totalButton = document.querySelector('#total-btn');
let deleteButton = document.querySelector('#delete-btn');
let clearButton = document.querySelector('#clear-btn');
let decimalButton = document.querySelector('#decimal-btn');
let display = document.querySelector('#number-display');

/* four operations functions */

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

/* other functions */

function operate(num1, num2, operator) {
    if ((num1 == 0 || num2 == 0) && operator == divide) {
        return 'Error';
    }
    return operator(num1, num2);
}


function checkOperator(string) {
    switch (string) {
        case 'add':
            return add;
        case 'subtract':
            return subtract;
        case 'multiply':
            return multiply;
        case 'divide':
            return divide;
    }
}

