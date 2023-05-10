let factorial = 10 ;
let resultado = 1;
let conta = 1

while ( conta >= factorial){

    console.log(conta)
    if ( conta == factorial){
        console.log('Igual') ;
        break ;
    }
    
    resultado = ( resultado * conta )  ;

    console.log(`El factorial del número: ${conta} es ${resultado}`) ;
    conta++ ;
}
