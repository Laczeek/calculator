
const result = document.querySelector('.calc__result-text');

function alert() {
    if (firstNumber.value == "" || secondNumber.value == ''){
        result.innerHTML = `Uzupełnij pola`;
    }
}

function getNumbers() {
    const firstNumber = document.querySelector('#firstNumber').value;
    const secondNumber = document.querySelector('#secondNumber').value;
}

function addNumbers() {
    result.innerHTML = `${parseFloat(firstNumber.value) + parseFloat(secondNumber.value)}`;
    alert();
}

function deductNumbers() {
    result.innerHTML = `${parseFloat(firstNumber.value) - parseFloat(secondNumber.value)}`;
    alert();
}

function divideNumbers() {
    result.innerHTML = `${parseFloat(firstNumber.value) / parseFloat(secondNumber.value)}`;
    alert();
}

function multiplyNumbers() {
    result.innerHTML = `${parseFloat(firstNumber.value) * parseFloat(secondNumber.value)}`;
    alert();
}

function clearCalc() {
firstNumber.value = '';
secondNumber.value = '';
result.innerHTML = ``;
}
