/* Dada a string "42.7", converta para numero e some com 8. Depois, dada a string "10abc", tente converter com parseInt() e com Number(). Exiba os resultados e o typeof de cada um. Exemplo de saida:
"42.7" + 8 = 50.7 (tipo: number)
parseInt("10abc") = 10 (tipo: number)
Number("10abc") = NaN (tipo: number)
*/

const strNum1 = "42.7";
const strNum2 = "10abc";

const TypeNumber1 = parseFloat(strNum1) + 8;

const TypeNumber2 = parseFloat(strNum2);

const TypeNumber3 = Number(strNum2);

console.log("42.7 + 8 = ", TypeNumber1);
console.log("\n|=-=-=-=-=-=-=-=-=-=-=-=-=-=|\n");
console.log(`parseINT('10ac) = ${TypeNumber2} (tipo: number)`);
console.log(`Number('10abc') = ${TypeNumber3} (tipo: number)`)