/* Par ou Impar
Escreva um programa que verifique se um numero e par ou impar. Use o operador modulo (%). Alem disso, informe se o numero e positivo, negativo ou zero.

// Exemplo:
Entrada: -7
Saida: "-7 e impar e negativo" */

let valor = -11;

if (valor % 2 == 0){
    if (valor < 0){
        console.log(`${valor} é par e negativo`);
    } else if (valor == 0){
        console.log(`${valor} é par e 0`);
    } else if (valor > 0) {
        console.log(`${valor} é par e positivo`);
    }
} else {
    if (valor < 0){
        console.log(`${valor} é impar e negativo`);
    } else if (valor == 0){
        console.log(`${valor} é impar e 0`);
    } else if (valor > 0) {
        console.log(`${valor} é impar e positivo`);
    }
}