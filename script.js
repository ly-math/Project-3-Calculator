
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const del = document.querySelector('.del');
const equal = document.querySelector('.equal');

const operator = document.querySelector('.operator');

let inputValue1 = input1.value;
let inputValue2 = input2.value;

let x = 0;
let y = 0;

function btnOnclick(text) {
    operator.textContent = '';
    if (x === 0 && input1.value.length < 8){
            input1.value += text;
    }
    if (x === 1 && input2.value.length < 8){
            input2.value += text;
    }
}

function plusBtn() {
    x = 1;
    y = 1;
    input1.style.maxHeight = '0px';
    operator.textContent = '+';
}

function minusBtn() {
    x = 1;
    y = 2;
    input1.style.maxHeight = '0px';
    operator.textContent = '-';
}

function multiplyBtn() {
    x = 1;
    y = 3;
    input1.style.maxHeight = '0px';
    operator.textContent = 'x';
}

function devideBtn() {
    x = 1;
    y = 4;
    input1.style.maxHeight = '0px';
    operator.textContent = '/';
}

function equalBtn(){
    x = 0;
    operator.textContent = '';
    input1.style.maxHeight = '1000px';

    if (y === 1){
        let result = Number(input1.value) + Number(input2.value);
    
        input1.value = '';
        input2.value = '';
    
        input1.value = result;
    }
    else if (y === 2){
        let result = Number(input1.value) - Number(input2.value);
    
        input1.value = '';
        input2.value = '';
    
        input1.value = result;
    }
    else if (y === 3){
        let result = Number(input1.value) * Number(input2.value);
    
        input1.value = '';
        input2.value = '';
    
        input1.value = result;
    }
    else if (y === 4){
        let result = Number(input1.value) / Number(input2.value);
    
        input1.value = '';
        input2.value = '';
    
        input1.value = result;
    }
}

function clearBtn() {
    y = 0;
    x = 0;
    input1.style.maxHeight = '1000px';
    operator.textContent = '';
    input1.value = '';
    input2.value = '';
}