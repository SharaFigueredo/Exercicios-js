function diaDaSemanaPorExtenso(data){
  const semana = [`domingo`, `sengunda-feira`, `terça-feira`,`quarta-feira`,`quinta-feira`,`sexta-feira`,`sábado`]
  const diasSemana= semana[data.getDay()]
  return`${diasSemana}`
 }
 const data = new Date()
 console.log(diaDaSemanaPorExtenso(data)) 