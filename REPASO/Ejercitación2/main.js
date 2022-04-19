
//la función "calcular" necesita que le envíen el valor de los inputs y para eso se establece A1,A2,A3
const calcular = (A1,A2,A3) =>
{

    //se asigna una constante para hacer la suma de los lados.
    const suma_angulos= parseInt(A1) + parseInt(A2) + parseInt(A3)
   
     
    /*se asigna una variable (puede ser una constante pero en este caso el valor se puede variar)
    para guardar el mensaje según lo preguntado/validado
    */
   let mensaje =  (suma_angulos==180) ? '*VALIDO*' + ' la suma es: ' + suma_angulos : '*INVALIDO*' + ' la suma es: ' + suma_angulos

   //la función retorna o entrega una respuesta a la función.
    return mensaje
}

const mostrar_en_pantalla=() =>
{

    //obtengo los elementos html con el "getElementbyId" y con .value recojo el valor de los inputs
    const num1=document.getElementById("inp_1").value
    const num2=document.getElementById("inp_2").value
    const num3=document.getElementById("inp_3").value

    //inovco a la función calcular y luego le envío los parametros(valores) num 1, num2, num3
    const envio=calcular(num1,num2,num3)

    /*obtengo el elemento h1 y con el textContent muestro el valor de la constante "envio" 
    y se muestra en pantalla lo otrogado por la función "calcular"*/
    document.getElementById("h_texto").textContent =envio
    

}

//obtengo el elemento "button" mediante un ID
const boton=document.getElementById("boton")

//escucho al evento "click" al presionarse se muestra en la pantalla.
boton.addEventListener("click",mostrar_en_pantalla)