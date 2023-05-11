const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operator')
const deleteButtons = document.querySelectorAll('.delete')
const equalButtons = document.querySelectorAll('.equal')
const clearButtons = document.querySelectorAll('.clear')
const previousOperandTextElement = document.querySelectorAll('#previousOperationScreen')
const currentOperandTextElement = document.querySelectorAll('#currentOperationScreen')





function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function negation(a){
    return -a;
}
function percentage(a){
    return a/100;
}

const firstNumber = 0;
const lastNumber = 0;
const operator = "+";

const operatorObject = {
    '+': add,'-':subtract,'*':multiply,'/':divide,'+/-':negation,'%':percentage
}
function operate(firstNumber,operator,lastNumber){
    return operatorObject[operator](firstNumber,lastNumber);
}

console.log(operate(2,'*',5))

