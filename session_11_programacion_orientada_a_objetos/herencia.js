//Inheritance - Herencia

class Persona{
    _nombre
    _edad

    constructor(nombre, edad){
        this._nombre = nombre
        this._edad = edad        
    }

    saludo(){        
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años`)
    }
}

class Desarrollador extends Persona{
    
    constructor(nombre, edad, lenguaje){
        super(nombre, edad)
        this.lenguaje = lenguaje
    }

    saludo(){  //Override
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }

}

const nuevodev = new Desarrollador("Julian", 32, "Javascript")
console.log(nuevodev)
nuevodev.saludo()


//Polimorfismo => poli morfismo   -> varias formas