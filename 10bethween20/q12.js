/* Tabuada
Escreva um programa que exiba a tabuada de multiplicacao de um numero (de 1 a 10).

// Exemplo para numero 7:
7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70 */

let valor = 7;

for (let i = 0; i < 11; i++){
    console.log(`${valor} x ${i} = ${valor * i}`);
}