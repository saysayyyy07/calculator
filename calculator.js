const btnZero = document.querySelector(".zero");
const btnOne = document.querySelector(".one");
const btnTwo = document.querySelector(".two");
const btnThree = document.querySelector(".three");
const btnFour = document.querySelector(".four");
const btnFive = document.querySelector(".five");
const btnSix = document.querySelector(".six");
const btnSeven = document.querySelector(".seven");
const btnEight = document.querySelector(".eight");
const btnNine = document.querySelector(".nine");
const btnPlus = document.querySelector(".plus");
const btnSubtract = document.querySelector(".subtract");
const btnMultiply = document.querySelector(".multiply");
const btnDivide = document.querySelector(".divide");
const btnClear = document.querySelector(".clear");
const btnPolarity = document.querySelector(".polarity");
const btnEquals = document.querySelector(".equals")
const display = document.querySelector(".displayValue");
const btnsNumbers = document.querySelectorAll("number");
const btnDecimal = document.querySelector(".decimal");
const btnBlowUp = document.querySelector(".blowup");

btnZero.addEventListener("click", () => updateDisplayValue(0));
btnOne.addEventListener("click", () => updateDisplayValue(1));
btnTwo.addEventListener("click", () => updateDisplayValue(2));
btnThree.addEventListener("click", () => updateDisplayValue(3));
btnFour.addEventListener("click", () => updateDisplayValue(4));
btnFive.addEventListener("click", () => updateDisplayValue(5));
btnSix.addEventListener("click", () => updateDisplayValue(6));
btnSeven.addEventListener("click", () => updateDisplayValue(7));
btnEight.addEventListener("click", () => updateDisplayValue(8));
btnNine.addEventListener("click", () => updateDisplayValue(9));
btnClear.addEventListener("click", () => clearDisplay());
btnPlus.addEventListener("click", () => handleOperators("+"));
btnSubtract.addEventListener("click", () => handleOperators("‐"));
btnMultiply.addEventListener("click", () => handleOperators("×"));
btnDivide.addEventListener("click", () => handleOperators("÷"));
btnEquals.addEventListener("click", () => evaluateRequest());
btnDecimal.addEventListener("click", () => updateDisplayValue("."));
btnBlowUp.addEventListener("click", () => displayBlowUp());
btnPolarity.addEventListener("click", () => changePolarity());
document.addEventListener("keydown", (e) => {
    console.log(e.key)
    if (numbersList.includes(e.key)) updateDisplayValue(e.key);
    else if (e.key == "x" || e.key == "*") handleOperators("×");
    else if (keyPressList.includes(e.key)) handleOperators(e.key);
    else if (e.key == "=" || e.key == "Enter") evaluateRequest();
    else if (e.key == "/") handleOperators("÷");
    else if (e.key == "Backspace") clearDisplay();


})

let keyPressList = "+-"
let operatorList = "+‐×÷";
let numbersList = "0123456789.";
let displayArr = [];
display.textContent = 0;
let numOfOperators = 0;

let firstVar = "";
let operator = "";
let secondVar = "";
let currentAnswer = "";
let displayString = "";




function changePolarity() {
    updateDisplayValue("-")
}

function evaluateRequest() {
    displayArr.forEach((value) => {
    if (!operatorList.includes(value) && operator == "") {
        firstVar += value;
    }
    else if (operatorList.includes(value)) {
        operator = value;
    }
    else if (!operatorList.includes(value) && operator !== "") {
        secondVar += value;
    }
    })
    calculate(firstVar, operator, secondVar);
}

function handleOperators(operation) {
    console.log("num of operators: " + numOfOperators)
    if (numOfOperators >= 1) {
        firstVar = "";
        secondVar = "";
        display.textContent = "";
        operator = "";
        evaluateRequest();
        console.log(displayArr)
        displayArr = [];
        firstVar = currentAnswer;
        updateDisplayValue(firstVar);
        updateDisplayValue(operation);
    }
    else if (numOfOperators == 0) {
        updateDisplayValue(operation);
        numOfOperators++;
        console.log("whats happening here: " + displayString)
    }
}

function clearDisplay() {
    displayArr = [];
    display.textContent = 0;
    firstVar = "";
    secondVar = "";
    operator = "";
    displayString = "";
    currentAnswer = "";
    numOfOperators = 0;
}

function updateDisplayValue(num) {
    displayArr.push(num);
    console.log(displayArr)
    displayString += num;
    display.textContent = displayString;
    console.log(displayArr)
    firstVar = "";
    secondVar = "";
    operator = "";
}

function add(a, b) {
    return Number(a) + Number(b)
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a*b
}

function divide(a, b) {
    return a / b
}

function calculate(a, operator, b) {
    switch (operator) {
        case "+": displayAnswer(add(a, b));
           break;
        case "‐": displayAnswer((subtract(a, b)));
            break;
        case "×": displayAnswer(multiply(a, b));
            break;
        case "÷": displayAnswer(divide(a, b));
            break;

    }
}

function displayAnswer(answer) {
    clearDisplay();
    currentAnswer = answer;
    display.textContent = currentAnswer;
}

function displayBlowUp() {
    clearDisplay();
    display.textContent = 'SULAIMAN SYED INCOMINGGGG!!!!!'
}

