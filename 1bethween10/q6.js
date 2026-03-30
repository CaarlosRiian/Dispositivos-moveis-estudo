/* 
Classificacao do IMC
Aproveite o calculo do IMC (questao 2) e agora classifique o resultado: Abaixo do peso (< 18.5), Normal (18.5–24.9), Sobrepeso (25–29.9) ou Obesidade (>= 30).

// Exemplo:
IMC: 23.15
Saida: "IMC 23.15 - Classificacao: Normal" */

const peso = 77;
const altura = 1.80;

const imc = peso / (altura * altura);

if (imc < 18.5){
    console.log(`Seu IMC é: ${imc.toFixed(2)}\n|=-=-=- Abaixo do peso -=-=-=|`);
    } else if (imc > 18.5 && imc < 24.9){
        console.log(`Seu IMC é: ${imc.toFixed(2)}\n|=-=-=- Normal -=-=-=|`);
    } else if (imc > 25 && imc < 29.9){
        console.log(`Seu IMC é: ${imc.toFixed(2)}\n|=-=-=- Sobrepeso -=-=-=|`);
    } else if (imc >= 30){
        console.log(`Seu IMC é: ${imc.toFixed(2)}\n|=-=-=- Obesidade -=-=-=|`);
    } else {
        console.log(`Erro.`);
    }
