//Crea un nuevo fichero JS que contenga las siguientes líneas

//Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

//Ejecuta la depuración de VSCode para visualizar la ejecución de la función

function fib(num) {
    return num <= 1 ? num : fib(num - 1) + fib(num - 2);
}
  
console.log(fib(10) );
console.log( fib(7) );