
// DEFINIR A FUNÇÃO MMC

function maior (p1, p2) { 
    return p1 > p2 ? p1 : p2
}
function menor (p1, p2) { 
    return p1 < p2 ? p1 : p2
} 

function mmc(v1, v2) {
    var [maiorV, menorV] = (v1>v2 ? [v1,v2] : [v2,v1])
    var cont = 1
    console.log(maiorV)
    do { 
        res = maiorV * cont
        cont++
        console.log(cont)
    } while (res % menorV != 0)
    return res
}
console.log(mmc(6,8))

// Casos de Teste (Test Case)
console.log(mmc(7, 4)) // 28
console.log(mmc(4, 12)) // 12
console.log(mmc(42, 87)) // 1218
// https://www.wolframalpha.com/input?i=Least+common+multiple+42%2C+87
