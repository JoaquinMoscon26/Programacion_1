function calcular_temp(C)
{
    const temp= (C * 1.8) + 32
    return temp
}

function mostrar_temp()
{
    const temperatura=document.getElementById("inp_temp").value

    const temp=calcular_temp(temperatura)

    document.getElementById("h_selcius").textContent= 'la temperatura en Fahrenheit es: ' + temp
}


