function diferencaEmDias(data1, data2) {
  return Math.floor( Math.abs(data1 - data2)/86400000)
 }
 const d1 = new Date(2022,3,4)
 const d2 = new Date(2022,3,28)
 console.log(diferencaEmDias(d1,d2))