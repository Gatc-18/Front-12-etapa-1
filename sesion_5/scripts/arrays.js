

// let days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'viernes', 'Sabado', 'Domingo' ];

// let numbers = [1, 2,1 ,3, 4, 5,  6];

// let booleans = [ 1, false, true, false];

// la longitud es la cantidad de elementos que tiene un arreglo y es diferente al indice       

let objects = [
    {
        name: "Gustavo"
    },
    {
        name: "Jennifer",
        apellidos: {
            primerApellido: "Duque",
            segundoApellido: "Buitriago"
        }
    },
    {
        name: "Juan Miguel"
    },
];

const [, jennifer] = objects;

// console.log(estudiante); 
// console.log(estudiante2); 

let { segundoApellido } = jennifer.apellidos; 

console.log(segundoApellido); 

// Para desestructurar objectos utilizamos {}
// Para desestructurar arreglos utilizamos []





// objects[1].lastName = "Duque"
// // delete objects[1].name;
// const {name} = objects[1];
// console.log(name)
// console.log(objects[1]);



// String, Number, booleanos, objetos