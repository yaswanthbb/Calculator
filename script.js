const add = (num1,num2)=>{
    return num1 + num2
}
const sub = (num1,num2)=>{
    return num1 - num2
}
const multi = (num1,num2)=>{
    return num1 * num2
}
const div = (num1,num2)=>{
    return num1 / num2
}

let num1 = 10
let operator = '+' 
let num2 = 10 

const operate = (num1,operator,num2) =>{
    if(operator ==='+') add(num1,num2)
    else if(operator === '-') sub(num1,num2)
    else if(operator === '*') multi(num1,num2)
    else if(operator === '/') div(num1,num2)
    else console.log("Type The Correct Operator")
}

const numbers = Array.from(document.querySelectorAll(".number"))
const inputContainer = document.querySelector(".input-container")
let numberInputs =''
const allClear = document.querySelector("#ac")
const del = document.querySelector('#del')

allClear.addEventListener('click',()=>{
    inputContainer.textContent = ''
    numberInputs = ''
})
del.addEventListener('click',()=>{
    let inputarr = Array.from(numberInputs)
    inputarr.pop()
    console.log(inputarr.toString())
    numberInputs = inputarr.toString().replace(',','')
    inputContainer.textContent = numberInputs
})
numbers.map(number => number.addEventListener('click',()=>{
    numberInputs = numberInputs + number.textContent
    inputContainer.textContent = numberInputs
}))
