/*
1. Diseñe un programa que lea la cantidad de estudiantes de la carrera de 
ingeniería de sistemas, diseño gráfico y médicina, para así poder sacar el 
porcentaje de alumnos  de cada una de las carreras.
*/

// let estudiantesSistemas = Number(prompt("Ingresa la cantidad de estudiantes de ingenieria de sistemas")); 

// let estudiantesDiseño = Number(prompt("Ingresa la cantidad de estudiantes de diseño gráfico")); 

// let estudiantesMedicina = Number(prompt("Ingresa la cantidad de estudiantes de medicina")); 

// let totalEstudiantes = estudiantesSistemas + estudiantesDiseño + estudiantesMedicina;

// let porcentajeSistemas = estudiantesSistemas * 100 / totalEstudiantes;
// let porcentajeDiseño = estudiantesDiseño * 100 / totalEstudiantes;
// let porcentajeMedicina = estudiantesMedicina * 100 / totalEstudiantes;

// document.write(`Hay un total de ${ totalEstudiantes } estudiantes y el porcentaje de cada una de las carreras es el siguiente. En ingenieria de sistemas hay un total de ${ estudiantesSistemas } estudiantes, lo que equivale a ${ porcentajeSistemas.toFixed(1) }% del total, en diseño gráfico hay un total de ${ estudiantesDiseño } estudiantes, lo equivale al ${ porcentajeDiseño.toFixed(1)}% del total y en medicica hay ${ estudiantesMedicina} estudiantes, lo que equivale al ${ porcentajeMedicina.toFixed(1)}% del total `);


/*
2. Un importante empresario desea realizar una gran donacion a una
universidad de la ciudad con el fin de financiarle el estudio a varios 
jóvenes. Hay 4 facultades y la donación será dividida de la siguiente 
forma:

•	Telecomunicaciones: 20% de sistemas
•	Sistemas: 15 % Administración.
•	Administración: 30% de la donación.
•	Contabilidad: lo que resta de la donación.*/

let totalDonacion = Number(prompt("Ingresa el total de la donacion"));

let fondoAdministracion = totalDonacion*0.30;

let fondoSistemas = fondoAdministracion* 0.15;

let fondoTelecomunicaciones = fondoSistemas*0.20;

let fondoAsignado = fondoAdministracion + fondoSistemas + fondoTelecomunicaciones;

alert(fondoAsignado);

let fondoContabilidad = totalDonacion - fondoAsignado;

document.write(`Del total de la donacion a la facultad de administracion le corresponde un total de ${fondoAdministracion} pesos, a la falcutad de ingenieria le correspond eun total de ${fondoSistemas} pesos, a la facultad de telecomunicaciones le corresponde un total de ${fondoTelecomunicaciones} pesos y a la facultad de contabilidad le corresponde un total de ${fondoContabilidad} pesos `);




