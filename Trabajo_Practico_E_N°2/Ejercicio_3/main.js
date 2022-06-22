//se crea el objeto 
const framework = {
    titulo: 'Framework utilizado en la actualidad',
    nombre: 'Angular',
    características: {
   lenguaje: 'TypeScript',
   patron: 'MVVM',
   spa: 'si'
    },
}

//aplico destructuring objects para extraer los datos del objeto y asignarlos a las constantes
const mostrar = () => {
const {titulo,nombre} = framework

const { lenguaje, patron, spa } = framework.características

console.log(`
    titulo: ${titulo}
    nombre: ${nombre}

    CARACTERISTICAS:
    Lenguaje: ${lenguaje}
    Patron: ${patron}
    Spa: ${spa}
`)

}

const boton = document.getElementById("btn_mostrar").addEventListener("click",mostrar)
