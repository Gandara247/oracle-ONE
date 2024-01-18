alert("Hello World!");
let numeroMaximo= 1000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// let chute = prompt("Digite um número entre 1 e 50: ");

// if (chute == numeroSecreto) {
//     console.log(`Acertou o número!Você escolheu ${chute} e o número secreto é ${numeroSecreto}`);
// } else if (chute < numeroSecreto) {
//     console.log(`Errou!!! O número secreto é maior que ${chute}. Tente outra  vez!`);
// } else if (chute > numeroSecreto) {
//     console.log(`Errou!!! O número secreto é menor que ${chute}. Tente outra  vez!`);
// };

//while

let chute;
let tentativas = 1;
while (chute != numeroSecreto) {
    chute = prompt(`Digite um número de 1 a ${numeroMaximo}` );
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto e menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++
    };
};

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns, Você acerto o número secreto ${numeroSecreto} com ${tentativas} tentativas`);



// if (tentativas > 1) {
//     alert(`Parabéns, Você acerto o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Parabéns, Você acerto o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }

//Transformando o modelo simples de if else para o operador ternário ficaria assim:
let palavraPessoa = quantidadePessoas == 1 ? "pessoa" : "pessoas";




