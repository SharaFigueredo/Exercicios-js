const arrayl =["a", "def","tre"]
//  fora da função
// const comprimento = array.map((e,i) => e.length )

// console.log(comprimento)

function comprimento1(array){
  return array.map((e,i)=> e.length)
}
console.log(comprimento1(arrayl))
// map percorre um array : e é o elemnto e o i é o index
