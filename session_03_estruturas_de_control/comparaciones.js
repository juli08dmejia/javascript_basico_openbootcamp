// Comparaciones 

//Igualdad

if (5 == 5 ) {
    console.log("5 es igual a 5")
}

if (5 === 5 ) {
    console.log("5 es muy igual a 5")
}

let a = 5 ;
console.log(typeof a)
let b = "5" ;
console.log(typeof b)

// == SOlo compara el valor
// === Compara el tipo

if (a == b){
    console.log("a es igual a b - debil")
}
if (a === b){
    console.log("a es igual a b - fuerte")
}

let c = 4 ;
let d = 5 ;

if (c != d ){
    console.log("c es diferente a d - Débil")
}

if (c !== d ){
    console.log("c es diferente a d - Débil")
}

//Comparaciones mayor que y menor que
let max = 10 ;
let min = 5 ;

if (max > min){
    console.log("Max es mayor que Min")
}


if (max >= 10){
    console.log("Max es mayor que Min")
}

if (min < max ){
    console.log("Min es menor que Max")
}
if (100 <= max ){
    console.log("Min es menor o igual que Max")
}
