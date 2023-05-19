//Iterar los valores de una lista 

const array = ["hola", 2, 5, 90, false, undefined]

//Forma antigua y poco eficiente
for (let i = 0; i < array.length; i++){
    console.log(array[i])
}

array.forEach(valor => {
    console.log(valor)
})

//Forma ES6 (más eficiente) .forEach
let suma = 0 ;
const arraNums = [3,6,2,77,2,3,93,19]
arraNums.forEach( valor => {
    suma += valor ;
    console.log(valor) ;
})
console.log(suma)

//Busqueda de un valor dentro de una lista .find()
//Quiero encontrar el elemento 90

const variable = array.find(valor => {
    if ( valor === 90){
        return true ;
    }
})
console.log(variable)

const listaObjetos = [
    { nombre: "Julian", edad: 32 },
    { nombre: "David", edad: 33 },
    { nombre: "Pepito", edad: 30 },
    { nombre: "Serafin", edad: 12 }, 
    { nombre: "Mara", edad: 12 }, 
]
const objeto = listaObjetos.find(o => (o.nombre === "Julian"))
console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === "David")
console.log(edad)





