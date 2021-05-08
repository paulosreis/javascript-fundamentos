// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero : 1000
    }
}

const { nome, idade } = pessoa 
console.log(nome, idade)
// O operador destructuring usa {} para   
// trabalhar com objetos e [] para arrays.

const { nome: n, idade: i } = pessoa 
console.log(n, i)
// nome: n tira a informação do objeto e 
// armazena numa const n.

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
 
/* // se for tentar acessar um dado de uma coisa que 
      não existe nao vai rodar, so se o ultimo elemento
      for null ou undefined, mas nao se ele tiver filhos
const { conta: { ag, num } } = pessoa
console.log(ag, num)
*/