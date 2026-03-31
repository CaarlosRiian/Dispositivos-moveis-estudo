/* Jogo de Adivinhacao
Gere um numero aleatorio entre 1 e 50 (Math.random()). Simule tentativas de adivinhacao usando um array de palpites. Para cada palpite, diga se o numero secreto e "maior", "menor" ou se "acertou". Conte quantas tentativas foram necessarias.

// Exemplo:
Numero secreto: 23
Palpites: [10, 30, 20, 25, 23]
"10 - O numero e maior!"
"30 - O numero e menor!"
"20 - O numero e maior!"
"25 - O numero e menor!"
"23 - Acertou em 5 tentativas!" */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const min = 1;
const max = 50;
const numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
const palpites = [];
let tentativas = 0;

function fazerPalpite() {
    rl.question('Informe um número: ', (entrada) => {
        const palpite = parseInt(entrada);
        tentativas++;
        palpites.push(palpite);

        if (palpite < numeroSecreto) {
            console.log(`${palpite} - O número é maior!`);
            fazerPalpite();
        } else if (palpite > numeroSecreto) {
            console.log(`${palpite} - O número é menor!`);
            fazerPalpite();
        } else {
            console.log(`${palpite} - Acertou em ${tentativas} tentativas!`);
            rl.close();
        }
    });
}

fazerPalpite();   
