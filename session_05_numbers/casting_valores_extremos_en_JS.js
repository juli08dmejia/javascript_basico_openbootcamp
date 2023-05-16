//Operador .valueOf - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(2);
console.log(b); 
console.log(a + b )

console.log(a.valueOf() + b.valueOf())

console.log(b.valueOf()) ;

let str = new String("Hola soy un string")
console.log(str) ;
console.log(str.valueOf()) ;



//NaN (Not a Number) - Infinity

let n = Number('adios') ;
console.log(n) ;
console.log(isNaN(n)) ;

let numerador = 19 ;
let divisor = 0 ;

console.log( numerador / divisor) ;

let divisor_2 = null
console.log(numerador / divisor_2) ;

//Cómo convertir los string a valores numéricos con Number, parseInt y parceFloat
let numero = '5.89'
let num2 = 17.2

console.log(typeof numero) ;
console.log(numero + num2) ;//Error de Concepto 

console.log(Number(numero) + num2) ;

console.log(parseInt(numero)) ;

console.log(parseFloat(numero)) ;

let num3 = 4 ;
console.log(parseInt(num3));
console.log(parseFloat(num3));

//Número hexadecimales (base 16)
let numHex = '0x3a5b7';

console.log(parseInt(numHex, 16)) ;


//Obtener los valores máximo y mínimo en JavaScript
let min_presicion = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_presicion) ;      
console.log(min_valor_JS);    
console.log(max_valor_JS)
console.log(2 ** 1023) ;



