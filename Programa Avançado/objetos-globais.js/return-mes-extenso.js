function mesPorExtenso(data){
  const mes = [`janeiro`, `fevereiro`,`março`,`abril`, `maio`,`junho`,`julho`,`agosto`, `setembro`, `outubro`,`novembro`, `dezembro`]
const mesPorE= mes[data.getMonth()]
return mesPorE 

} 
const data1 = new Date()
console.log(mesPorExtenso(data1))