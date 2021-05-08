const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

//TEMPLATE STRING
//Todos os espaços quebras de linha, etc, são considerados.
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

//EXPRESSÕES...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
