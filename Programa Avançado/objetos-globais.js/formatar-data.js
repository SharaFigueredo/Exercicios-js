function formataData(data){
 
  const dia = data.getDate()
  const mes =data.getMonth()
  const ano = data.getFullYear()

return `${dia}-${mes}-${ano}`
} 
const novaData = new Date()
console.log(formataData(novaData))