//El nombre de la clase siempre lleva mayuscula al principio.

export default class Trapecio {

    //metodo que forma parte de clase
    constructor(bma,bme,h){

        this.base_mayor = bma
        this.base_menor = bme
        this.altura = h
    }

    //creamos nuevo metodo
    calcular_area_trapecio(){
        
        //this hace referencia a que el atributo pertenece a la Clase, en este Caso, clase Trapecio
        const resultado= (Number(this.base_mayor) + Number(this.base_menor)/2) * this.altura
        return resultado
    }
}


