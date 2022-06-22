
//la función se declara como asincrona para que quede trabajando en segundo plano debido al delay del API
const consumir_datos = async() => {

//la función realiza por defecto una solucitud http a travéz del metodo get obteniendo datos especificando una ruta
//Fetch realiza una solicitud HTTP a través del metodo GET  
    const datos = await fetch ("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    //se agrega await para acortar los tiempos de espera de los pedidos.
    const datos_definitiv = await datos.json()
        
        
    //creo un arreglo vacío filas para llenar el arreglo
    let filas = []

    /*se recorre el arreglo "datos_definitiv" con un foreach y se guardará parte de codigo que 
    luego ira en el tbody*/
    datos_definitiv.forEach((element,index) => {

        let fila = 
        `<tr>
        <td>${element.casa.nombre}</td>
        <td>${element.casa.compra}</td>
        <td>${element.casa.venta}</td>

        </tr>`
        //agrego las filas creadas al arreglo filas
        filas.push(fila)
    });

    //invoco al elemento button.
    document.getElementById("tbl_body").innerHTML = filas.join('')

    

}           
                                                                                                                                                           
//se invoca a la función
consumir_datos()

