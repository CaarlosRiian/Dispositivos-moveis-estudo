/* Nota para Conceito
Converta uma nota numerica (0–100) para conceito: A (90–100), B (80–89), C (70–79), D (60–69), F (abaixo de 60). Se a nota for invalida (fora de 0–100), exiba erro.

// Exemplo:
Nota: 85
Saida: "Nota 85 = Conceito B" */

let nota = 59;

if (nota < 0 && nota > 100) {
    console.log("ERRO insira uma nota válida entre 0 - 100");
} else if (nota < 60) {
    console.log(`Nota ${nota} = Conceito F`);
} else if (nota >= 60 && nota <= 69) {
    console.log(`Nota ${nota} = Conceito D`);
} else if (nota >= 70 && nota <= 79) {
    console.log(`Nota ${nota} = Conceito C`);
} else if (nota >= 80 && nota <= 89) {
    console.log(`Nota ${nota} = Conceito B`);
} else if (nota >= 90 && nota <= 100) {
    console.log(`Nota ${nota} = Conceito A`);
} else {
    console.log("ERRO");
}