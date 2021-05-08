const peso1 = 1.0          
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//Mesmo os valores sendo passados como float, o js entende como int.
console.log(Number.isInteger(peso2))//Caso fosse 1.1 ou 2.2, por exemplo, o isInteger retornaria false.

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//toFixed serve pra dizer quantas casas decimais depois da virgula voce quer.
                             //Igual um printf(%f.2)
console.log(media.toString())//TRANSFORMA o valor da const media em uma STRING.        
console.log(media.toString(2))//tranforma para string mas com o valor em BINÁRIO.
console.log(typeof media)
console.log(typeof Number)