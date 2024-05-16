var entrada = require("readline-sync");

var acumulador = 0

for(var i = 0; i<10 ; i++){
    var temp = parseInt(entrada.question("digite a nota: "))
    acumulador = temp + acumulador
}

var media = acumulador/10
console.log(`sua media é ${media}`)