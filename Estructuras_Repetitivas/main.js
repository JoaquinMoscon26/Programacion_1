let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let dos_nueve = []
let pares = []

function mostrar_forOf() {
    for (const elemento of numeros) {

        if (elemento >= 2 && elemento <= 9) {

            dos_nueve.push(elemento)

        }

    }

    console.log(dos_nueve)
}

mostrar_forOf()



function mostrar_forEach() {

    numeros.forEach(element => {

        let elemento= element /2
        if (elemento==0) {
            pares.push(elemento)
        }

    });

    console.log(pares)

}

mostrar_forEach()