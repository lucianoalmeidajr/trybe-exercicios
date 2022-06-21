const a = 10;
const b = 5;
const c = 3;
const d = -4;

// Programa 1

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

// Programa 2

if (a > b) {
  console.log('A é maior que B');
}
else {
  console.log('A é menor que B');
}

// Programa 3

if (a > b && a > c) {
  console.log('A é o maior número');
}
else if (b > a && b > c) {
  console.log('B é o maior número');
}
else {
  console.log('C é o maior número');
}

// Programa 4

if (d > 0) {
  console.log('Positive');
}
else if (d < 0) {
console.log('Negative');
}
else {
  console.log('Número igual a 0');
}

// Programa 5

const angulo1 = 60;
const angulo2 = 60;
const angulo3 = -60;

if (angulo1 + angulo2 + angulo3 == 180) {
  console.log('True');
}
else if (angulo1 + angulo2 + angulo3 < 180 && angulo1 + angulo2 + angulo3 > 0 || angulo1 + angulo2 + angulo3 > 180) {
  console.log('False');
}
else if (angulo1 || angulo2 || angulo3 < 0) {
  console.log('Valor inválido');
}
else {
  console.log('.');
}