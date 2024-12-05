

// sort() para ordenar o array
// (a, b) => a - b é a função de comparação que garante a ordenação numérica crescente
// Math.max() é uma função em JavaScript que retorna o maior valor entre os números fornecidos como argumentos.
function valorMaisAltoDoArray(array){
  array.sort((a,b) => a-b)
  return Math.max(...array)
}
let numero = [1,7,5,8,9,10,2]
valorMaisAltoDoArray(numero)