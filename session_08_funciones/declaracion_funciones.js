//Que son las funciones, como se declaran y como se utilizan 

const nom = "Julian"

//saludar("Julian")

saludar(nom)

function saludar(nombre){
    console.log(`Hola ${nombre}`)
}
///
let nombre_2 = "David"
console.log(nombre_2)

despedir(nombre_2)

function despedir(nombre){
    nombre = "Serafin"
    console.log(`Adios ${nombre}`)
}

///

let persona = {nombre: "David", apellido: "Mejia"}

saludarPersona(persona)
console.log(persona)

function saludarPersona(objecto){
    objecto.apellido = "Idarraga"
    console.log(`Hola ${objecto.nombre} ${objecto.apellido}`)
}

////
function imprimeNumero(numero = 7){ ////Parámetros por defecto
    console.log(numero)
}

imprimeNumero(9)
imprimeNumero()

///


function imprimir(...parametros){
    console.log(parametros)
}

imprimir(1,3,9,2,"hola", {id: 9})
////

function suma(...nums){
    return   nums.reduce((a, b) => a + b)
}

const s = suma(1,2,3,4,9,15, 16)

console.log(s)


////
let variable = "hola"

function multiplicar(a = 0 , b = 0){
    console.log(variable)
    return a * b
}

console.log(multiplicar(4, 9))

