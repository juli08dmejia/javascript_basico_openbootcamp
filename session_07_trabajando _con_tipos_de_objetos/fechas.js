//Crea un archivo llamado fechas.js que contenga las siguientes líneas
//La fecha de hoy
const fecha = new Date()
console.log(fecha)

//La fecha de tu nacimiento
const fecha_nacimiento = new Date("July 31, 1990 08:00")
console.log(fecha_nacimiento)

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

console.log(fecha.getTime() > fecha_nacimiento.getTime() )

//Una variable que contenga el día de tu nacimiento
var dia = fecha_nacimiento.getDay() 
console.log(dia)

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

var mes = fecha_nacimiento.getMonth() 
console.log(mes)

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)

var anyo = fecha_nacimiento.getFullYear() 
console.log(anyo)