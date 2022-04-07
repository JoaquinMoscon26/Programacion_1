//esta función solo es enfocará en el calculo

function calcular(d1,d2)
{
    const resultado = d1*d2;
    return resultado
}


//solo se enfocará en recolecar los datos y entregarlos a la función calcular().

function mostrar()   //()=argumento
{

    //forma 1
    const dato1= document.querySelector("#inp_dato1").value

    //forma2
    const dato2= document.getElementById("inp_dato2").value

    //acá ejecutamos e invocamos (por su nombre) a la función.
    const respuesta= calcular(dato1,dato2) /*intento ejecutar calcular, pero hay que mandar los datos de 
    las constantes asignadas, se mandan a d1 y d2, una vez que se envian se puede 
    hacer la operación en la función calcular. le envía pero a la vez te devuelve datos. 
    En este caso se enviaron. los datos (que se guardan en las constantes) al argumento 
    de la función mostrar() a la función calcular(), para que esta última le envíe la multiplicación. */

    //obtenemos el elemento html y con el textContent se visualiza el elemento.
    document.getElementById("h_resultado").textContent = respuesta

}