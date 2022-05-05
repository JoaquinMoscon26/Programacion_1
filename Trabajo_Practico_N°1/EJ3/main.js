
//la función "calcular_hipotenusa" necesita que le envíen los valores del input y para eso se establece a,b.
function calcular_Hipotenusa (a,b)
{

    //hago el primer calculo, para sacar el valor al cubo de los parametros a y b
    const cuenta1=Math.pow(a,2) + Math.pow(b,2)
    //hago calculo final, para sacar la raíz de los parametros a y b.
    const hipotenusa=Math.sqrt(cuenta1)
    //la función retorna o entrega una respuesta a la función.
    return hipotenusa

}

function mostrar_resultado()
{

    /*obtengo los elementos html mediante un ID y le asigno constantes. a algunas le agrego .value
    para tomar su valor.
    */
    const altura=document.getElementById("inp_a").value
    const base=document.getElementById("inp_b").value
    //inovco a la función calcular_temp y luego le envío los parametros inp_a e inp_b
    const hipotenusa=calcular_Hipotenusa (altura,base)

    /*obtengo el elemento h4 y con el textContent muestro el valor de la constante "hipotenusa" 
    y se muestra en pantalla lo retornado por la función "calcular_Hipotenusa"*/
    document.getElementById("h4=texto").textContent='la hipotenusa es: '+hipotenusa

}

//esta función se activa a través del evento "onclick" encontrado en el documento HTML.