import StarWars from "./StarWars.js"

function ejecutar_SW()
{
    const starWars= new StarWars()

    starWars.StarW_API()
}

document.getElementById("btn").addEventListener("click",ejecutar_SW)