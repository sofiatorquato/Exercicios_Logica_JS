let n = parseInt(prompt("Informe um número inteiro : "));
let resultado = "";

for (let i = 1; i <= 10; i++) {
  resultado += n + " X " + i + " = " + n * i + "\n";
}

alert(resultado);
