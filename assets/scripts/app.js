const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// set of operators not enum but alike enum
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
  console.log(this);
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

  } else if(operators.DIVIDE === myOperator){
    currentResult /= enteredNumber; 
    mathOperator = myOperator; 
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(mathOperator, initialResult, enteredNumber, currentResult);
}

// function add() {
//   calculateResult(operators.ADD); 
// }

// function subtract() {
//   calculateResult(operators.SUBTRACT);
// }

// function multiply() {
//   calculateResult(operators.MULTIPLY);
// }

// function divide() {
//   calculateResult(operators.DIVIDE);
// }

addBtn.addEventListener('click', calculateResult.bind(this,operators.ADD));
subtractBtn.addEventListener('click', calculateResult.bind(this, operators.SUBTRACT));
multiplyBtn.addEventListener('click', calculateResult.bind(this, operators.MULTIPLY));
divideBtn.addEventListener('click', calculateResult.bind(this, operators.DIVIDE));
