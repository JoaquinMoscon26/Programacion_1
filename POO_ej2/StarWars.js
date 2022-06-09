export default class StarWars {

    /*el método constructor, aunque no ejecute nada, se pone adentro de 
    la clase obligatoriamente ya que es parte de la estructura de la clase
    constructor es un metodo de la clase que se ejecuta al mmento de crear la instancia de la clase*/
    constructor() { }


    async StarW_API() {

        const sW = await fetch("https://fake-movie-database-api.herokuapp.com/api?s=star%20wars")

        const StarWar = await sW.json()

        //iterator funciona como un element. ejemplo: element.title) etc. se le puede poner el nombre que se desee.
        /* .Search se agrega al lado de la constante StarWar porque los datos almacenados del arreglo están almacenados justamente adentro del titulo
        del arreglo, que es un elemento de la API*/
        for (const iterator of StarWar.Search) {

            /*el iterator en este acaso se pone en la constante ya que debe ir todo junto adentro del ${} para que
            se vea uno abajo del otro*/
            const titulo = iterator.Title
            const anio = iterator.Year
            const poster = iterator.Poster

            let rowFila = []
            let columna =

            `
            <div class="col-sm-3"> 
                <div class="card" style="width: 18rem;">
                <img src="${poster}" style="height: 250px;"class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text collapse" id="collapse_${element.id}">${anio}
                    
                </p>
                </div><button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_${element.id}" >
                    Leer Descripción
                    </button>
                    <a href="#" class="btn btn-primary ">Comprar</a>
                </div>
                </div>
            </div>
            `
            rowFila.push(columna)

            /*console.log(`
                Título: ${titulo}
                Año= ${anio}
                Poster= ${poster}
            `)*/

        }

        document.getElementById("Row_Tabla").innerHTML = rowFila.join('')
    }
}

StarW_API()

