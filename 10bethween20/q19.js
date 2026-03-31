/*
Funcao de Conversao de Moeda
Crie uma funcao converterMoeda(valor, taxaCambio) que receba um valor em reais e uma taxa de cambio, e retorne o valor convertido. Teste com dolar (5.20) e euro (5.60).

// Exemplo:
converterMoeda(100, 5.20) → "R$100.00 = $19.23"
converterMoeda(100, 5.60) → "R$100.00 = €17.86"
funcao */

function converterMoeda(valor, taxaCambio){
    let conversao = valor * taxaCambio;
    if(taxaCambio === 5.20){
        console.log(`\nR$${valor} = $${conversao}`);
    } else if (taxaCambio == 6.04){
        console.log(`\nR$${valor} = €${conversao}`);
    } else {
        console.log("Só tem conversão para $ (Dolar) € (Euro)");
    }
}

converterMoeda(10, 6.04);
converterMoeda(100, 6.04);

console.log("\n|=--=--=--=--=--=--=|")
converterMoeda(10, 5.20);
converterMoeda(100, 5.20);

console.log("\n|=--=--=--=--=--=--=|")
converterMoeda(100, 3.20);
