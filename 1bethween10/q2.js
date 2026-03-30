/*Formula: IMC = peso / (altura * altura)

// Exemplo:
Peso: 75, Altura: 1.80
Saida: "Seu IMC e: 23.15" */ 

const peso = 77;
const altura = 1.67;

const imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);