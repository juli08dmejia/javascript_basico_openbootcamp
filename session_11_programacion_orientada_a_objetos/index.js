
const persona = {
    nombre: "Julian",
    edad: 32,
    isDeveloper: "true",
    
    saludo: function(){
        console.log('hola')
    }
}

//console.log(persona)

persona.saludo()

const otra_persona = {
    nombre: "David",
    edad: 32,
    isDeveloper: false,

    saludo: function(){
        console.log('Hola')
    }
}

otra_persona.saludo()

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,

        saludo: function(){
            console.log('Helo')
        }
    }
}

const nueva_persona = creaPersona("Juan", 30, true)
console.log(nueva_persona)

const nueva_persona2 = creaPersona("Maria", 44, false)