let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function verificarChute(){
    console.log("O botão foi clicado");
};

function alerta(){
    alert("Eu amo JS 💖");
};

function pergunta(){
    console.log("O botão foi clicado");
    let cidade = prompt("Nome de uma cidade do Brasil:")
    alert(`Estive em ${cidade} e lembrei de você`)
};

function soma(){
    let valor1= parseInt( prompt("Insira um número:"))
    let valor2= parseInt( prompt("Insira outro número:"))
    alert(`A soma entre os dois números é igual a ${valor1+valor2}`)
}

