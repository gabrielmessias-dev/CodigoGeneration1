const leia = require("readline-sync");

let numero1 =  leia.questionInt("Digite o primeiro numero: ");
let numero2 =  leia.questionInt("Digite o segundo numero: ");
let numero3 =  leia.questionInt("Digite o terceiro numero: ");
let numero4 =  leia.questionInt("Digite o quarto numero: ");

let diferenca = (numero1 * numero2) - (numero3 * numero4);

console.log("A diferenca entre os produtos e: ", diferenca);