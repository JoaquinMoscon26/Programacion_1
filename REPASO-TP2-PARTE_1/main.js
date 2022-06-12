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

    //accedo al elemento "Xbox", previamente obteniendo su posición.
    const Xbox_elemento = consolas[indice_Xbox]
    
    document.getElementById("p_text").textContent= 'la longitud del arreglo es: ' +longitud+' El último elemento del arreglo es: '+ultimo_elemento+'Mostrando en pantalla el elemento: '+ Xbox_elemento

}

document.getElementById("btn_arreglo1").addEventListener('click',mostrar)

function generar()
{
    let filas= []
    consolas.forEach((element,index) => {
        
        
        let fila=
        
        `<tr>
            <td>${index}</td>
            <td>${element}</td>
            
        </tr>`
        consolas.push(fila)
        
    });
    
    
    document.getElementById("tbl_body").innerHTML = filas.join('')
}

generar()
