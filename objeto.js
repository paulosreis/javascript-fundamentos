//objeto é uma coleção, ou grupo de pares chave e valor.
//é possivel atribuir objetos dentro de objetos

const prod1 = {} //é possivel criar um objeto vazio e add atributos depois
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
//evitar atributos com espaço no nome
prod1['Desconto Legal'] = 0.40 //outra forma de add atributos 

console.log(prod1)

//outra forma de declarar objetos 
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)