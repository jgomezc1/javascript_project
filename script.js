//
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit' , sumar_valores);

function sumar_valores(event){
    
    event.preventDefault();

     if (!isNaN(input1.value)) {
         value1 = parseFloat(input1.value);
         suma = value1;
       } else {
         console.log('Input value 1 is not a number');
       }
     if (!isNaN(input2.value)) {
         value2 = parseFloat(input2.value);
         suma = suma + value2;
       } else {
         console.log('Input value 2 is not a number');
       }
     pResult.innerText = "Resultado:" + suma;

 }
 