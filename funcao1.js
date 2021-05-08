//função sem retorno 
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // o js permite isso e retorna um NaN
imprimirSoma(2, 10, 3, 5 , 8 , 9) // o js também permite isso e apenas ignora o resto dos numeros
imprimirSoma() // retorna um NaN

//função com retorno
function soma(a, b = 1){ //atribuindo um valor padrão para b caso nao seja informado o valor de b na chamada da função o valor 1 é usado.
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma) // NaN


