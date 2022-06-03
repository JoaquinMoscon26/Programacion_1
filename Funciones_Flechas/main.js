/*const calcular = () => console.log('probando') /*en este caso no hace falta poner llaves, 
ya que solo es un console.log y se escribe en una linea*/ 


const calcular = (n1,n2) => //en el caso de que la función tenga un solo parámetro se puede expresar sin paréntesis.
{

    const resultado= n1*n2
    return resultado
}

const mostrar = () =>
{

    const dato1 = document.getElementById("dato1").value
    const dato2 = document.getElementById("dato2").value
    const respuesta=calcular(dato1,dato2)
    document.getElementById("h_resultado").textContent = respuesta

}
//encontrar u obtener el boton y guardarlo en la constante
const boton = document.getElementById("btn_calcular")

//Agregamos un evento a escuchar. addEventListener=escuchar/estar atento, en este caso a un click.
boton.addEventListener("click",mostrar)

