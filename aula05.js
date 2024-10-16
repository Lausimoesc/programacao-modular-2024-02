// TIPOS | TIPAGEM

// javascript é uma linguagem dinâmica e FRACAMENTE tipada
// cenversão implicita entre tipos INCOMPATIVEIS

//  se somar String com numero | o numero se converte em string e a soma ocorre
// se subtrair Sting com numero | a string se converte pra numero


var x ="8"  //string
var y = 5   //number

console.log(x + y) //85
console.log(x - y) //3

// TIPOS    (primitivos || objetos)

// PRIMITIVOS = escalares,comparáveis
// OBJETOS = complexos,objetos

// Primitivos no JS: String, number, boolean, null, undefined, symbol
// Objetos no JS: Array, data, documento, html(ATRIBUTOS:div,p,b)

// EX DIFERENÇA OBJETO
var x = 4
var y = 5
console.log(typeof(x))
var z = new Number(8)

//somando ocorre conversão implicita
console.log(x + y)
console.log(x + z)

// o tipo segue diferente
console.log(typeof(x))
console.log(typeof(z))

// primitivos são COPIADOS, ocupam DOIS espaços na memória
// objetos são UNICOS e manipulados por diversas variaveis, ocupam UM espaço na memória

// COMPARAÇÕES
var l = new Number(8)
var a = new Number(8)
var u = 8
console.log(l == a) // false quando objeto comparado com numero
console.log(u == l) // true quando numero comparado com objeto

// DIVISÃO DA MEMÓRIA E SUAS ALOCAÇÕES:
// STACK || HEAP  

// stack ORDENADO    -  primitivos: variáveis, funções
// heap  DESORDENADO -  objetos: valores

//  espaços de memória
// ex: a variavel l está no STACK e guarda um ENDEREÇO
// na memoria que fica no HEAP, no qual guarda o valor de l "2";

// quando comparados l == a DA FALSE
// pois l guarda um endereço na memoria e a guarda outro
// mesmo os valores sendo os mesmos, AS CHAVES CONTINUAM DIFERENTES

// PARA DAR true TEM QUE DESEMBRULHAR
// Number(objeto)
console.log(Number(l) == Number(a)) // true, pois comparou o valor ao inves das "chaves"

//tipo referenciado

var array1 = [10,20,30]
var array2 = array1
console.log(typeof(array1)) //object

console.log(array1)
console.log(array2)

array1[2] = 60
console.log(array1)
console.log(array2)

array2[1] = 200
console.log(array1)

// isto ocorre pq arrays são do tipo OBJETO:
// são unicos e tem o MESMO endereço na memória,
// logo mexe em um mexe no outro


// exemplo multipicação em array | function
//ESSA FUNÇÃO NAO PRECISA DE RETURN
//pois altera o array de entrada

function dobro(array){
    for(var i = 0; i < array.length; i++){
        array[i] = array[i] * 2
    }
    return array
}

var numeros = [2,4,6]
console.log(numeros)
dobro(numeros) //array alterado in-place
console.log(numeros)

//intervalo

//arrays e array

nomes = ["Lauana","Marina","Ricardo"]
console.log(nomes)

nomes.push("André") //ADICIONA UM VALOR NO VETOR
console.log(nomes)
console.log(nomes.length)

console.log(nomes)
nomes.pop() // ELIMINA VALOR NA ULTIMA POSIÇÃO
console.log(nomes)

nomes.unshift("Lau") // ADICIONA NA PRIMEIRA POSIÇÃO
console.log(nomes)

nomes.shift() // ELIMINA NA PRIMEIRA POSIÇÃO
console.log(nomes)

nomes[6] = "Nat" // ADICIONA UNDEFINED
console.log(nomes)

nomes.splice(3,3) //CORTA EM DUAS POSIÇÕES | "na posição x, y vezes"
console.log(nomes)

nomes.slice(1,3)
console.log(nomes)