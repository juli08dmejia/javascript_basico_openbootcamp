//Crea un archivo JS que contenga las siguientes líneas

//Una función sin parámetros que devuelva siempre "true"
function devuelve_true(){    
    return "Hola";
}
console.log(devuelve_true)

//Una función asíncrona que utilice un setTimeout y pase por consola un 
//"Hola soy una promesa" 5 segundos después de haberse ejecutado

//setTimeout(function(){
//    console.log("Hola soy una promesa");
//}, 5000);

//Una función generadora de índices pares automáticos

function* indices_pares(){    
    let num = 0;
    while(num < 10){         
        num++  
        if (num % 2 === 0 ){            
            console.log(`Par: ${num}`) 
        }else{
            console.log(`Impar: ${num}`)
        }            
        yield num
    }
}

const generadora = indices_pares() ;

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
console.log(generadora.next().value)
console.log(generadora.next().value)

