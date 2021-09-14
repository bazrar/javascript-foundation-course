const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
const operators = Object.freeze({
  ADD: '+', 
  SUBTRACT: '-', 
  MULTIPLY: '*', 
  DIVIDE: '/'
}); 


// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(myOperator) {
  const enteredNumber = getUserNumberInput(); 
  const initialResult = currentResult;
  let mathOperator; 

  if(operators.ADD === myOperator) {
    currentResult += enteredNumber; 
    mathOperator = myOperator; 
    

  } else if(operators.SUBTRACT === myOperator) {
    currentResult -= enteredNumber; 
    mathOperator = myOperator; 

  } else if(operators.MULTIPLY === myOperator) {
    currentResult *= enteredNumber; 
    mathOperator = myOperator; 

  } else {
    currentResult /= enteredNumber; 
    mathOperator = myOperator; 
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(mathOperator, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult(operators.ADD); 
}

function subtract() {
  calculateResult(operators.SUBTRACT);
}

function multiply() {
  calculateResult(operators.MULTIPLY);
}

function divide() {
  calculateResult(operators.DIVIDE);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
