/* 
Triangulo Valido
Receba tres valores (lados de um triangulo). Verifique se formam um triangulo valido (cada lado deve ser menor que a soma dos outros dois). Se valido, classifique como equilatero, isosceles ou escaleno.

// Exemplo:
Lados: 3, 4, 5
Saida: "Triangulo valido - Escaleno"

Lados: 1, 2, 10
Saida: "Nao forma um triangulo"
if/else */

let lado1 = 3;
let lado2 = 4;
let lado3 = 5;

let soma1 = lado2 + lado3; // lado 1
let soma2 = lado3 + lado1; // lado 2
let soma3 = lado1 + lado2; // lado 3

if (lado1 < soma1 && lado2 < soma2 && lado3 < soma3){
    console.log(`Lados: ${lado1}, ${lado2}, ${lado3}\nTriangulo valido - Escanleno`);
    } else {
        console.log("Não forma uma triangulo!");
    }