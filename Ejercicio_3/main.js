function calcular_area_circulo(r)
{
    
    area_resultado= 3.14159263559*Math.pow(r,2)
    return area_resultado
}

function mostrar_area_circulo()
{

    const radio= document.getElementById("inp_radio").value
    const respuesta= calcular_area_circulo(radio)
    document.getElementById("h1_resultado").textContent= respuesta


}

