let factorial = 10 ;
let resultado = 1;
let conta = 1

console.log('Igual') ;

while ( conta <= factorial){

    if ( conta === 11){
        console.log(`Igual a ${conta}`) ;        
        break ;
    }

    console.log(conta) ;   
    
    resultado = (resultado * conta)  ;

    console.log(`El factorial del número: ${conta} es ${resultado}`) ;
    conta++ ;

   
}