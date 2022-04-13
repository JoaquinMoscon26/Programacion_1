boton = document.getelementbyID("boton")


function mostrar_mensaje()
{
    //popup
    alert('Probando mi función')
}

function mostrar_en_consola()
{
    
    //asignamos una cadena de string en una constante
    const nombre_apellido = 'Moscon Joaquin Emanuel'

    /* Forma 1 - sin template string */
    console.log('Nombre y Apellido: ' + nombre_apellido)

    /* Forma 2 - con template string */


    /*backtick: ``/*
    /*template string: Proporcionar una plantilla para 
    conformar una cadena es string en más de una linea de código.*/
    console.log(`
        Nombre y Apellido: ${nombre_apellido} 
        DNI: 45389579
        Dirección: Colombia 1788`)
}

//condicionales


function validar()
{
    const calificacion = prompt('ingrese su calificación: ');
/*
    if(calificacion>=7){
        alert('Estás Aprobado')
    }else{
        alert('Nos veremos en diciembre')
    }*/
    
    //expresión ternaria (solo se usa cuando hay un solo if y un solo else).

    (calificacion >=7) ? alert('estás aprobado') : alert('Desaprobado')

}

//Función con retorno y comunicación entre funciones.

function calcular()
{
    const number = prompt('Ingresar un número: ');
    const resultado = number * 10

    //estamos entregando una respuesta
    return resultado
}

function visualizar()





{
    //invocamos (ejecutamos) la función ejecutar.
    const respuesta = calcular()
    alert(respuesta)


}
