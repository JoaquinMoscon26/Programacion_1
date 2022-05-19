
//la función se declara como asincrona para que quede trabajando en segundo plano debido al delay del API
async function obtener_datos()
{
    //Fetch realiza una solicitud HTTP a través del metodo GET  
    const datos = await fetch('https://jsonplaceholder.typicode.com/posts') //<--endpoint o ruta
    const datos_definitivos= datos.json()

    datos_definitivos.forEach(element => {
        
        console.log(element.title)
    });
}


//json se le llama a los datos que viajan a través de internet. formato json. Es un formato de información.
//Un arreglo es la sintaxis propia de JavaScript.

