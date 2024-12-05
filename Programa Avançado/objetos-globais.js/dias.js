function formataData(data){

  const dia= data.getDate()
  const mes = data.getMonth()+1
  const ano = data.getFullYear()
  const mesFormatado= mes < 10 ? "0" + mes:mes
  const diaFormatado= dia < 10?"0" + dia:dia
  
  
  return`${diaFormatado}-${mesFormatado}-${ano}`
  }
  const dataExemplo = new Date ("2024-12-05")
  console.log(formataData(dataExemplo))