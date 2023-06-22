let num1 = 0
let opt = '' 
let num2 = 0
let ans = 0

const add = (num1,num2)=>{
    ans = num1 + num2
}
const sub = (num1,num2)=>{
    ans = num1 - num2
}
const multi = (num1,num2)=>{
    ans = num1 * num2
}
const div = (num1,num2)=>{
    ans = num1 / num2
}
const mod = (num1,num2)=>{
    ans = num1 % num2
}

const operate = (num1,num2,opt) =>{
    if(opt ==='+') add(num1,num2)
    else if(opt === '-') sub(num1,num2)
    else if(opt === 'x') multi(num1,num2)
    else if(opt === '÷') div(num1,num2)
    else if(opt === 'mod') mod(num1,num2)
    else console.log("Type The Correct Operator")
}

const numbers = Array.from(document.querySelectorAll(".number"))
const inputContainer = document.querySelector(".input-container")
let numberInputs =''
const allClear = document.querySelector("#ac")
const del = document.querySelector('#del')
const operators = Array.from(document.querySelectorAll(".operator"))
const equalto = document.querySelector(".equalto")
const operationContainer = document.querySelector(".operation-container")
allClear.addEventListener('click',()=>{
    inputContainer.textContent = ''
    numberInputs = ''
    ans = 0
    operationContainer.textContent = ''
})
del.addEventListener('click',()=>{
    let string = numberInputs
    string = string.substring(0,string.length-1)
    numberInputs = string
    console.log(string)
    inputContainer.textContent = string
})
numbers.map(number => number.addEventListener('click',()=>{
    numberInputs = numberInputs + number.textContent
    inputContainer.textContent = numberInputs
}))

operators.map(operator =>{
    operator.addEventListener('click',()=>{
    num1 = Number(numberInputs)
    opt = operator.textContent
    numberInputs+=operator.textContent
    operationContainer.textContent = numberInputs
    inputContainer.textContent = numberInputs
    numberInputs = ''
})
})
equalto.addEventListener('click',()=>{
    num2 = Number(numberInputs)
    operate(num1,num2,opt)
    inputContainer.textContent = ans
    numberInputs = ''
    operationContainer.textContent = ''
})