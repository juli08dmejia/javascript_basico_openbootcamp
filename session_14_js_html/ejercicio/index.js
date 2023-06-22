const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click", () => {
    alert("Se ha hecho click")

    confirm("¿Estás de acuerdo?"
    ? console.log("OK")
    : console.log("NO!!"))
    const respuesta = confirm("¿Seguro?")
    if (respuesta){
        console.log("Estás de acuerdo") 
        console.log("Hola estoy utilizanfo JQuery")    
    }else{
        console.log("No estas de acuerdo")
        console.log("Hola estoy utilizanfo JQuery") 
    }
})

