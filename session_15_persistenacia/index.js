//localStorage.setItem("nombre", "Julian")
//localStorage.setItem("nombre", "David")

console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona", JSON.stringify({ nombre: "Julian", edad: 32 }))

console.log(JSON.parse(localStorage.getItem("persona")))

//JSON.stringify -> convierte un objerto en string
//JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto de javascript 


localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-session", "Julian")

/*Coockies */


document.cookie = "nombreCoockie=nuevaCoockie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 8, 8).toUTCString()

console.log(document.cookie)



