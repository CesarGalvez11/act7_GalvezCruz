
// Add your code here
var myName = "Cesar";

// Declara una variable llamada myAge y la inicia con un valor en la misma línea
var myAge = 22;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myName;
const para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);