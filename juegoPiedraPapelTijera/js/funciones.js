let jugador = 0
let computadora = 0
let min = 1
let max = 3
let victorias = 0
let derrotas = 0
console.log(victorias + "mis victorias")

function computadoraAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugador, texto) {
    let resultado = ""
    if (jugador == 1) {
        resultado = texto + " ✊"
    } else if (jugador == 2) {
        resultado = texto + " ✋"
    } else if (jugador == 3) {
        resultado = texto + " ✌"
    } else {
        resultado = "Elige un número válido"
    }
    return resultado
}  

while(victorias < 3 && derrotas < 3) {
    // console.log(victorias + "mis victorias")
    computadora = computadoraAleatorio(min, max)
    // console.log(computadora, "avrr")
    jugador = prompt("Elige: 1 para piedra, 2 para papel y 3 para tijera, buena suerte!")

    alert(eleccion(computadora, "Compu escogió"))
    alert(eleccion(jugador, "Elegiste"))

    //Combate!

    if (jugador == computadora) {
        alert("Vaya... Ha sido un empate!")
    } else if ((jugador - computadora) == -2 || (jugador - computadora) == 1) {
        victorias = victorias + 1
        alert("Que buena suerte! Haz ganado!")
    } else {
        derrotas = derrotas + 1
        alert("Será para la próxima... Haz perdido")
    }
}

alert("Genial, haz ganado " + victorias + " veces. Vaya, haz perdido " + derrotas + " veces.")