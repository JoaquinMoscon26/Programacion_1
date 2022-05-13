let alumno = {
    nombre : 'Joaquin',
    apellido : 'Moscon',
    dni : 45389579,
    correos : {
        outlook : 'Joaquin26@outlook.com',
        gmail : 'joakomoscon@gmail.com',
        yahoo : 'JoaquinM26@yahoo.com'
     }

}
// forma 1
 //const yahoo = alumno.correos.gmail
// const gmail = alumno.correos.gmail
// const outlook = alumno.correos.outlook

// forma 2 - Destructurig Object
const { yahoo, gmail, outlook } = alumno.correos

console.log(`
    correos: 
    Gmail: ${gmail}
    Yahoo: ${yahoo}
    Outlook: ${outlook}
`)