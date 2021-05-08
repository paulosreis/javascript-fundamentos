let valor // variavel nao inicializada
console.log(valor)

valor = null // ausencia de valor 
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // EVITE ATRIBUIR UNDEFINED 
console.log(!!produto.preco)
// delete produto.preco //Undefined ou null nao vai deletar o atributo, para remover use delete
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)