// JavaScript permite colocar funções dentro de variaveis

// Armazenando uma função em uma variável 
const imprimirSoma = function (a, b) { // função anonima (sem nome)
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função Arrow em uma variável
const soma = (a, b) => { // a setinha serve pra subsituir a palavra function,
    return a + b         // é uma forma reduzida de fazer o exemplo de cima
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b // ausencia das chaves {}, usado quando uma 
                                  // função tem um unica linha, retorna a - b.
                                  // "(a - b)" sao os parametros e "a - b" o retorno
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('legal!!!!')