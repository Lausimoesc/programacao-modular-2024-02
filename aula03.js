// começou explicando funções, tópico que aprendemos na ultima aula ONLINE
// novo exemplo de function


//ALGORITMO NO "PELO"
var numero1 = 5
var numero2 = 9
var maior

if (numero1 > numero2){
    console.log("NUMERO 1 É MAIOR QUE O 2")
    maior = numero1
} else {
    console.log("NUMERO 2 É MAIOR QUE O 1")
    maior = numero2
}

    console.log(maior)


    //FUNÇÃO 

var num1 = 77
var num2 = 248

function maiorNumero(num1,num2){
    var resultado
    if(num1 > num2){
    resultado = num1
    } else {
    resultado = num2    
    } 
    return resultado    //NAO ESQUECE DE USAR O RETURN BOBA
}

    console.log(maiorNumero(num1,num2))


    // mesma função sem criar o RESULTADO

    function maiorNumero(num1,num2){
        if(num1 > num2){
        return num1
        } else {
        return num2   
        } 
    }
    
        console.log(maiorNumero(num1,num2))

        // IFs e ELSEs e SWITCHs podem se tornar um TERNÁRIO
        function maiorNumero(num1,num2){
            var resultado = num1 > num2 ?  num1 : num2 //  var [variavel] = (condição)
            return resultado
        }
          
        //chamando funções
        console.log(maiorNumero(23,12))

        // mesmo algoritmo com 3 variáveis | pegando o maior entre os dois e comparando com a 3 variável
        // ENCADEAMENTO = retorno de uma função em outra nova
        
        num1 = 77
        num2 = 248
        num3 = 5435
        console.log(maiorNumero(maiorNumero(num1,num2),num3))

        // elaborando mais um pouco
        // caso limite quando não se da valor para as variáveis 
        // ou coloca string ao invés de numeros 
        // resposta = undefined  (na maioria das vezes)
        // coisas a se fazer, obrigar que a entrada seja um numero 
        // para que este erro não ocorra
        // ou usar polimorfismo = aceitar variadas formas de entrada
        // na aula ele deu exemplo de CPF, deixar apenas digitar 
        // numeros ou pontos tambem

        // e se comparar duas datas?
        console.log(maiorNumero(new Date(2024,9,14), new Date(2024,9,20)))

        //entendendo que podemos trabalhar com entradas variadas

        console.log(typeof())
        function maiorNumero(entrada1,entrada2){
            if(typeof(entrada1) == "number" && typeof(entrada2) == "number"){
            return entrada1 > entrada2 ?  entrada1 : entrada2 //  var [variavel] = (condição)
            }
            if (typeof(entrada1) == "string" && typeof(entrada2) == "string"){
            return entrada1.length > entrada2.lenght ? entrada1 : entrada2           
         } 
        }

    