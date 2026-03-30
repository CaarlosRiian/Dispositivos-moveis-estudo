/* Somatorio
Calcule a soma de todos os numeros de 1 ate N (onde N e definido em uma variavel). Exiba tambem a quantidade de numeros pares e impares nesse intervalo.

// Exemplo para N = 10:
Soma de 1 a 10: 55
Pares: 5 | Impares: 5
for */

let n = 10; 

let soma = 0;
let pares = 0;
let impares = 0;

for(let i = 1; i <= n; i++){
    soma += i;
    if(i % 2 === 0){
        pares++;
    } else {
        impares++;
    }
}

console.log(`Soma de 1 a ${n}: ${soma}`);
console.log(`Pares: ${pares} | Impares: ${impares}`);