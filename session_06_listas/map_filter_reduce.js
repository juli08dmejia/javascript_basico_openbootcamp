console.log("Hola")
//Trabajar con métodos más avanzados 

//.map() .filter() .reduce()

const array = ["Manizales", "Medellin", "Pereira", "Armenia", "Cali"]

const val = array.forEach(v => {
    console.log(v)
    return 4
})
console.log(val);

const newArray = array.map((valor, indice) => {return `${indice + 1 } - ${valor} `}) 

console.log(newArray)

const listaObjetos = [
    { nombre: "Julian", edad: 32 },
    { nombre: "David", edad: 33 },
    { nombre: "Pepito", edad: 30 },
    { nombre: "Serafin", edad: 12 }, 
    { nombre: "Mara", edad: 12 }, 
]

//const personasMayores = listaObjetos.filter(obj => {
//    if (obj.edad > 30){
//        return true 
//    }else{
//        return false
//    }    
//})

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "David")
console.log(nuevaLista)

//Reduce
//Sirve para obtener un valor o un objeto de una lista 

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i,arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur 
})
console.log(suma)

