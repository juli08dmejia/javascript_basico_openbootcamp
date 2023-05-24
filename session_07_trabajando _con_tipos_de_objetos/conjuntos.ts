//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

//Un nuevo Set con los nombres de tu familia
const nombres_familia = ["Serafin", "Mara", "Julian"]
const miFamilia = new Set(nombres_familia)

//Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
console.log(miFamilia)
miFamilia.add("Julian")
console.log(miFamilia)

//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miFamilia.add("JavaScript")
console.log(miFamilia)
