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
