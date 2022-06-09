const tareas = [

    {
        nombre:'testeando',  //después de un objeto, si se quiere escribir algo abajo se le pone una coma. 
        duracion: 25
    }, //después de un colección de objetos, sai se quiere escribir otra abajo, se le pone una coma (,) a la llave
    {
        nombre: 'implementación de alta cliente',
        duracion: 90
    },
    {
        nombre: 'Actualiza cliente',
        duracion: 40
    },
    {
        nombre: 'Deploy de soft',
        duracion: 120
    },
    {
        nombre: 'Corrección de bug',
        duracion: 180
    }, 

]
/**
 * USO DEL MÉTODO MAP
 */

//metodo tradicional

let nombres = [] //creo un arreglo para llenar al arreglo nombres con el objeto, de propiedad 'nombre' del arreglo tareas.

tareas.forEach(element=> { //el foreach recorre el arreglo y da acceso a los elementos. En este caso a la propiedad "nombre" del objeto

    nombres.push(element.nombre) //con esto se accede al elemento ´nombre´ para tomar -----insertar un elemento dentro del arreglo nombres
    
});

//aplicando map()

tareas.map(tarea => tarea,nombres) //mediante una funcion flecha voy a ecceder a cada elemento individualmente

//cuando hay una linea de código puedo omitir las llaves y también el return

//map entrega como resultado un arreglo de nombres. yo le digo como está conformado ese array. En este caso quiero que esté conformado por nombres 


/**
 * USO DE FILTER
 */


//METODO NORMAL 
let tarea_prolongadas =[]
tareas.forEach(element => {
    
    if(element.duracion >=120){

        tarea_prolongadas.push(element)
    }
});

/*Si me encuentro con una tarea que tiene una duracion de mas o igual de 120, se inserta un Objeto. 
Cada objeto es una tarea que tiene dos propiedades: nombre, duración. */

/*recorremos todas las tareas. cuando me encuentre con una tarea que dure 120 o mas, se guarda 
en otro arreglo que guarde solo esas. Ese arreglo en este caso sería tareas prolongadas*/

console.log(tarea_prolongadas)

/**
 * FILTRAR HACIENDO USO DEL METODO FILTER
 */

tareas.filter( tarea => tareas.duracion >= 120) //las llaves y el return no hace falta ponerlo porque solo ocupa una linea de codigo el tareas.duracion >= 120