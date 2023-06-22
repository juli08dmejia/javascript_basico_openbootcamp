const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click", () => {
    //alert("Se ha hecho click")
    //confirm("¿Estás de acuerdo?"
    //? console.log("OK")
    //: console.log("NO!!"))
    const respuesta = confirm("¿Seguro?")
    if (respuesta){
        console.log("Estás de acuerdo")    
    }else{
        console.log("No estas de acuerdo")
    }
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("Cuál es tu nombre?")
    if (nombre){
        console.log("Tu nombre es " + nombre)
    }else{
        console.log("No has introducido nada")
    }
        
})

const lista = [{
    nombre: "JUlian",
    edad: 32
},{
    nombre: "David",
    edad: 32
},{
        nombre: "Serafin",
        edad: 12
}]
//console.log(lista)
console.table(lista)