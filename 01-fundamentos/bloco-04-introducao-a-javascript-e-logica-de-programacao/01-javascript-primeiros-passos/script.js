const a = 10;
const b = 5;
const c = 3;
const d = -4;

// Programa 1

console.log("Soma: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + a * b);
console.log("Divisão: " + a / b);
console.log("Módulo: " + (a % b));

// Programa 2

if (a > b) {
  console.log("A é maior que B");
} else {
  console.log("A é menor que B");
}

// Programa 3

if (a > b && a > c) {
  console.log("A é o maior número");
} else if (b > a && b > c) {
  console.log("B é o maior número");
} else {
  console.log("C é o maior número");
}

// Programa 4

if (d > 0) {
  console.log("Positive");
} else if (d < 0) {
  console.log("Negative");
} else {
  console.log("Número igual a 0");
}

// Programa 5

const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log("Valor inválido");
} else if (angulo1 + angulo2 + angulo3 === 180) {
  console.log("True");
} else if (
  (angulo1 + angulo2 + angulo3 < 180 && angulo1 + angulo2 + angulo3 > 0) ||
  angulo1 + angulo2 + angulo3 > 180
) {
  console.log("False");
}

// Programa 6

let pecaXadrez = "Rainha";

switch (pecaXadrez.toLowerCase()) {
  case "rei":
    console.log(
      "O Rei pode ser movimentado em qualquer direção do tabuleiro, mas apenas de casa em casa."
    );
    break;

  case "rainha":
    console.log(
      "A Rainha tem livre movimentação no jogo na horizontal, vertical e diagonais."
    );
    break;

  case "torre":
    console.log(
      "A Torre pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda)."
    );
    break;

  case "bispo":
    console.log(
      "O Bispo se movimenta sem restrição de número de casas, mas somente no sentido diagonal."
    );
    break;

  case "cavalo":
    console.log(
      "O Cavalo realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção."
    );
    break;

  case "peão":
    console.log(
      "O Peão pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. O ataque do peão sempre ocorre na diagonal."
    );
    break;

  default:
    console.log("[ERRO] Essa peça não existe no Xadrez");
    break;
}

// Programa 7

let grade = 99;

if (grade < 0 || grade > 100) {
  console.log('[ERRO] Nota incorreta');
} else if (grade >= 90) {
  console.log('A');
} else if (grade >= 80) {
  console.log('B');
} else if (grade >= 70) {
  console.log('C');
} else if (grade >= 60) {
  console.log('D');
} else if (grade >= 50) {
  console.log('E');
} else if (grade < 50) {
  console.log('F');
}

// Programa 8

const n1 = 1;
const n2 = 2;
const n3 = 3;

let isEven =  false;

if ((n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

// Programa 9

const n1 = 1;
const n2 = 2;
const n3 = 3;

let isOdd = false;

if ((n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0)) {
  isOdd = true;
}
console.log(isOdd);