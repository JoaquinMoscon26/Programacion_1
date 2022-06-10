let consolas = ['Playstation','Xbox','Nintendo Game Cube','Sega DreamCast','Game Boy Advanced']

//agrego la posición en la que me quiero parar para eliminar hacia adelante
const posicion = 2;
//elijo la cantidad de elementos que quiero eliminar
const numeroElementos = 2;

consolas.splice(posicion,numeroElementos)

//agrego un elemento al final de un arreglo (o array).
consolas.push('Nintendo 64')

consolas.unshift('Nintendo Wii')



const mostrar = () => 
{   
    //obtengo la longitud del arreglo
    const longitud= consolas.length
    //obtengo el ultimo elemento del arreglo
    const ultimo_elemento = consolas [longitud-1]
    //obtengo la posición (índice/index) de un elemento.
    const indice_Xbox = consolas.indexOf("Xbox")
    
    document.getElementById("p_text").textContent= 
    `
    la longitud del arreglo es: ${longitud}
    El último elemento del arreglo es: ${ultimo_elemento}
    Mostrando en pantalla el elemento: ${indice_Xbox}
    `
}

document.getElementById("btn_arreglo1").addEventListener('click',mostrar())
