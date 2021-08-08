/*alert ('witam na mojej stronie!');*/

const name = "Dagmara";
const age = 29;

console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);

const heading = document.querySelector('.second-header');
console.log(heading);

heading.innerHTML = `Nazywam się ${name} i mam ${age} lat`;