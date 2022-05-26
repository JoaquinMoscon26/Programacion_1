const tomar_datos = async () => { 

    const datos_recibidos= await fetch('https://fakestoreapi.com/products')

    const datos= await datos_recibidos.json()

    let rowFila =[]
    datos.forEach(element => {

        let columna =

        `
        <div class="col-lg-3"> 
            <div class="card" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.description}</p>
                <p class="card-text">${element.price}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>
            </div>
        </div>
        `
        rowFila.push(columna)
        
    });

    

    

    document.getElementById("Row_Tabla").innerHTML = rowFila.join('')
}
tomar_datos()
