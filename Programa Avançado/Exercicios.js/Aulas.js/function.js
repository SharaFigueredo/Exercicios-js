
// arrow function
const square = (n)=>{
  return n*n
}
// os dois exemplos são a mesma coisa basicamente 
function square(n){
  return n*n
}

// funcao dentro de funcao
function factorial(n){
  if(n===1){
    return n
  }
  returnn * factorial(n-1)
}
//aplica
aplica(5,(n)=> n*n)//5
aplica(5,(n) => n * -1)//-5
aplique(10, (n) => n % 2===0 ? "par" : "impar")//impar


