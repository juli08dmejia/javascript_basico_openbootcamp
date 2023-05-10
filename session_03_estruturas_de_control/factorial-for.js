let factorial = 10 ;
let resultado = 1;

for (let conta = 1;  conta <= factorial; conta++) {    
    console.log(conta)
    
    resultado = ( resultado * conta )  ;
    
    console.log(`El factorial del numero ${conta} es ${resultado}`) ;

}
