

// Arreglos y objetos

let color = prompt('ingresa el color de tu carro');
let container = document.querySelector('div');



// se pueden almacernar string, numeros, booleanos, funciones y arreglos e incluso objetos 
// JSON = Javascript Object Notacion 
// Notacion == Estructura


let carro = {
    color,
    marca: "Mazda",
    modelo: "Mazda 3",
    año: 2018
}

console.log(carro.modelo);
console.log(carro.color);
console.log(carro['año']);


let estudiante = {
    isPerson: false,
    name: "Gustavo",
    age: 20,
    lastName: true 
}

delete estudiante.name

estudiante.school = "Havard";
estudiante.isPerson = true; 

console.log(estudiante.age.toString()); 

console.log(console.log(`Hola mi nombre es ${estudiante.name} y tengo ${estudiante.age} años`));

// desctructuring


const { name, age } = estudiante; 

console.log(console.log(`Hola mi nombre es ${name}, mi apellido ${estudiante.lastName} y tengo ${age} años, `));














