function obtemPropriedadeDeObjeto(objeto, propriedade) {
  return objeto[propriedade];
  }
  const meuObj ={
      nome:"Shara",
      idade:25
  }
  console.log(obtemPropriedadeDeObjeto(meuObj, "idade"))