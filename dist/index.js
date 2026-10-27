"use strict";
function multiplica(a, b) {
    return a * b;
}
function saudacao(nome) {
    return 'Olá ' + nome;
}
console.log(multiplica(6, 7)); // 42
console.log(saudacao('Adryan')); // Olá Adryan
// A tipagem impede chamadas erradas, por exemplo:
// multiplica('6', 7); -> erro: o argumento '6' não é do tipo number
// saudacao(10);       -> erro: o argumento 10 não é do tipo string
