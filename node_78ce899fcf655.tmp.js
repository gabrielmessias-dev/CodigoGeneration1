let leia = require("readline-sync");

let salario = leia.questionFloat("Digite o valor do salario em reais: ");
let abono = leia.questionFloat("Digite o abono salarial em reais: ");
let soma;

soma = salario + abono 

console.log("O seu novo salario e: ", soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));