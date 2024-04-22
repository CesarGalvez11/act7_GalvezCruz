let result = 7 + 13 + 2 + 5;
let result2 = 7 - 6 - 2 + 3;

// Realiza el cálculo para multiplicar result y result2 y asigna el resultado a result
result = result * result2;

// Formatea el resultado con 2 decimales y almacénalo en finalResult
let finalResult = result.toFixed(2);

// Verifica el tipo de dato de finalResult y conviértelo a un tipo number
let finalNumber = parseFloat(finalResult);

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${ finalResult }`;
const para2 = document.createElement('p');
const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);