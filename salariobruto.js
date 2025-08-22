const leia = require("readline-sync");

let salarioBruto = leia.questionFloat("Digite o salario bruto: ");
let adicionalNoturno = leia.questionFloat("Digite o adicional noturno: ");
let horasExtras = leia.questionInt("Digite o valor das horas extras: ");
let descontos = leia.questionFloat("Digite o valor dos descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("O salario liquido e: ", salarioLiquido);