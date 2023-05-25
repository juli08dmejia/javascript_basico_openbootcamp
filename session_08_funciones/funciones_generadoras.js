//Funciones generadoras


function* generaId(){
    let id = 0;
    while(true){
        id++        
        if (id === 10 ){
            return
        }
        yield id
    }
}

const generadora = generaId() ;

console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)


