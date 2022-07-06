import Producto from "./producto.js";

function guardar_producto(){
    let descripcion = document.getElementById("inp_desc").value
    let precio_venta = document.getElementById("inp_precio").value
    let categoria = document.getElementById("select_cat").textContent
    //creamos una instancia y guardamos los datos de 
    let producto = new Producto(descripcion,precio_venta,categoria)
    /*Invocamos(ejecutamos) al metodo guardar_producto(),
    pertenecientes a la clase Producto
    */
    producto.guardar_producto()
}
document.getElementById("btn").addEventListener("click",guardar_producto)
function listar(){
    /*creamos una instancia y guardamos la instancia. la instancia nos da acceso a los atributos,
     y a los metodos de una clase
    */
    let producto = new Producto()

    //ejecutar al metodo obtener_producto()
    producto.obtener_producto()
}
listar()

function eliminar(){

    let indice= localStorage.getItem("indice")

    //creamos una instancia para acceder a los métodos y atributos de la clase producto
    let producto = new Producto()

    //haciendo uso de la instancia
    //invocamos al método eliminar_producto
    producto.eliminar_producto()
}

//accedo al id btn_eliminar
document.getElementById("btn_eliminar").addEventListener("click",eliminar) //como no se pasa ningún parametro en la función "eliminar", estando adentro del addEventListenner, no hace falta poner los ()

