
const btnContainer = document.querySelector('.btn-container');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const equal = document.querySelector('.equal');

let x = 0;
let y = 0;

function btnOnclick(text) {
    input2.style.maxHeight = '1000px';
    if (input1.value === 'error' || input1.value === 'Infinity' || input1.value === 'NaN' || input1.value === 'undefined'){
        input1.value = '';
    }
    input1.value += text;
    input2.value += text;
    let inputValue2 = input2.value;

    inputValue2 = inputValue2.replace(/\*/g, '×').replace(/\//g, '÷')
    input2.value = inputValue2;
    
    calculateExp(text);
}
function calculateExp(expression){
    try {
        const calculate = new Function('return ' + expression );

        const result = calculate();
        return result;
    }
    catch {
        return 'error';
    }
}

function equalBtn(){
    input2.value = '';
    input2.style.maxHeight = '0px';
    input1.value = calculateExp(input1.value);
}

function clearBtn() {
    input2.style.maxHeight = '1000px';
    input1.value = '';
    input2.value = '';
}

