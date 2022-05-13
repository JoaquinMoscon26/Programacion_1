function ejercutar (datoA, datoB,S){
    
    if(S==1){
        const suma = parseInt(datoA) + parseInt(datoB)
        return suma
    } else {
        if (S==2){
            const resta  = parseInt(datoA) - parseInt(datoB)
            return resta
        } else {
            if (S==3){
                const multi = parseInt(datoA)*parseInt(datoB)
                return multi
            } else {
                if (S==4){
                    const division = parseInt(datoA)/parseInt(datoB)
                    return division
                }
            }
        }
    }
   
}


function mostrar(){
    const S = document.getElementById('s_operac').value
    const datoA = document.getElementById('A').value
    const datoB = document.getElementById('B').value
    const respuesta = ejercutar (datoA,datoB,S)
    document.getElementById("respuesta").textContent = respuesta
}
const boton =  document.getElementById("boton")
boton.addEventListener("click",mostrar)