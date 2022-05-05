/*Realizar un programa para una Concesionaria de Autos:
Si el vehículo a la venta es un Ford Fiesta, el descuento es de un 5%. Si el vehículo a la
venta es un Ford focus, el descuento es del 10%. Y por ultimo, si se trata de un Ford Ka,
el descuento es de un 15%. El usuario deberá elegir el vehículo. Y el programa deberá
entregar el precio con descuento en un elemento html H1.
Los precios preestablecidos son:

• Ford Ka: $1.750.000
• Ford Fiesta: $1.950.000
• Ford Focus: $2.560.000

Para llevar a cabo dicha consigna, solo se debe crear una función tradicional. Los
detalles se como llevar adelante el ejercicio, se los dará el docente.
*/

//Creo una función para realizar una acción, la cual será escuchada por onclick, situada en el documento HTML.
function mostrar()
{
    /*obtengo el elemento "autos" mediante un ID y le asigno la constante "seleccionar" para guardar su valor
    Para guardarlo se utiliza el .value
    */ 
    const seleccionar = document.getElementById("autos").value
    /*Acá estoy afirmando que, si selecciono (con el select desde html) la opción "Fort_Fiesta",
    se realizará determinada cuenta. De igual manera con los siguientes if.
    */
    if(seleccionar=="Fort_Fiesta"){

        //defino una constante llamada FFiesta para guardar la cuenta de porcentaje.
        const FFiesta= parseInt(1950000)-parseInt(1950000)*parseInt(5)/parseInt(100)

        /*obtengo el elemento "h1_texto" mediante un ID y utilizo textContent para mostrar el resultado de 
        la constante FFiesta, la cual se encarga de realizar la cuenta
        */
        document.getElementById("h1_texto").textContent= 'El precio final del automóvil será de: '+FFiesta

    }else if(seleccionar=="Ford_focus"){
        const FFocus= parseInt(2560000)-parseInt(2560000)*parseInt(10)/parseInt(100)
        /*obtengo el elemento "h1_texto" mediante un ID y utilizo textContent para mostrar el resultado de 
        la constante FFocus, la cual se encarga de realizar la cuenta.
        */
        document.getElementById("h1_texto").textContent = 'El precio final del automóvil será de: '+FFocus

    }else if(seleccionar=="Ford_Ka"){
        const FordK= parseInt(1750000)-parseInt(1750000)*parseInt(15)/parseInt(100)
        document.getElementById("h1_texto").textContent = 'El precio final del automóvil será de: '+FordK
        /*obtengo el elemento "h1_texto" mediante un ID y utilizo textContent para mostrar el resultado de 
        la constante FordK, la cual se encarga de realizar la cuenta.
        */
    }
}
