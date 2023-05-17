//Cómo trabajar con listas (arrays, arreglos, vectores)

let var1 = { id: false };
let array = [1,"hola", false, { id: 5 }, null, undefined, var1];

console.log(array);

//Acceder a los valores de un Array a través de su posición 

console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

//Métodos para introducir nuevos valores en los arrays

//.push() .unshift() => Mutan el valor de nuestro array
//Poner valores al final utilizamos el método push

//Valores al final -> push
array.push("final")
console.log(array)

//Valores al comienzo -> Unshift
array.unshift("inicio", 87, 99)
console.log(array)

//Métodos para eliminar valores en nuestros Arrays
// .pop() .shift() => Mutan el valor del array

const array2 = [1,3,"hola", false]

//Valores al final -> Pop
array2.pop()
console.log(array2)

//Valores al comienzo ->  Shift
array2.shift()
console.log(array2)

//Método para eliminar, modificar o añadir valores en nuestro array
// .splice(x,y,z)

const array3 =  [1,2,3,4,5,6]

//Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 1);
console.log(array3)

//Añadir valores con .splice(indice, 0, valores)
array3.splice(2,0, "hola")
console.log(array3)

//Modificar valores(indice, 1, valores)
array3.splice(2, 1, 3)
console.log(array3)








