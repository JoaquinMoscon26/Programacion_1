
//cuando se usa una funcion tradicional se pone 'async' delante de la palabra reservada 'function'
async function  tomar_datos (categoria) { 

    let datos_recibidos
    if(categoria=='products'){
        //la función realiza por defecto una solucitud http a travéz del metodo get obteniendo datos especificando una ruta
        datos_recibidos = await fetch('https://fakestoreapi.com/products')
    }else{
        datos_recibidos = await fetch('https://fakestoreapi.com/products/category/' + categoria)
    }
    const datos = await datos_recibidos.json()

    let rowFila = []
    datos.forEach(element => {

        
        let columna =

            `
            <div class="col-sm-3"> 
                <div class="card" style="width: 18rem;">
                <img src="${element.image}" style="height: 250px;"class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text collapse" id="collapse_${element.id}">${element.description}
                    
                </p>
                </div><button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_${element.id}" >
                    Leer Descripción
                    </button>
                    <p class="card-text d-flex justify-content-center"> $${element.price}</p>
                    <a href="#" class="btn btn-primary ">Comprar</a>
                </div>
                </div>
            </div>
            `
        rowFila.push(columna)

    });

    document.getElementById("Row_Tabla").innerHTML = rowFila.join('')
}

tomar_datos()