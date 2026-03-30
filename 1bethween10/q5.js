/*
Calculadora de String
Receba uma string no formato "operando1 operador operando2" (ex: "12 + 8"). Separe os valores usando split(), converta os operandos para numero e calcule o resultado. Suporte: +, -, * e /.

// Exemplo:
Entrada: "12 + 8"
Saida: "12 + 8 = 20"

Entrada: "15 / 4"
Saida: "15 / 4 = 3.75" */

let operando1 = "15";
let operando2 = "4";
let operador = "/";

if (operador == "+"){
    let result = parseFloat(operando1) + parseFloat(operando2);
    console.log(`Resultado: ${operando1} ${operador} ${operando2} = ${result}`);
} else if (operador == "-") {
    let result = parseFloat(operando1) - parseFloat(operando2);
    console.log(`Resultado: ${operando1} ${operador} ${operando2} = ${result}`);
} else if (operador == "*"){
    let result = parseFloat(operando1) * parseFloat(operando2);
    console.log(`Resultado: ${operando1} ${operador} ${operando2} = ${result}`);
} else if (operador == "/"){
    let result = parseFloat(operando1) / parseFloat(operando2);
    console.log(`Resultado: ${operando1} ${operador} ${operando2} = ${result}`);
} else {
    console.log("Operador ou Operandos Incorretos!");
}

