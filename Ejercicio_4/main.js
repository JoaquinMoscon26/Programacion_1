const Primer_bloque_calculo =(a,b,c)=> 
{
    const retornar1=Math.pow(b,2)-(4*a*c)
    return  retornar1


}

const Segundo_bloque_calculo =(bloque1)=> 
{
    const retornar2=Math.sqrt(bloque1)
    return  retornar2
}

const calcular_r1 =(bloque2)=> 
{
    const retornar3= (-b + bloque2) / (2*a)
    return  retornar3
}
const calcular_r2 =(bloque2)=> 
{
    const retornar3= (-b - bloque2) / (2*a)
    return  retornar3
}


const mostrar_baskara = () =>
{
    const a= document.getElementById("inp_a")
    const b= document.getElementById("inp_b")
    const c= document.getElementById("inp_c")
    
    const bloque1 = Primer_bloque_calculo(a,b,c)
    const bloque2 = Segundo_bloque_calculo(bloque1)

    const raiz1 = calcular_r1(bloque2)
    const raiz2 = calcular_r2(bloque2)

    document.getElementById("h_resultado").textContent = calcular

}

document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar_baskara)