//creo la clase producto y 
export default class Producto {


    //constructor es un metodo de la clase que se ejecuta al mmento de crear la instancia de la clase
    constructor(desc,precio,cat) {

        this.descripcion = desc
        this.precio = precio
        this.categoria = cat

    }

    guardar_producto(){

        let nuevo_producto = {
            descripcion: this.descripcion,
            precio: this.precio,
            categoria: this.categoria
        }
        if("productos" in localStorage){
            //Converitmos el JSON obtenido desde el storage, en una expresion nativa de Javascript
            let lista = JSON.parse(localStorage.getItem("productos"))
            lista.push(nuevo_producto)
            localStorage.setItem("productos",JSON.stringify(lista))
        }else{
            let lista = [] 
            lista.push(nuevo_producto)
            localStorage.setItem("productos",JSON.stringify(lista))
        }
        /*let lista = []
        lista.push(nuevo_producto)
        //Guardar en el storage:
        localStorage.setItem("productos",JSON.stringify(lista))
        */

        //vuelvo a ejcutar el metodo encargado de construir la tabla. ya que, cargaos un nuevo producto.
        //Y la lista almacenada en el storage es obsoleta(vieja). Por ello reconstruimos la misma nuevamente
        this.obtener_producto()
    }

    obtener_producto(){

        //el foreach empezará a recorrer (o a ejecutar) solo si productos está creado.
        if("productos" in localStorage){
            /*
                recolectamos todos los productos alojados en el item "productos", que están en notación JSON.
                Debemos convertirlo en una expresion natica de JavaScript (hacemos un JSON.parse())
                */ 
                let lista_productos = JSON.parse(localStorage.getItem("productos"))

                let filas = []
                lista_productos.forEach((element,index) => {

                    let fila=`

                        <tr>
                        <td>${index+1}</td>
                        <td>${element.descripcion}</td>
                        <td>${element.precio}</td>
                        <td>${element.categoria}</td>
                        <td><button type="button" class="btn btn-outline-danger mt-3">

                        <i class="fa fa-trash">

                        </button></td>
                        <tr>

                    `
                    filas.push(fila)
                    
                });

            document.getElementById("tbl_body").innerHTML = filas.join('')
        }
    
        
    }

    eliminar_producto(){

        


    }


}

