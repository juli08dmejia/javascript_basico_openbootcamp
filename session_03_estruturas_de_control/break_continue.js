// Casos muy especificos - break, continue


let lista = [1,2,3,4,5,6,7,8] ;

for (let i = 0 ; i < lista.length; i++){

    if (lista[i] === 3){
        continue ;
    }
    let j = 50 ;
    const k = 100 ; // SOlo tiene el alcance en el bloque donde ha sido declarado 
    console.log(lista[i]) ;

    if (lista[i] > 5){
        break;
    }
}


//Cual es el ámbito de un bucle

console.log(k) ;
console.log(i) ;
console.log(k) ;
