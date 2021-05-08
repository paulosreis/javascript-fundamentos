let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //Melhor forma de saber se um valor é falso ou true. Dupla negação.

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)//qualquer número inteiro com excessão do 0 é true.
console.log(!!' ')//qualquer espaço vazio ou texto.
console.log(!![])//qualquer array.
console.log(!!{})//qualquer objeto.
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')//string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
//Se houver pelo menos um valor verdade ele vai retornar verdadeiro (OU ||)
console.log(!!('' || null || 0 || ' ')) 
//Se retirar a dupla negação ele retorna só o valor verdadeiro.
console.log(('' || null || 0 || 'epa'))

let nome = ''
console.log(nome || 'Desconhecido')//Vai imprimir desconhecido pois nome retorna false.