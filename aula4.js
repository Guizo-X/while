var entrada = require("readline-sync");


while(palavra != "N"){
    var palavra = entrada.question(`digite a palavra`).toUpperCase();
    if(palavra == "S"){
        console.log("você decidiu continuar");
    }
    else if(palavra == "N"){
        console.log("você decidiu sair");
    }
    else{
        console.log("palavra invalida");
    }

}