let listaDeNumeros = [];
let numeroMaximo = 10;

let numeroAleatorio = gerarNumeroAleatorio();
function exibirTextos(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
};
function exibirMensagemInicial() {
    exibirTextos("h1", "Bora pro jogo");
    exibirTextos("p", "Escolha um número entre 1 a 10");
};

exibirMensagemInicial()

let tentativas = 1;
function verificarClick() {
    let chute = document.querySelector("input").value;
    if (chute == numeroAleatorio) {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativa}`
        exibirTextos("h1", "Acertou!");
        exibirTextos("p", ` ${mensagemTentativas} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroAleatorio) {
            exibirTextos("h1", "Errou!");
            exibirTextos("p", `O número secreto é menor que ${chute}`);
        } else {
            exibirTextos("h1", "Errou!");
            exibirTextos("p", `O número secreto é maior que ${chute}`);
        };
        tentativas++;
        limparCampo();
    };
};
function gerarNumeroAleatorio() {
    let numeroescolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementos = listaDeNumeros.length;
    if (quantidadeDeElementos == numeroMaximo) {
        listaDeNumeros = []
    }
    if (listaDeNumeros.includes(numeroescolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroescolhido);
        console.log(listaDeNumeros);
        return numeroescolhido;
    };
};

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
};

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
};