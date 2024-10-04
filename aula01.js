console.log("Testes em JAVASCRIPT")

console.log("Operações matemáticas entre numeros!")

var a = 1
var b = 2
var c = 3
var d = 4
var soma = a + b
var subtracao = b - c
var divisao = c / d
var multiplicacao = b * b

console.log("soma: " + soma)
console.log("subtracao: " + subtracao)
console.log("divisao: " + divisao)
console.log("multiplicacao: " + multiplicacao)

console.log("Concatenando textos!")

console.log("quokka")

// declaração e atribuição
// declaração
var x; // ponto-e-vírgula é opcional
console.log(x)
// atribuição
x = 1
console.log(x)

// tipagem dinâmica (tipagem estática (Java, C#, C, C++))
var res = 'aula'
console.log(res)
console.log(typeof(res))
res = 4.5
console.log(res)
console.log(typeof(res))
res = 1
if (res == 4.5) {
    console.log('res é quatro ponto cinco')
} else if (res == 1) {
    console.log('res é um')
} else {    
    console.log('res é ' + res)
}


switch(res) {
    case 1: {
        console.log('res é um')
        break;
    }
    case 2: {
        console.log('res é dois')
        break;
    }
    case 3: {
        // fallback 
    }
    case 4: {
        console.log('res é maior')
    }
    default: {
        console.log('res é' + res)
    }
}

for (var cont = 0; cont < 5; cont++) {
    console.log(cont)
}

console.log(cont)

for (; cont < 10;) {
    console.log(cont++)
}

console.log(cont)

while (cont < 20) {
    console.log(cont++)
}

var e = 5
// pré-incremento, pós-incremento
console.log(e++)
console.log(e)

// array (vetor)
          //    0         1           2           3
var nomes = ['Julia', 'Adriana', 'Guilherme', 'Kethelem']
console.log(nomes)
console.log(nomes[1])
console.log(nomes[0])
console.log(nomes.length)
console.log(nomes[nomes.length - 1])
// for tradicional (índice)
for (var i = 0; i < nomes.length; i++) {
    console.log(i + ' Nome ' + nomes[i])
}
// for of, for each (para cada (elemento na coleção))
for (var nome of nomes) {
    console.log('Nome ' + nome)
}

// for (String nome : nomes) <- Java
// null, void
// null, undefined, NaN
// javascript: fracamente tipada (conversão implícita)
var u = 4
var p = '9'
console.log(u - p) // Not a Number (Não é um número)
// IndexOutOfBoundException (índice fora dos límites)
console.log(nomes[99])