// o Arranjos em JS podem ser heterogenios e altamente flexiveis

const valores = [7.7, 8.9, 6.3, 9.2]//declaração do array
console.log(valores[0], valores[3])//imprimindo os valores selecionados 
console.log(valores[4])

valores[4] = 10 // adcionado valor na sequencia, (é possivel add elementos fora da sequencia, por exemplo na 10 posição)
console.log(valores)
console.log(valores.length)// length é uma função conta a quantidade de elementos 

valores.push({id: 3}, false, null, 'teste')// push é uma função insere elementos no array
console.log(valores)

console.log(valores.pop())// pop é uma função que ejeta o ultimo valor do array.
delete valores[0]// deleta o elemento da posição selecionada.
console.log(valores)

console.log(typeof valores)// em js o array é um objeto