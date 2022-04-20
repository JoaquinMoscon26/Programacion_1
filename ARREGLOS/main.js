//Crear un array.

//Creamos un arreglo de string.
let series = ['Breaking Bad','OKUPAS','Narcos','Casados con Hijos','Peaky Blinders']

//Como conocer la longitud de un aarray.
const longitud = series.length

console.log('La longitud del arreglo es: ' + longitud)

//Como acceder a un elemento del arreglo haciendo uso del índice.
const primero = series[0]

console.log('El primer elemento del arreglo es: ' + primero)

//Como acceder al último elemento.
const ultimo = series [longitud-1]

console.log('el último elemento del arreglo es: '+ ultimo)

//Como recorrer un arreglo haciendo uso de un foreach. (index y element son variables preestablecidas de JS.)
series.forEach( (element,index) => {

    console.log(index+'-'+element)
    
});

//Como agregar un elemento al final de un arreglo (o array).
series.push('Dragon Ball')

console.log(series)

//Como eliminar el último elemento de un arreglo
series.pop()

console.log(series)

//Como agregar un elemento al inicio de un arreglo.
series.unshift("Grey's anatomy'")

console.log(series)

//Como elimino un elemento al inicio de un arreglo.
series.shift("Grey's anatomy'")

console.log(series)

//Como obtener la posición (índice/index) de un elemento.
const indice = series.indexOf("Casados con Hijos")

console.log('El índice de Casados con hijos es: '+indice)

//Como eliminar un elemento teniendo su posición.
//--------   ----  ---- ---- ---- ----
//primer caso - eliminar un único elemento
series.splice(indice,1)
console.log(series)

//Segundo caso - eliminar más de un elemento
const posicion = 1;
const numeroElementos = 2;
console.log('elimno 2 elemetntos')
series.splice(posicion,numeroElementos)
const elementosEliminados = series.splice(posicion,numeroElementos)
console.log('Los elementos eliminados son: '+elementosEliminados)
console.log(series)

//Copiar un array
let copia = series.slice()
copia.push("Dragon Ball")
console.log(copia)
console.log(series)