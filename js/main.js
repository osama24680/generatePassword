let serial = document.getElementById("serial")
let capitalLetters = document.getElementById("capitalLetters")
let smallLetters = document.getElementById("smallLetters")
let numbers = document.getElementById("numbers")
let settings = document.getElementById("settings")
let inputValue = document.getElementById("inputValue")
let buttonInput = document.getElementById("buttonInput")
let Light = document.getElementById("Light")
let Dark = document.getElementById("Dark")

let enterdValue=""
buttonInput.addEventListener("click", function (e) {
    enterdValue=inputValue.value
    console.log(enterdValue)
})

function generateP() {
    
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let lengthOfPassword = enterdValue 
    for (let i = 0; i < lengthOfPassword ; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char)
    }

    console.log(pass)
    let onlyUpper = pass.replace(/[^A-Z]/g, '');
    let onlySmall = pass.replace(/[^a-z]/g, '');
    let upperNumber = onlyUpper.length
    let smallNumber = onlySmall.length

    if (upperNumber === Math.floor(lengthOfPassword * (40 / 100)) && smallNumber === Math.floor(lengthOfPassword * (30 / 100))) {
        serial.innerHTML = pass
        capitalLetters.innerHTML = "Capital Letters : " + upperNumber
        smallLetters.innerHTML = "smalle Letters : " + smallNumber
        numbers.innerHTML = "Numbers : " + (lengthOfPassword - upperNumber - smallNumber)
    } else {
        generateP()
    }

}

let generate = document.getElementById("generate")
generate.addEventListener("click", generateP)



Light.addEventListener("click",function(){
    getComputedStyle(document.documentElement).getPropertyValue('--backgroundColor');
    document.documentElement.style.setProperty('--backgroundColor', '#fff')

    getComputedStyle(document.documentElement).getPropertyValue('--whiteColor');
    document.documentElement.style.setProperty('--whiteColor', '#000')

    getComputedStyle(document.documentElement).getPropertyValue('--greenColor');
    document.documentElement.style.setProperty('--greenColor', '#ca4456')


})
Dark.addEventListener("click",function(){
    getComputedStyle(document.documentElement).getPropertyValue('--backgroundColor');
    document.documentElement.style.setProperty('--backgroundColor', '#1D1D1D')

    getComputedStyle(document.documentElement).getPropertyValue('--whiteColor');
    document.documentElement.style.setProperty('--whiteColor', '#fff')

    getComputedStyle(document.documentElement).getPropertyValue('--greenColor');
    document.documentElement.style.setProperty('--greenColor', '#6FCA44')


})