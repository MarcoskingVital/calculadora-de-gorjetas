let conta = 0
let pessoas = 0
let porcentagem = 0

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

const botoesGorjeta = document.querySelectorAll(".gorjet input [type='number']")
botoesGorjeta.forEach(botao => {
     botao.addEventListener("click", receberporcentem)
})

function receberporcentagem() {
    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")

        if(botao.value === evento.target.value) {   
            botao.classList.add("botao-ativo")
    }
 })

 if(evento.target.value !== "") {
        porcentagem = parsefloat(evento.target.value) / 100
 } else {
    porcentagem = 0
 }


}

const gorjetaInput = document.querySelector("#outra")
gorjeta.input.addEventListener("input", receberporcentagem)