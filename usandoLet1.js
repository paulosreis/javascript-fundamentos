// o let diferente do var possui o escopo 
// apenas dentro do bloco em que está 

let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora =', numero)
