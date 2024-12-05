function calculaModa(array){
  const frequencia = new Map()
array.forEach(numero => {
frequencia.set(numero, (frequencia.get(numero)||0)+1)
})

let numeroMaisFrequente = array[0]
let maiorFrequencia = 0

frequencia.forEach((frequencia,numero)=>{
   if(frequencia>maiorFrequencia){
       maiorFrequencia=frequencia
       numeroMaisFrequente=numero
   }
})
return{
   numero:numeroMaisFrequente,
   frequencia:maiorFrequencia
}
}
console.log(calculaModa([4,4,1,2,3]))