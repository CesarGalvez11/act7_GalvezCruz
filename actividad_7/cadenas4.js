const theorem = 'Pythagorean theorem';

const a = 5;
const b = 8;

// Calcula la longitud de la hipotenusa
const c = Math.sqrt(a ** 2 + b ** 2);

// Cambia la cadena a una plantilla literal y reemplaza los marcadores de posición
const myString = `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${c.toFixed(2)}.`;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);