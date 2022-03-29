//boton = get.elementbyID("boton")


function mostrar_mensaje(){
    //popup
    alert('Probando mi función')
}

function mostrar_en_consola(){
    
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

function validar(){
    const calificacion = prompt('ingrese suu calificación: ');

    if(calificacion>=7){
        alert('Estás Aprobado')
    }else{
        alert('Nos veremos en diciembre')
    }
}