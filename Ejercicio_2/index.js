function calcular_area()
{
    const base=parseInt(prompt('ingrese la base superior del trapecio: '));
    const base2=parseInt(prompt('ingrese la base inferior del trapecio: '));
    const h=parseInt(prompt('ingrese la altura del trapecio: '));

    const formula=((base+base2)*h)/2
    return formula
}

function mostrar()
{
    const resultado= calcular_area()

    alert(resultado)
}