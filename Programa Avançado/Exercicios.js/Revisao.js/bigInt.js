function doisNumeros(a,b){
return a**b
}
console.log(doisNumeros(5,6))
console.log(doisNumeros(1000,1234))
console.log(doisNumeros(1,100000000))

function elevadoABigInt(a,b){
  return BigInt(a) ** BigInt(b)
}
console.log(elevadoABigInt(3,2))

//não é possível misturar BigInts e numbers

function calculaFaixaEtaria(idade){

  if(idade >=65){
   return"Senior"
  }
  else if(idade<=11){
   return "Criança"
  } 
  else if(idade>=12 && idade<=17){
   return "Adolescente"
  }
  else{
   return "Adulto"
  }

}
console.log(calculaFaixaEtaria(1))