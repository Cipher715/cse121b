/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return Number(number1)+Number(number2);
};

function addNumbers(){
    let addNumber1 = document.querySelector('#add1').value;
    let addNumber2 = document.querySelector('#add2').value;
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
};

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1-number2;
};

function subtractNumbers(){
    let subtractNumber1 = document.querySelector('#subtract1').value;
    let subtractNumber2 = document.querySelector('#subtract2').value;
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
multiply = (number1, number2) => number1*number2;

multiplyNumbers = () => {
    let factor1 = document.querySelector('#factor1').value;
    let factor2 = document.querySelector('#factor2').value;
    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
divide = (number1, number2) => number1/number2;

divideNumbers = () => {
    let dividend = document.querySelector('#dividend').value;
    let divisor = document.querySelector('#divisor').value;
    document.querySelector('#quotient').value = divide(dividend, divisor);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
getTotal = () =>{
    let subtotal = Number(document.querySelector('#subtotal').value);
    if (document.querySelector('#member').checked === true){
        console.log("true");
        subtotal = subtotal * 0.8;
    }
    else {
        console.log("false");
        subtotal = subtotal;
    }
    document.querySelector('#total').innerHTML = `$ ${subtotal.toFixed(2)}`;

};

document.querySelector('#getTotal').addEventListener('click', getTotal);
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbers;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbers.filter(number => number%2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbers.filter(number => number%2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbers.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbers.map(number => number*2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbers.map(number => number*2).reduce((sum, number) => sum + number);
