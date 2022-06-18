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
    
    document.getElementById("p_text").textContent= '-la longitud del arreglo es: ' +longitud+' -El último elemento del arreglo es: '+ultimo_elemento+' -Mostrando en pantalla el elemento: '+ Xbox_elemento

}

document.getElementById("btn_arreglo1").addEventListener('click',mostrar)

function generar()
{

    
    /*Creo un nuevo arreglo para que los elementos del arreglo "consolas" se guarden en este y al recorrerlo lo muestren
    en la tabla
    Arreglo vacio para ir almacenando los tr que se van a ir acumulando e insertando en el arreglo 
    filas*/
    let filas= []
    consolas.forEach((element,index) => {
        
        let fila=
        
        /*acá pongo el index (para que muestre la posición, pero pongo "index+1", ya que quiero que
        empiece en 1, para que muestre la cantidad de consolas del arreglo y no las posiciones de este )

        */
        `<tr>
            <td>${index+1}</td>
            <td>${element}</td>
            
        </tr>`
        /*se van agregando los index y elementos del arreglo consolas establecidos en la variable let en forma de fila en el nuevo
        arreglo "filas" para agregarlos a la tabla, hasta que se terminen los elementos del arreglo*/

        filas.push(fila)
        
    });
    
    document.getElementById("tbl_body").innerHTML = filas.join('')
}

generar()



function desactivar()
{
    /*invoco a la etiqueta p_text, y utilizamos classList para utilizar el toggle, un evento que se usa para 
    que al apretar un boton en repetidas ocaciones reaccione de forma contraria a la anterior. el fade se usa 
    para aparecer y esconder el texto 
    */
   document.getElementById("p_text").classList.toggle('fade');
}

/*
se invoca el boton mediante el ID y se le asigna el evento click para luego, al presionarlo, que realice
lo seteado (asignado) en la función desactivar
*/ 

document.getElementById("btn_arreglo1").addEventListener("click",desactivar)



//document.getElementById("").style.display = 'none' // block
//document.getElementById("").style.visibility = 'hidden' //show