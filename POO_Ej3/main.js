import Producto from "./producto.js";

function guardar_producto(){
    let descripcion = document.getElementById("inp_desc").value
    let precio_venta = document.getElementById("inp_precio").value
    let categoria = document.getElementById("select_inp").value
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

