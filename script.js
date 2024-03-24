let conta = 0
let pessoas = 0

const containput = document.querySelector(".conta input")
containput.addEventListener("input", recebervalorconta)

function recebervalorconta(evento) {
    conta = Number(evento.target.value)
} 

const pessoasInput = document.querySelector("#pessoas")
pessoas.Input.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
    const paragrafoerro = document.querySelector (".pessoas #erro")
    divErro.setAttribute("id", "erro-div")

    if(evento.target.value === "0") {
        paragrafoErro.style.display = "block"
         divErro.setAttribute = ("id" , "erro-div")
    } else {
        paragrafoErro.style.display = "none"
         divErro.setAttribute = ("id" , "")
         pessoas = Number(evento.target.value)
    }
}