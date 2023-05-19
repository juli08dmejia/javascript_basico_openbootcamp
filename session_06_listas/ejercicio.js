//Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["arroz", "atún", "carne", "pollo", "papas", "galletas"]
console.log(listaCompra)

//Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.splice(0,0, "Aceite de Girasol")
console.log(listaCompra)

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.splice(0, 1);
console.log(listaCompra)

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPeliculas = [ 
    {titulo:"Rapidos y Furiosos X", director:"Louis Leterrier",fecha:'2023-05-19'},
    {titulo:"Rápidos y furiosos 9", director:"Justin Lin",fecha:'2019-08-02'},
    {titulo:"Rápidos y furiosos: Hobbs & Shaw", director:"David Leitch",fecha:'2021-06-25'},
    {titulo:"Rápidos y furiosos 4", director:"Justin Lin",fecha:'2009-04-02'},
]
//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const nuevaListaPeliculas = listaPeliculas.filter(obj => obj.fecha >= "2009-01-01")
console.log(nuevaListaPeliculas)

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirectores = listaPeliculas.map(obj => obj.director )
console.log(listaDirectores)

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaTitulos = listaPeliculas.map(obj => obj.titulo )
console.log(listaTitulos)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const lista_directores_titulos = listaDirectores.concat(listaTitulos)
console.log(lista_directores_titulos)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const list_direct_titulos = [...listaDirectores, ...listaTitulos]

console.log(list_direct_titulos)

