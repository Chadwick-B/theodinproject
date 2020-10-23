const BUTTON_VALUE = {
    CLEAR: "Escape",
    BACKSPACE: "Backspace",
    EQUALS: "Enter",
    ADD: "+",
    SUBTRACT: "-",
    MULTIPLY: "*",
    DIVIDE: "/",
    DECIMAL: ".",
}
setEvents();
clear();

function setEvents() {
    const calculator = document.getElementById('calculator');
    window.addEventListener('keydown', logKey);
    calculator.addEventListener('click', logClick);
}

function logClick(e) {
    if (e.target.nodeName === "BUTTON") { buttonAction(e.target.value); }
}

function logKey(e) {
    if (e.key === BUTTON_VALUE.EQUALS) { e.preventDefault(); }
    buttonAction(e.key);
}

// should avoid global enum + switch statement if this were wider scale
// use closure + object mapping keys to functions for scalability
function buttonAction(buttonPressed) {
    const display = document.getElementById('display');
    const txt = display.value;

    switch (buttonPressed) {
        case BUTTON_VALUE.CLEAR:
            display.value = clear();
            break;
        case BUTTON_VALUE.BACKSPACE:
            display.value = backspace(txt);
            break;
        case BUTTON_VALUE.EQUALS:
            display.value = equals(txt);
            break;
        case BUTTON_VALUE.ADD:
        case BUTTON_VALUE.SUBTRACT:
        case BUTTON_VALUE.MULTIPLY:
        case BUTTON_VALUE.DIVIDE:
            display.value = updateOperator(txt, buttonPressed);
            break;
        default:
            const isDigitRegex = /[0-9]/;
            if (isDigitRegex.test(buttonPressed)) {
                display.value = updateDigit(txt, buttonPressed);
                break;
            }
            break;
    }
}

function updateDigit(str, digit) {
    return str + digit;
}

function updateOperator(str, operator) {
    const len = str.length;
    if (len === 0) { return str; }

    const isOperatorRegex = /[^0-9]/;
    if (isOperatorRegex.test(str[len-1])) { return str; }

    if (operator === BUTTON_VALUE.DECIMAL && str.includes(BUTTON_VALUE.DECIMAL)) { return str; }

    return str + operator;
}

function clear() {
    return "";
}

function backspace(str) {
    if (str.length > 0) { return str.slice(0, -1); }
}

// this is pretty messy, unnecessary regex checks
function equals(operationStr) {
    const str = operationStr;
    if (str === '') { return ''; }
    const lastChar = str[str.length - 1];
    const isOperatorRegex = /[^0-9\.]/;
    const allNumbersRegex = /[0-9\.]/g;
    if (isOperatorRegex.test(lastChar)) { return; }

    const numbers = str.split(isOperatorRegex);
    const operators = str.replace(allNumbersRegex, '')
                        .split('');

    
    let total = numbers.shift();
    if (numbers.length === 0) { return total; }
    for (number of numbers) {
        const operator = operators.shift();
        total = operate(total, operator, number);
        if (total === undefined) { return; }
    }
    return Math.round((total + Number.EPSILON) * 100) / 100;
}

function operate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case BUTTON_VALUE.ADD:
            return num1 + num2;
        case BUTTON_VALUE.SUBTRACT:
            return num1 - num2;
        case BUTTON_VALUE.MULTIPLY:
            return num1 * num2;
        case BUTTON_VALUE.DIVIDE:
            if (num2 === 0) { return; }
            return num1 / num2;
        default:
            return;
    }
}