// Aula 02 - Funções

//- O que é?
//- Como se declara?
//- Como se chama?
//- Como realizar o tratamento dos valores?

// entrada -> algoritmo (lógica) -> saída

// "Contrato" da função, dada certa entrada entregamos certa saída
// CTRL + ; ou CTRL + / faz comentários

console.log("ok")

var num1 = -8
var num2 

if (num1 < 0){
    num2 = num1 * -1
} else { 
    num2 = num2
}

// na engenharia de software CTRL V + CTRL C its not good

console.log(num2)

numero = -76

if (num1 < 0){
    num2 = num1 * -1
} else { 
    num2 = num2
}

console.log(num2)

// como modular um algoritmo, tornando reusavel
// ENTRADA = ENTRADA
// SAIDA = saída

// nomeFunção | ( entrada) | Lógica
function ficaPositivo(numero){
    var saida 
    if (numero < 0){
        saida = numero * -1
    } else { 
        saida = saida
    }
    return saida
}

var numero = -8
var saida = ficaPositivo(numero)

console.log(numero)
console.log(saida)

// executa - chama a função ja criada pelo dev
console.log(ficaPositivo(-12323))
console.log(ficaPositivo(12323))

// function ficaPositivo(numero){
//     console.log("numero", typeof(numero))
    
    
//     var saida 
//     if (numero < 0){
//         saida = numero * -1
//     } else { 
//         saida = saida
//     }
//     return saida
// }

// POTENCIA

var base = 2
var expoente = 0

// uma forma
var resposta = Math.pow(base, expoente)
console.log(resposta)

// outra forma
var resposta = 1
for (var i = 0; i < expoente; i++){
    resposta= resposta * base
}

console.log(resposta)

// TUDO QUE É REPETIVEL É MODULARIZÁVEL
var base = 2
var expoente = 4
var resposta = potencia(base,expoente)
console.log(resposta)


function potencia(base,expoente){ //ORDEM IMPORTA
   if (expoente % 1 == 0){ // nesting = ALINHAMENTO
    var resposta = 1
    for (var i = 0; i < expoente; i++){
    resposta= resposta * base
    } 
    return resposta
    }
}
//    } else {  
//     return null // explícito
//    }

// erros de conversão

console.log(1 * "kkkk");  // NaN = NOT A NUMBER


