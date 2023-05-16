//Una cadena de texto con tu Nombre
let nombre = "Julian"
//Otra cadena de texto con tu Apellido
let apellido = "Mejia"

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre.concat(" ",apellido)

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMayus = estudiante.toUpperCase()

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let cant_lestudiante = estudiante.length

//Una variable que contenga la primera letra del Nombre
let pletra_nombre = nombre.charAt(0)

//Otra variable que contenga la última letra del Apellido
let uletra_apellido = apellido.slice(-1)

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let trim_estudiante = estudiante.replace(" ", "")

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

console.log(estudiante.includes("Julian"))

console.log(estudiante)
console.log(estudianteMayus)
console.log(cant_lestudiante)

console.log(pletra_nombre)
console.log(uletra_apellido)

console.log(trim_estudiante)


 

