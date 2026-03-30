/* 
Fatorial
Calcule o fatorial de um numero N usando um laco. Lembre: 0! = 1, 5! = 5 x 4 x 3 x 2 x 1 = 120.

// Exemplo:
Entrada: 5
Saida: "5! = 120"
while */

let numero = 5;
let multi = 0

while(numero <= 0){
    numero--;
    multi *= numero;
    console.log(`${numero}! = ${multi}`);
}