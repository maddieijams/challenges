// Here, you will be using HTML, CSS, and JS, where you will build a calculator that can take in two values and, based on the button click, you would be able to display the results below.

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', add);

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', subtract);

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', multiply);

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', divide);

const modulusBtn = document.querySelector('.modulus');
modulusBtn.addEventListener('click', modulus);

const section = document.querySelector('section');
let p = document.createElement('p');



function add(e) {
    e.preventDefault()
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let result = num1 + num2;
    return result;
    
    p.innerHTML() = result;
    section.appendChild(p);
}



function subtract() {
    e.preventDefault()
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let result = num1 - num2;
    return result;

}

function multiply() {
    e.preventDefault()
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let result = num1 * num2;
    return result;

}

function divide() {
    e.preventDefault()
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let result = num1 / num2;
    return result;

}

function modulus() {
    e.preventDefault()
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let result = num1 % num2;
    return result;

}