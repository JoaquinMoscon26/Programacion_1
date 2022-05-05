/*Crear un programa que básicamente analice la temperatura en °Fahrenheit e indice
cuando sus valores son elevados o bajos como se especifica a continuación.
Para ello, deberá añadir una función (flecha) que reciba como parámetro la temperatura
en grados Fahrenheit y retorne las siguientes frases:


1) Si los °F están entre 14 y 32, sale la frase “Temperatura baja”
2) Si los °F están entre 32 y 68, sale la frase “Temperatura adecuada”
3) Si los °F están entre 68 y 96, sale la frase “Temperatura alta”
4) Si no está entre ningún caso anterior la frase “Temperatura desconocida”

*/

//Creo una función para realizar una acción, la cual será escuchada por el evento click, mediante addEventListenner. a su 
//la función "calcular_temp" necesita que le envíen el valor del input y para eso se establece temper.
const calcular_temp = (temper) =>
{


    //se realiza una condicional para establecer los valores utilizando temper
    if((temper>=14) && (temper<=32)){

        //la función retorna o entrega una respuesta a la función.
        return 'Temperatura baja'
    }else if((temper>32) && (temper<=68)){
      
        return 'Temperatura adecuada'
    }else if((temper>68) && (temper<=96)){
        
        return 'Temperatura alta'
    }else{
        
        return 'Temperatura desconocida'
    }
}
const mostrar = () =>
{
    /*obtengo el elemento "inp_temp-" mediante un ID y le asigno una constante llamada temp, 
    para tomar su valor.
    */
    const temp=document.getElementById("inp_temp").value
    //inovco a la función calcular_temp y luego le envío los parametros(valores) temp
    const temp_calculada=calcular_temp(temp)

    /*obtengo el elemento h1 y con el textContent muestro el valor de la constante "temp_calculada" 
    y se muestra en pantalla lo otrogado por la función "calcular_temp"*/
    document.getElementById("h1_texto").textContent = temp_calculada

    
}

/*obtengo el elemento "btn_calculo" mediante un ID para definir la constante "boton".
*/
const boton = document.getElementById("btn_calculo")

// La función será escuchada por el evento click, mediante addEventListenner.
boton.addEventListener("click",mostrar)