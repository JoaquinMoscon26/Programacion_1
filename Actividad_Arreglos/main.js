

let lenguajes = ['Python', 'JavaScript', 'Csharp', 'C++' , 'Java' , 'PHP' , 'Ruby']

/*
1. Crear una función que imprima en un párrafo lo siguiente:
a) La longitud del arreglo
b) El ultimo elemento del arreglo
c) El tercer elemento del arreglo

*/
function mostrar_arreglo_1()
{

    const longitud = lenguajes.length
    const ult_element= lenguajes [longitud-1]
    const indice_prim_element=lenguajes.indexOf("Csharp")
    const prim_element=lenguajes[indice_prim_element]
    
    document.getElementById("parrafo_longitud").textContent= 'la longitud del arreglo es: '+longitud
    document.getElementById("parrafo_Ult_element").textContent='el último elemento del arreglo es: '+ult_element
    document.getElementById("parrafo_prim_element").textContent='el tercer elemento del arreglo es: '+prim_element
}

/*
2. Crear una función que recorra el arreglo y lo imprima en un console.log(). Hacer uso de
forEach para dicho recorrido.
*/ 
function mostrar_arreglo_2()
{
    lenguajes.forEach((element,index) => {
        
        console.log(('indice:'+index+' - '+'elemento:'+element))
    });

   

}
//3.Agregar en lenguaje ‘Go’ al final del arreglo.
lenguajes.push('Go')
//console.log(lenguajes)

// 4.Eliminar el primer lenguaje del arreglo
lenguajes.shift('Python')
//console.log(lenguajes)

//5. Agregar al inicio del arreglo el lenguaje ‘Kotlin’
lenguajes.unshift('Kotlin')
//console.log(lenguajes)

//Eliminar el lenguaje Java y Php mediante el uso de splice(posición,elementos)
const indice_java = lenguajes.indexOf('Java')
const posicion = indice_java;
const numeroElementos = 2;
lenguajes.splice(posicion,numeroElementos)

console.log(lenguajes)