//Crea un archivo llamado objetos.js que contenga las siguientes líneas
//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datos = {
    nombre: "Julian",
    apellido: "Mejia",
    edad: 32,
    altura: 167,
    eresDesarrollador: true
}
console.log(datos)
//Una variable que obtenga tu edad a partir del objeto anterior
edad = datos.edad
console.log(edad)

//Una lista que contenga el objeto con tus datos personales y un nuevo objeto
// con los datos personales de tus dos mejores amig@s

const datos_amigo = [ datos , {
    nombre: "Pepito",
    apellido: "Perez",
    edad: 30,
    altura: 170,
    eresDesarrollador: false
},
{
    nombre: "Pepe",
    apellido: "Perez",
    edad: 35,
    altura: 160,
    eresDesarrollador: true
}
]
console.log(datos_amigo)

//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
console.log(datos_amigo.sort((b, a) => a.edad - b.edad))

    ////Lista ordenada de mayor a menor