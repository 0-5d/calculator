const numpad = document.getElementById('numpad')
let displayValue = '';
let secondOperand;
let operatorPressed;
let currentOperator;
let operandArray;
let answer;
let equalsPressed;
let numberPressed;


function generateNumpad() {
    const row1 = document.getElementById('row1')
    const row2 = document.getElementById('row2')
    const row3 = document.getElementById('row3')
    const row4 = document.getElementById('row4')
    for (i = 0; i < 9; i++) {
        let iPlaceHolder = i;
        switch(true){
            case i < 3:
                const newKey = document.createElement('button');
                newKey.textContent = i+1;
                newKey.classList.add('bigKey')
                newKey.addEventListener("click", (i) => {
                    if (!equalsPressed) {
                        const display = document.getElementById('display')
                        display.textContent += iPlaceHolder + 1
                        displayValue += iPlaceHolder + 1
                        numberPressed = true;
                    }
                })
                row1.appendChild(newKey);
                if (i == 2) {
                    const plusSign = document.createElement('button');
                    plusSign.textContent = '+';
                    plusSign.classList.add('normalKey')
                    plusSign.addEventListener("click", () => {
                        if (numberPressed) {
                            displayValue += '+';
                            display.textContent = displayValue; 
                            currentOperator = '+'
                            operatorPressed = true;
                            equalsPressed = false;
                        }

                    })
                    row1.appendChild(plusSign)
                }
                break;
            case i < 6 && i >= 3:
                const newKey2 = document.createElement('button');
                newKey2.textContent = i+1;
                newKey2.classList.add('bigKey')
                newKey2.addEventListener("click", (i) => {
                    if (!equalsPressed) {
                        const display = document.getElementById('display')
                        display.textContent += iPlaceHolder + 1
                        displayValue += iPlaceHolder + 1
                        numberPressed = true;
                    }
                })
                row2.appendChild(newKey2);
                if (i == 5) {
                    const minusSign = document.createElement('button');
                    minusSign.textContent = '-';
                    minusSign.classList.add('normalKey')
                    minusSign.addEventListener("click", () => {
                        if (!operatorPressed && numberPressed) {
                            displayValue += '-';
                            display.textContent = displayValue; 
                            currentOperator = '-'
                            equalsPressed = false
                            operatorPressed = true;
                        } else if (operatorPressed) {
                            operandArray = displayValue.split("-")
                            answer = +operandArray[0] - +operandArray[1].toString()
                            display.textContent = answer + '-';
                            displayValue = answer + '-';

                            operatorPressed = false
                            currentOperator = ''
                        }
                        

                    })
                    row2.appendChild(minusSign)
                }
                break;
            case i < 9 && i >= 6:
                const newKey3 = document.createElement('button');
                newKey3.textContent = i+1;
                newKey3.classList.add('bigKey')
                newKey3.addEventListener("click", (i) => {
                    if (!equalsPressed) {
                        const display = document.getElementById('display')
                        display.textContent += iPlaceHolder + 1
                        displayValue += iPlaceHolder + 1
                        numberPressed = true;
                    }
                })
                row3.appendChild(newKey3);
                break;
        }
    }
    const multiplicationSign = document.createElement('button')
    multiplicationSign.textContent = 'X'
    multiplicationSign.classList.add('normalKey')
    multiplicationSign.addEventListener("click", () => {
        if (!operatorPressed && numberPressed) {
            displayValue += '*';
            display.textContent = displayValue; 
            currentOperator = '*'
            equalsPressed = false;
        }
        operatorPressed = true;
    })
    row3.appendChild(multiplicationSign)

    const zeroKey = document.createElement('button');
    zeroKey.textContent = '0'
    zeroKey.classList.add('bigKey')
    zeroKey.addEventListener("click", () => {
        const display = document.getElementById('display')
        display.textContent += 0
        displayValue += 0;
    })
    row4.appendChild(zeroKey)

    const equalsKey = document.createElement('button')
    equalsKey.textContent = '='
    equalsKey.classList.add('bigKey')
    equalsKey.addEventListener('click', () => {
        switch(true) {
            case currentOperator == "+":
                operandArray = displayValue.split("+")
                answer = +operandArray[0] + +operandArray[1].toString()
                display.textContent = answer;
                displayValue = answer;
                equalsPressed = true;
                operatorPressed = false
                currentOperator = ''
                break;
            case currentOperator == "*":
                operandArray = displayValue.split("*")
                answer = +operandArray[0] * +operandArray[1].toString()
                display.textContent = answer;
                displayValue = answer;
                equalsPressed = true;
                operatorPressed = false
                currentOperator = ''
                break;
            case currentOperator == "-":
                operandArray = displayValue.split("-")
                answer = +operandArray[0] - +operandArray[1].toString()
                display.textContent = answer;
                displayValue = answer;
                equalsPressed = true;
                operatorPressed = false
                currentOperator = ''
                break;
            case currentOperator == "/":
                operandArray = displayValue.split("/")
                if (operandArray[1] == 0) {
                    display.textContent = "no"
                    break;
                }
                answer = +operandArray[0] / +operandArray[1].toString()
                display.textContent = answer;
                displayValue = answer;
                equalsPressed = true;
                operatorPressed = false
                currentOperator = ''
                break;
        }
    })
    row4.appendChild(equalsKey)

    const clearKey = document.createElement('button')
    clearKey.textContent = 'CLEAR'
    clearKey.classList.add('bigKey')
    clearKey.addEventListener('click', () => {
        const display = document.getElementById('display')
        display.textContent = ''
        displayValue = ''
        answer = ''
        currentOperator = ''
        operandArray = []
        operatorPressed = false;
        equalsPressed = false;
        numberPressed = false;
    })
    row4.appendChild(clearKey)

    const divisionSign = document.createElement('button')
    divisionSign.textContent = '/'
    divisionSign.classList.add('normalKey')
    divisionSign.addEventListener("click", () => {
        if (!operatorPressed && numberPressed) {
            displayValue += '/';
            display.textContent = displayValue; 
            currentOperator = '/'
            equalsPressed = false;
        }
        operatorPressed = true;
    })
    row4.appendChild(divisionSign)

}

generateNumpad()