const consumir_datos = async () => //el await no funciona si la función no se declara como asincrona (async())
{

    const datos_recibidos = await fetch('https://jsonplaceholder.typicode.com/users')

    /*los datos recibidos a .json significa que se recibe el json  datos extras que son propios 
    de la peticion como el tiempo de llegada: ej: 3ms. cantidad de tiempo que demoro en llegar, 
    protocolo de transporte. Estos datos no nos interesan entonces por eso se hace el punto json, 
    para solo traer la lista de usuarios.*/

    const lista_usuarios= await datos_recibidos.json() //el await genera espera que la instrucción finalice por completo para leer la siguiente instrucción.

    let items = [] //el arreglo item se declara vacia para luego llenarla con lo de abajo.

    //el forEach recorre el arreglo, se para en el primer elemento, construye un li, y lo acumula en items
    lista_usuarios.forEach(usuario => { //se puede usar element o usuario, es genérico. Se puede cambiar el nombre
        
        //se construye el li
        let li = `<li class="list-group-item">${usuario.name}</li>`

        //el push agrega un li al arreglo. 
        items.push(li)

        //todo esto es en bucle hasta terminar el arreglo.
    });

    //buscamos a ul mediante id.
    //se utiliza inerHTML porque se llena al li con formato html
    /*se "limpia" el item para que ya no queden comillas para que lo tome el HTML. debido a que se necesita
    codigo HTML puro.
    Para eso se usa .join()*/

    document.getElementById("list_user").innerHTML = items.join('')
    
    

}


consumir_datos()