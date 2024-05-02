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
btnSubtract.addEventListener("click", () => handleOperators("-"));
btnMultiply.addEventListener("click", () => handleOperators("×"));
btnDivide.addEventListener("click", () => handleOperators("÷"));
btnEquals.addEventListener("click", () => evaluateRequest());
btnDecimal.addEventListener("click", () => updateDisplayValue("."));
btnBlowUp.addEventListener("click", () => displayBlowUp());
btnPolarity.addEventListener("click", () => changePolarity());

// ﹣

let operatorList = "+-×÷%"
let displayArr = [];
display.textContent = 0;
let numOfOperators = 0;

let firstVar = "";
let operator = "";
let secondVar = "";
let currentAnswer = "";




function changePolarity() {
    updateDisplayValue("-")
}

function evaluateRequest() {
    displayArr.forEach((item) => {
        if (item == "﹣") item = "-";
    })
    

    console.log("displayArr before evaluation: " + displayArr)
    displayArr.forEach((value) => {
    if (!operatorList.includes(value) && operator == "") {
        firstVar += value;
        console.log("option 1 happened: " + firstVar)
    }
    else if (operatorList.includes(value)) {
        operator = value;
        console.log("option 2 happened: " + operator)
    }
    else if (!operatorList.includes(value) && operator !== "") {
        secondVar += value;
        console.log("option 3 happened: " + secondVar)
    }
    })


    console.log(`post evaluationRequest: first var: ${firstVar}, operation: ${operator}, second var: ${secondVar}`);
    calculate(firstVar, operator, secondVar);
}

function handleOperators(operation) {
    if (numOfOperators >= 1 ) {
        console.log("before function: " + displayArr);
        firstVar = "";
        secondVar = "";
        display.textContent = "";
        operator = "";
        evaluateRequest();
        displayArr = [];
        firstVar = currentAnswer;
        console.log(`first var: ${firstVar}, operation: ${operator}, second var: ${secondVar}`);
        updateDisplayValue(firstVar);
        updateDisplayValue(operation);
        console.log("after function: " + displayArr);
    }
    else if (numOfOperators == 0) {
        updateDisplayValue(operation);
        numOfOperators++;
    }
}

function clearDisplay() {
    displayArr = [];
    display.textContent = 0;
    numOfOperators = 0;
    firstVar = "";
    secondVar = "";
    operator = "";
    displayString = "";
}

function updateDisplayValue(num) {
    let displayString = "";
    displayArr.push(num);
    displayArr.forEach((value) => {displayString += value})
    display.textContent = displayString;
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
        case "-": displayAnswer((subtract(a, b)));
            break;
        case "×": displayAnswer(multiply(a, b));
            break;
        case "÷": displayAnswer(divide(a, b));
            break;

    }
}


function displayAnswer(answer) {
    currentAnswer = answer;
    display.textContent = currentAnswer;
    console.log("current answer is: " + currentAnswer)
}


function displayBlowUp() {
    clearDisplay();
    display.textContent = 'SULAIMAN SYED INCOMING!!!!!!'
}




