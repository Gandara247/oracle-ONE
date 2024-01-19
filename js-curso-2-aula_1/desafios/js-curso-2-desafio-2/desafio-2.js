function saudacao() {
    console.log("Olá, mundo");
};
saudacao();

function ola(nome) {
    console.log(`Olá, ${nome}`);
};
ola("Gandara");

function dobro(numero) {
    let total = numero * 2;
    return total;
};
console.log(dobro(10));

function media(v1, v2, v3) {
    let total = (v1 + v2 + v3) / 3;
    return total;
};
console.log(media(2, 4, 6));

function comparacao(v1, v2) {
    let comparar = v1 > v2 ? v1 : v2;
    return comparar;
}
console.log(comparacao(10, 5));

function multiplicar(numero) {
    let total = numero * numero;
    return total;
};
console.log(multiplicar(10));

