function contaParesEntreDoisValores(valor1, valor2){
  if(valor1===valor2){
      return "Por favor introduza dois valores diferente."
  }
   let cont = 0
   for(i = valor1; i <= valor2 ; i++){
    if(i % 2 ===0 ){
   cont++
    }
   }
   return cont
  }
  console.log(contaParesEntreDoisValores(2,2))