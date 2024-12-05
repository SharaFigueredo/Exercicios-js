function arrayDeZeroAN(n){
  if(n <= 0){
   return "Por favor insira um número superior a 0"
  }

function novoArray (numero, array =[]){
   if(numero.length === 0 ){
       return array
   }
anumero.push(numero.pop())
return novoArray(numero,array)
}
return novoArray(n)
}
console.log(arrayDeZeroAN(4))