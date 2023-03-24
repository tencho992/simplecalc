//pull values

//make them variables

//make smurfs for buttons

//make math function buttons

//.innerText that h2 baybee

document.querySelector('#plus').addEventListener('click', add)
document.querySelector('#sub').addEventListener('click', sub)
document.querySelector('#multi').addEventListener('click', multi)
document.querySelector('#divide').addEventListener('click', divide)
// let inputOne=Number(document.querySelector('firstNumber').value)
// let inputTwo=Number(document.querySelector('secondNumber').value)

function add(){
    let inputOne=Number(document.querySelector('#firstNumber').value)
    let inputTwo=Number(document.querySelector('#secondNumber').value)
    let sum= inputOne + inputTwo
    document.querySelector('#placeToSee').innerText= sum
}
function sub(){
    let inputOne=Number(document.querySelector('#firstNumber').value)
    let inputTwo=Number(document.querySelector('#secondNumber').value)
    let sum= inputOne - inputTwo
    document.querySelector('#placeToSee').innerText= sum
}
function multi(){
    let inputOne=Number(document.querySelector('#firstNumber').value)
    let inputTwo=Number(document.querySelector('#secondNumber').value)
    let sum= inputOne * inputTwo
    document.querySelector('#placeToSee').innerText= sum
}
function divide(){
    let inputOne=Number(document.querySelector('#firstNumber').value)
    let inputTwo=Number(document.querySelector('#secondNumber').value)
    let sum= inputOne / inputTwo
    document.querySelector('#placeToSee').innerText= sum
}