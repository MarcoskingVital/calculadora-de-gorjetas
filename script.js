let conta = 0
let pessoas = 0
let porcentagem = 0

const containput = document.querySelector(".conta input")
containput.addEventListener("input", recebervalorconta)

function recebervalorconta(evento) {
    conta = Number(evento.target.value)
    calcular()
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

    calcular ()
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

     calcular ()
}

const gorjetaInput = document.querySelector("#outra")
gorjeta.input.addEventListener("input", receberporcentagem)

function calcular() {
    if(conta !== 0 && porcentagem !== 0 && pessoas !== 0) {
        const strongGorjetatotal = document.querySelector(".gorjeta-total >")
        strongGorjetatotal.innerHTML =`R$ ${ (conta * porcentagem / pessoas).tofixed(2)}`

        const strongtotal = document.querySelector(".total > strong")
        strongtotal.innerHTML = R$ ${((conta + (conta * porcentagem)) / pessoas).toFixed(2)}
    }
}

const botaolimpar = document.querySelector("resultados button")
botaolimpar.addEventListener("click", limpar)

function limpar() {
    containput.value = ""

    botoesGorjeta.forEach(botao => {
        botao.classlist.remove("botao-ativo")
    })

    gorjetaInput.value = ""

    pessoasInput.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$ 0.00"
    document.querySelector(".total > strong").innerHTML = "R$ 0.00"

}