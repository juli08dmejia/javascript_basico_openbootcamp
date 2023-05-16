// Listas, arrays o arreglo

const lista1 = [1, "hola", true, undefined, null] ;
const lista2 = new Array(1, "hola", true, undefined, null) ;
const lista3 = [3] ;

lista3[0] = "Soy el primer elemento index 0"

const lista4 = [lista1, lista2, lista3] ;

console.log(lista1) ;
console.log(lista2) ;
console.log(lista3) ;
console.log(lista4) ;


// Objetos
const movil = {
    altura: 10,
    anchura: 5 ,
    marca: "Xiami",
    isWhite: true,
    contactos: ["Pepito", "Julian", "David"],
    targeta: {
        marca: "SanDisk",
        almacenamiento: 32,
    },
    "altura-tarjeta":4
}
movil.anio = 2019;
movil.marca = "Samsung"

console.log(movil.targeta)
console.log(movil.targeta.movil)

// Fechas
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10) ///Utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020") ;
console.log(fecha_cadena);

const fecha_valores = new Date(2022,2, 15)
console.log(fecha_cadena)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anio = ahora.getFullYear()

console.log(dia, mes, anio)




//Librerias de apoyo Moment.js