function calcular(oper,num1,num2)
{

    /*el 1 es la opción seleccionada que se vincula con el Html. En
    este caso, la Opcion 1 es "suma".*/
    if(oper==1){
        suma= parseInt(num1) + parseInt(num2)
        return suma
    }else if(oper==2){
        resta= parseInt(num1) - parseInt(num2)
        return resta
    } else if(oper==3){
        multi= parseInt(num1) * parseInt(num2)
        return multi
    }else if(oper==4){
        division= parseInt(num1) / parseInt(num2)
        return division
    }
    

    

    
}

function mostrar_calculo()
{
    const operacion = document.getElementById("sel_op").value
    const numero1 = document.getElementById("inp_n1").value
    const numero2 = document.getElementById("inp_n2").value

    const calculo= calcular(operacion,numero1,numero2)

    document.getElementById("h3_texto").textContent = calculo

}


