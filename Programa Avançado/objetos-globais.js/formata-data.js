function formataData(data){
  const dia= data.getDate().toString().padStart(2, "0")
  const mes = (data.getMonth() +1).toString().padStart(2,"0")
  const ano = data.getFullYear()
  return`${dia}-${mes}-${ano}`
  }
  const data = new Date ()
  console.log (formataData(new Date("Mon Aug 27 1990 07:37:55 GMT+0200 (Hora de verão da Europa Central)")))