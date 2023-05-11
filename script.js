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

const firstNumber = 0;
const lastNumber = 0;
const operator = "+";

const operatorObject = {
    '+': add,'-':subtract,'*':multiply,'/':divide
}
function operate(firstNumber,operator,lastNumber){

    return operatorObject[operator](firstNumber,lastNumber);

}

console.log(operate(2,'*',5))

