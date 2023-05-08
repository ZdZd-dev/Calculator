let display = document.getElementById("display")
const number0 = document.querySelector(".num0")
const number1 = document.querySelector(".num1")
const number2 = document.querySelector(".num2")
const number3 = document.querySelector(".num3")
const number4 = document.querySelector(".num4")
const number5 = document.querySelector(".num5")
const number6 = document.querySelector(".num6")
const number7 = document.querySelector(".num7")
const number8 = document.querySelector(".num8")
const number9 = document.querySelector(".num9")
const addition = document.querySelector(".add")
const minus = document.querySelector(".minus")
const times = document.querySelector(".times")
const divided = document.querySelector(".divide")


//Adding numbers to display

function addNumber0() {
    display.innerText += number0.innerText
}

function addNumber1() {
    display.innerText += number1.innerText
}

function addNumber2() {
    display.innerText += number2.innerText
}

function addNumber3() {
    display.innerText += number3.innerText
}

function addNumber4() {
    display.innerText += number4.innerText
}

function addNumber5() {
    display.innerText += number5.innerText
}

function addNumber6() {
    display.innerText += number6.innerText
}

function addNumber7() {
    display.innerText += number7.innerText
}

function addNumber8() {
    display.innerText += number8.innerText
}

function addNumber9() {
    display.innerText += number9.innerText
}

//Clear Button

function clearAll() {
    display.innerText = ""
}

//Actions

function Addition() {
    let firstNum = display.innerText
    display.innerText += "+"
}

function Subtraction() {
    let firstNum = display.innerText
    display.innerText += "-"
}

function Multiplication() {
    let firstNum = display.innerText
    display.innerText += "*"
}

function Division() {
    let firstNum = display.innerText
    display.innerText += "/"
}

function equals() {
    display.innerText = eval(display.textContent)
}

function deleteN() {
    display.textContent = display.textContent.slice(0, -1)
}






