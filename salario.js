let leia = require("readline-sync");

let salario = leia.questionFloat("Digite o valor do salario em reais: ");
let abono = leia.questionFloat("Digite o abono salarial em reais: ");
let soma, valorEmReal;

soma = salario + abono 

valorEmReal = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

console.log("O seu novo salario e: ", valorEmReal);