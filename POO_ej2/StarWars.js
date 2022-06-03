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

            console.log(`
                Título: ${titulo}
                Año= ${anio}
                Poster= ${poster}
            `)

        }
    }
}


