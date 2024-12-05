function arrayDeZeroAN(n){
  if(n <= 0){
   return "Por favor insira um número superior a 0"
  }

function novoArray (numero, array =[]){
   if(numero<0){
       return array
   }
array.unshift(numero)
return novoArray(numero-1,array)
}
return novoArray(n)
}
console.log(arrayDeZeroAN(4))