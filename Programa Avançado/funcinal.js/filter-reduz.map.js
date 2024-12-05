// function somatorioDosElementos(array){
// const pares = array.filter((elemento) => elemento % 2 === 0)
// const quadrado = pares.map((elemento) => elemento * 2)
// const soma = quadrado.reduce((e,i)=> e + i)
// return soma
// }
function somatorioDosElementos(array){
  const pares = array.filter((elemento) => elemento % 2 === 0).map((elemento) => elemento * 2).reduce((e,i)=> e + i)
  return pares 
  }
const numeros = [1,2,3,4,5,6]
console.log(somatorioDosElementos(numeros))