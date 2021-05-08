const escola = "Cod3r"

console.log(escola.charAt(4))//Retorna o índice 4 da string.
console.log(escola.charAt(5))//Se passar um indice que não existe não da erro, só retorna vazio.
console.log(escola.charCodeAt(3))//Retorna o código na tabela unicode do índice selecionado.
console.log(escola.indexOf(3))//Retorna o índice do caractere se ele estiver presente na string.

console.log(escola.substring(1))//Imprime a string a partir do índice 1.
console.log(escola.substring(0, 3))//Imprime 3 caracteres a partir do 0.

//Concatena as strings a partir do literal 'Escola'.
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!') // o + substitui o .concat.

console.log(escola.replace(3, 'e'))//Substitui o conteúdo do índice selecionado por um literal 'e'.

//Substitui todos os digitos pela letra 'e'.
console.log(escola.replace(/\d/, 'e'))

//Substitui todas as letras por 'e'(g é a tag global, para substituir todas).
console.log(escola.replace(/\w/g, 'e'))

//Transforma uma string separada por algum objeti especificado (',') em um array.
console.log('Ana,Maria,Pedro'.split(','))
