/* 
Piramide de Asteriscos
Dado um numero N, desenhe uma piramide centralizada de asteriscos com N linhas.

// Exemplo para N = 4:
   *
  ***
 *****
*******
for aninhado
string */

let N = 4;

for (let i = 1; i <= N; i++) {
  let linha = "";

  for (let j = 1; j <= N - i; j++) {
    linha += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    linha += "*";
  }

  console.log(linha);
}