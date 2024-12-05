
// sort() para ordenar o array
// (a, b) => a - b é a função de comparação que garante a ordenação numérica crescente
// Math.min() é uma função em JavaScript que retorna o menor valor entre os números fornecidos como argumentos.


function valorMaisBaixoDoArray(array){
  array.sort((a, b) => a-b)  
  return Math.min(...array)
}
let numeros = [5, 3 ,6, 7, 1, 8]
console.log(valorMaisBaixoDoArray(numeros))