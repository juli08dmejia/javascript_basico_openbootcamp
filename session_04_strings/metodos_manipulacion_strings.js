// Metodos mas utilizados con cadenas de caracteres

// Cómo obtener la longitud de un string 
let str = "Hola soy un string" ;
console.log(str.length) ; 

//Obtener partes de cadenas de caracteres
//slices() , substring(),  substr()

let slice_str = str.slice(5, 10) ;
console.log(slice_str) ;

let substring_str = str.substring(5 , 10);
console.log(substring_str) ;

let substr_str = str.substr(5, 10) ;
console.log(substr_str) ;

//Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Julian"

//AL utilizar string solo reemplaza la primera instancia
console.log(cadena.replace('Julian', 'David')) ;

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar a los árboles y odia comer plátanos. \
            Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles." ;

console.log(texto_largo.replace('los', 'cinco')) ;

//Al utilizar la expresion regular /g (global), reemplaza las instancias

console.log(texto_largo.replace(/los/g, 'cinco')) ;





