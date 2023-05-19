//Ordenar listas

// .sort() -> Modifica el array 

const array = [2,5,9,15,1,2,0,4]
console.log(array)

array.sort((a, b) => {
    if (a < b ){
        return -1 
    }else if (a > b){
        return +1
    }else {
        return 0
    }
})

console.log(array)

//Ordenar únicamente arrays numéricos

const arrayNumerico = [0,1,7,3,1,3,56,1,546]

array.sort[(a,b) => b - a ]

console.log(arrayNumerico)

//Interesante en array de Objetos

const listaObjetos = [
    { nombre: "Julian", edad: 32 },
    { nombre: "David", edad: 33 },
    { nombre: "Pepito", edad: 30 },
    { nombre: "Serafin", edad: 12 }, 
    { nombre: "Mara", edad: 12 }, 
]

//listaObjetos.sort[(a, b) => {
//    if (a.edad < b.edad ){
//        return -1
//    }else if (a.edad > b.edad){
//        return +1
//    } else {
//        return 0
//    }
//}] 

listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos)




