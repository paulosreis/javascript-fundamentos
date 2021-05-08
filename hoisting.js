// hoisting = efeito de içamento
// mesmo declarando a var depois 
// o codigo nao gera erro, é como
// se ele lesse primeiro o var
// NAO FUNCIONA COM LET 

console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('b =', b)
let b = 2
console.log('b =', b)