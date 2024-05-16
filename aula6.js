var entrada = require("readline-sync");
var num = 1

while(temp == num){
    var temp = parseInt(entrada.question(`digite o numero até acertar`))

    if(temp != num){
        console.log(`você errou`)
    }
    else if(temp == num){
        console.log(`você acertou`)
    }
    else{
        console.log(`digite novamente`)
    }
}