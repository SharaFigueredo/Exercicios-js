//implementa uma função inverteArray que recebe um array e retorna em novo array com elementos pela ordem inversa

function inverteArray(array){
  if(arra,length === 0){
    return []
  }
  return inverteArray(array.slice(1)).concat([array[0]])

// console.log(
//   inverteArray([1,2,3])
//   inverteArray([2,3])       .concat(1)
//   inverteArray([3])         .concat(2).concat(1)
//   inverteArray([]).concat(3).concat(2).concat(1)
//   [].concat(1).concat(2).concat(3)
// )

}
console.log(inverteArray([1,2,3]))