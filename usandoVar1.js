// Quando vc cria uma variavel do tipo var ela só pode ter 
// dois tipos de escopo, global ou dentro de uma função
// se ela for global pode ser sobrescrita em qualquer
// parte do codigo e usso pode gerar problemas

{
    {
        {
            {
                var sera = 'sera ???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local) // ReferenceError