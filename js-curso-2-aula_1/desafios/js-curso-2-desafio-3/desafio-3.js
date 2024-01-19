function imc(altura, peso) {
    let calculo = peso / Math.pow(altura, 2);
    if (calculo < 17) {
        return `Seu IMC é de ${calculo.toFixed(2)} muito abaixo do peso.`;
    } else if (calculo >= 17 && calculo <= 18.5) {
        return `Seu IMC é de ${calculo.toFixed(2)}abaixo do peso.`;
    } else if (calculo >= 18.5 && calculo <= 24.9) {
        return `Seu IMC é de ${calculo.toFixed(2)} peso normal.`;
    } else if (calculo >= 25 && calculo <= 29.9) {
        return `Seu IMC é de ${calculo.toFixed(2)} acima do peso.`;
    } else if (calculo >= 30 && calculo <= 34.9) {
        return `Seu IMC é de ${calculo.toFixed(2)} obesidade I.`;
    } else if (calculo >= 35 && calculo <= 39.9) {
        return `Seu IMC é de ${calculo.toFixed(2)} obesidade II.`;
    } else if (calculo > 40) {
        return `Seu IMC é de ${calculo.toFixed(2)} obesidade III(mórbida).`;
    };
};
console.log(imc(1.90, 150));

function fatorial(numero) {
    let fatorial = numero;
    let resultado = fatorial;
    for (let i = 1; i < fatorial; i++) {
        resultado *= i;
    };
    return resultado;
};
console.log(fatorial(5));

function dolarParaReal(dolar) {
    let converter = dolar * 4.8;
    return converter
};

console.log(dolarParaReal(10));

function perimetroArea(altura, largura) {
    let area = largura * altura;
    let perimetro = (altura + largura) * 2;
    return `A área é igual a ${area} e o perimetro é de ${perimetro}`
};
console.log(perimetroArea(10,20));

function perimetroAreaCircular(raio){
    let area = 3.14*(Math.pow(raio,2));
    let perimetro = (2*3.14)*raio;
    return `A área é igual a ${area} e o perimetro é de ${perimetro}`;
};

console.log(perimetroAreaCircular(3));

function tabuada(numero){
  let calculo = [];
    for (let i = 1; i <= 10; i++){
       calculo.push(numero*i)  
  }
  return calculo
}

console.log(tabuada(3));