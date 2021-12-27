const numpad = document.getElementById('numpad')
let displayValue;
function add(additionArray) {
    let total = 0;
    for (i = 0; i < additionArray.length; i++) {
        total += additionArray[i];
    }
    return total;
}

function subtract(subtractionArray) {
    let total = subtractionArray[0];
    for (i = 1; i < subtractionArray.length; i++) {
        total -= subtractionArray[i];
    }
    return total;
}

function multiply(multiplicationArray) {
    let total = 1;
    for (i = 0; i< multiplicationArray.length; i++) {
        total *= multiplicationArray[i];
    }
    return total;
}

function buttonide(buttonisionArray) {
    let total = buttonisionArray[0];
    for (i= 1; i < buttonisionArray.length; i++){
        total /= buttonisionArray[i];
    }
    return total;
}

function operate(operator, x, y) {
    return operator([x,y]);
}

function generateNumpad() {
    const row1 = document.getElementById('row1')
    const row2 = document.getElementById('row2')
    const row3 = document.getElementById('row3')
    const row4 = document.getElementById('row4')
    for (i = 0; i < 9; i++) {
        let poopoo = i;
        switch(true){
            case i < 3:
                const newKey = document.createElement('button');
                newKey.textContent = i+1;
                newKey.classList.add('bigKey')
                newKey.addEventListener("click", displayNumber(i + 1))
                row1.appendChild(newKey);
                if (i == 2) {
                    const plusSign = document.createElement('button');
                    plusSign.textContent = '+';
                    plusSign.classList.add('normalKey')
                    row1.appendChild(plusSign)
                }
                break;
            case i < 6 && i >= 3:
                const newKey2 = document.createElement('button');
                newKey2.textContent = i+1;
                newKey2.classList.add('bigKey')
                newKey2.addEventListener("click", displayNumber(i + 1))
                row2.appendChild(newKey2);
                if (i == 5) {
                    const minusSign = document.createElement('button');
                    minusSign.textContent = '-';
                    minusSign.classList.add('normalKey')
                    row2.appendChild(minusSign)
                }
                break;
            case i < 9 && i >= 6:
                const newKey3 = document.createElement('button');
                newKey3.textContent = i+1;
                newKey3.classList.add('bigKey')
                newKey3.addEventListener("click", (i) => {
                    const display = document.getElementById('display')
                    display.textContent = 'ohyeah' + i
                })
                row3.appendChild(newKey3);
                break;
        }
    }
    const multiplicationSign = document.createElement('button')
    multiplicationSign.textContent = 'X'
    multiplicationSign.classList.add('normalKey')
    row3.appendChild(multiplicationSign)

    const zeroKey = document.createElement('button')
    zeroKey.textContent = '0'
    zeroKey.classList.add('bigKey')
    zeroKey.addEventListener("click", displayNumber(0))
    row4.appendChild(zeroKey)

    const equalsKey = document.createElement('button')
    equalsKey.textContent = '='
    equalsKey.classList.add('bigKey')
    row4.appendChild(equalsKey)

    const clearKey = document.createElement('button')
    clearKey.textContent = 'CLEAR'
    clearKey.classList.add('bigKey')
    row4.appendChild(clearKey)

    const divisionKey = document.createElement('button')
    divisionKey.textContent = '/'
    divisionKey.classList.add('normalKey')
    row4.appendChild(divisionKey)

}

function displayNumber(buttonPressed) {
    const display = document.getElementById('display');
    display.textContent += buttonPressed;  
}

generateNumpad()