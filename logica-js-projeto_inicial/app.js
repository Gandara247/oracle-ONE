alert("Hello World!");

let numeroSecreto = 4;
// let chute = prompt("Digite um número entre 1 e 50: ");

// if (chute == numeroSecreto) {
//     console.log(`Acertou o número!Você escolheu ${chute} e o número secreto é ${numeroSecreto}`);
// } else if (chute < numeroSecreto) {
//     console.log(`Errou!!! O número secreto é maior que ${chute}. Tente outra  vez!`);
// } else if (chute > numeroSecreto) {
//     console.log(`Errou!!! O número secreto é menor que ${chute}. Tente outra  vez!`);
// };

//while

let chute
while (chute != numeroSecreto) {
    chute = prompt("Digite um número de 1 a 10")
    if (chute == numeroSecreto) {
        alert(`Parabéns, Você acerto o número secreto ${numeroSecreto}`)
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto e menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
    }
};
