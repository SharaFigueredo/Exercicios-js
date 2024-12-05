function dataPorExtenso(data){
  const mesesAno = [`Janeiro`, `Fevereiro`, `Março`, `Abril`, `Maio`, `Junho`, `Julho`, `Agosto`, `Setembro`, `Outubro`, `Novembro` , `Dezembro`]
  const diaDaSemana = [`segunda-feira`, `terça-feira`, `quarta-feira`, `quinta-feira`, `sexta-feira`, `sábado`, `domingo`]
  const semana = diaDaSemana[data.getDay()]
  const dia= data.getDate()
  const mes = mesesAno[data.getMonth()]
  const ano = data.getFullYear()
  return `${semana},${dia} de ${mes} de ${ano}`
  }
  const data1 = new Date()
  console.log(dataPorExtenso(data1))