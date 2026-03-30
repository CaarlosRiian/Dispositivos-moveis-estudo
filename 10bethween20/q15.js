/* Fibonacci
Exiba os primeiros N termos da sequencia de Fibonacci (0, 1, 1, 2, 3, 5, 8, 13, ...).

// Exemplo para N = 8:
0, 1, 1, 2, 3, 5, 8, 13
laco de repeticao */

let n = 8;

let a = 0;
let b = 1;
let proximo;

let valores = [];

for(let i = 0; i < n; i++){
    proximo = a + b;
    a = b;
    b = proximo;

    valores.push(a);
}

console.log(valores);