const generar_tabla = async () => {
    const provincias = await fetch("https://jsonplaceholder.typicode.com/users")

    const provin = await provincias.json()

    let filas = []
    provin.forEach(element => {

        let fila=
        `
        <tr>
            <td>${element.name}</td>
            <td>${element.username}</td>
        </tr>
        `

        filas.push(fila)
    });

    document.getElementById("tbl_body").innerHTML = filas.join('')
}


generar_tabla()

/*
const obtener_usuario = async () => { 
    const usuarios = await fetch("https://jsonplaceholder.typicode.com/users")
    const lista_usuarios = await usuarios.json()
    //Recorrer los usuarios
    let filas = []
    lista_usuarios.forEach(element => {
        let fila = 
        `<tr>
            <td>${element.adress}</td>
            <td>${element.name}</td>
            
        </tr>`
        filas.push(fila)

        
    });
    document.getElementById("tbl_body").innerHTML = filas.join('')


}
//Invocamos a la funcion
obtener_usuario()
*/