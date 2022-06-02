//nos importamos la clase Trapecio que proviene del archivo trapecio.js

import Trapecio from "./trapecio.js";

function ejecutar(){

    const base_mayor = document.getElementById("inp_bmay").value
    const base_menor = document.getElementById("inp_bmen").value
    const altura = document.getElementById("inp_h").value

    //creamos la instancia de la clase Trapecio
    const trapecio= new Trapecio(base_mayor,base_menor,altura)
    //mediante el uso de la instancia invocamos y/o ejecutamos el metodo.
    trapecio.calcular_area_trapecio()

    const respuesta = trapecio.calcular_area_trapecio()

    document.getElementById("h3_resultado").textContent = 'Area Trapecio '+ respuesta
}

document.getElementById("btn").addEventListener("click",ejecutar)