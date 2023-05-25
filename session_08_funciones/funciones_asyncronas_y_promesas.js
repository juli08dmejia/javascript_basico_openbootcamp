//Funciones asíncronas

function miAsinc(){
    //Ej Hace un llamada a una base de datos externa
    //Puede darnos un error
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2 )
    //Si esta todo correcto
    if (true){
        resolve()
    }else {
        reject()
    }
})

miPromesa 
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("Error"))
    .finally(() => console.log("Yo me ejecuto siempre"))

//async await