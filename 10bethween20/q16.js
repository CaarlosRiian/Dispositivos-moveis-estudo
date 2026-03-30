/* 
Numeros Primos
Escreva um programa que verifique se um numero e primo. Depois, liste todos os numeros primos de 2 ate N.

// Exemplo para N = 20:
Primos ate 20: 2, 3, 5, 7, 11, 13, 17, 19
for
condicional */


let N = 20;
let resultado = [];

for (let num = 2; num <= N; num++) {
  let ehPrimo = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) {
    resultado.push(num);
  }
}

console.log(`Primos até ${N}: ${resultado.join(", ")}`);
