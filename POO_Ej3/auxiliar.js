function almacenar_indice(indice){

localStorage.setItem("indice",indice)

}

function editar_producto(indice){

/*busqué los datos de los productos en un item de la unidad productos,
ya que ahí se alojan los datos, y así podes editarlos*/

let lista= JSON.parse(localStorage.getItem("productos"))

//se empieza a almacenar la descripción en la lista
document.getElementById("inp_desc").value = lista[indice].descripcion
document.getElementById("inp_precio").value = lista[indice].precio
document.getElementById("select_cat").value = lista[indice].categoria

localStorage.setItem("indice",index)
document.getElementById("btn").style.display= "none"
document.getElementById("btn_actualizar").style.display = "block"
    
}
