var entrada = require("readline-sync")

for(var i = 0; i<11 ; i++){
    var temp = parseInt(entrada.question("digite o numero:"))
   if(temp % 2 == 0){
    console.log(`o numero ${temp} é par`)
   }
   else{
    console.log(`o numero ${temp} é impar`)
   }
}


