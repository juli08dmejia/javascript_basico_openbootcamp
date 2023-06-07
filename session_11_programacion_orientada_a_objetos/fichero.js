//Crea un nuevo fichero JS que contenga las siguientes líneas

//Una clase llamada "Estudiante" que tenga:
//Una variable llamada nombre
//Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
//Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
//Crea una nueva instancia de "Estudiante"
//Haz la llamada al método obtenDatos

class Estudiante{
    _nombre 
    _asignaturas = []

    constructor(nombre, asignaturas){
        this._nombre = nombre
        this._asignaturas = asignaturas                
    }

    obtenDatos(){
        console.log(`Hola soy el estudiante ${this._nombre}, las asignaturas ${this._asignaturas} `)
        //return (`Hola soy el estudiante ${this._nombre}, las asignaturas ${this._asignaturas} `)
    }
}

const nuevo_estudiante = new Estudiante("Julian", ["Javascript", "HTML", "css"])
console.log(nuevo_estudiante)
nuevo_estudiante.obtenDatos()

const nuevo_estudiante1 = new Estudiante("David", ["Python","PostgreSQL", "HTML", "css"])
console.log(nuevo_estudiante)
nuevo_estudiante.obtenDatos()

