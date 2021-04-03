// De-estructuracion de arreglos

nombres = ["Rodrigo", "Erick", "Aylin", "Diego", "Roberto"];

//let nombre = nombres[1]

let [nombreRodrigo, nombreErik] = nombres;

// De-estructuracion de objetos

let persona = {
  nombre: "Liz",
  edad: 12,
  genero: "M",
};

// let { nombre } = persona;
// let { genero } = persona;

let { nombre, genero } = persona;

console.log(nombre);
console.log(genero);

// Operador Spread

let masNombres = ["Sandra", "Lucia", "Andrea", ...nombres];

console.log(masNombres);
