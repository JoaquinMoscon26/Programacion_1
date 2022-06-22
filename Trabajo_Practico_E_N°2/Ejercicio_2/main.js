let criptos = ['Bitcoin', 'Ethereum', 'Tether', 'BNB' , 'Cardano' , 'Dai' , 'Helium', 'Shiba Inu' , 'Tron' , 'Cronos','Solana']

//agrego Stellar al inicio del arreglo
criptos.unshift('Stellar')

 
//obtengo el índice de "Shiba Inu" para eliminarlo a el y al elemento siguiente
const indice_Shiba_Inu = criptos.indexOf('Shiba Inu')

//agrego la posición en la que me quiero parar para eliminar hacia adelante
const posicion = indice_Shiba_Inu;
//elijo la cantidad de elementos que quiero eliminar
const numeroElementos = 2;

criptos.splice(posicion,numeroElementos)

//agrego la criptomoneda ‘Gate’ al final del arreglo

criptos.push('Gate')

function imprimir(){

    //obtengo longitud del arreglo
    const longitud = criptos.length
    //obtengo el ultimo elemento del arreglo
    const ultimo_elemento = criptos [longitud-1]
    //obtengo la posición (índice/index) de un elemento.
    const indice_Helium = criptos.indexOf('Helium')

    //accedo al elemento "Xbox", previamente obteniendo su posición.
    const Helium_elemento = criptos[indice_Helium]

    document.getElementById("parrafo_text").textContent= 
    `
    -a) La longitud del arreglo es: ${longitud}
    -b) El último elemento del arreglo es: ${ultimo_elemento}
    -c) En pantalla se muestra la Criptomoneda: ${Helium_elemento}

    `
}

function imprimir_lista(){

    let items = [] //el arreglo item se declara vacia para luego llenarla con lo de abajo.

    //el forEach recorre el arreglo, se para en el primer elemento, construye un li, y lo acumula en items
    criptos.forEach(element => { 
        //se construye el li
        let li = `<li class="list-group-item">${element}</li>`

        //el push agrega un li al arreglo. 
        items.push(li)

        //todo esto es en bucle hasta terminar el arreglo.
    });

    //el join se utiliza para eliminar las comillas de los elementos del arreglo.
    document.getElementById("list_user").innerHTML = items.join('')
}


