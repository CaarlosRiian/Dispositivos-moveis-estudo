/* Calculadora de Desconto
Dado um valor de compra, aplique desconto conforme a faixa: ate R$100 = sem desconto; de R$100.01 a R$300 = 10%; acima de R$300 = 20%. Exiba o valor original, o desconto e o valor final.

// Exemplo:
Valor: 250
Saida: "Original: R$250.00 | Desconto: 10% (R$25.00) | Final: R$225.00"
if/else
formatacao */

let valor = 350.0;

if (valor <= 100){
    console.log(`Original: R$${valor.toLocaleString('pt-BR')} | Desconto: Sem Desconto | Final: R$${valor.toLocaleString('pt-BR')}`);

    } else if (valor > 100.01 && valor < 300) {
        let desconto = valor * (10 / 100);
        console.log(`Original: R$${valor.toLocaleString('pt-BR')} | Desconto: 10% (R$${desconto}) | Final: R$${valor.toLocaleString('pt-BR') - desconto}`);

    } else if (valor > 300) {
        let desconto = valor * (20 / 100);
        console.log(`Original: R$${valor.toLocaleString('pt-BR')} | Desconto: 20% (R$${desconto}) | Final: R$${valor.toLocaleString('pt-BR') - desconto}`);

        } else {
            console.log(`Erro.`);
        }
