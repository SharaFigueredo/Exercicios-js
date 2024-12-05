function elementosPares(array){
  return array.some((e) => e % 2 ===0 )? true : false
 }
 const numeros = [ 1,2,3,4,5,6,7,8]
 console.log(elementosPares(numeros))