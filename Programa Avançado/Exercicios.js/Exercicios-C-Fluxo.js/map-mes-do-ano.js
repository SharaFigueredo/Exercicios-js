function mesesDoAno(mes){
  if(mes < 1 || mes > 12){
      return "Por favor insira um numero entre 1 e 12.";
  }
  const meses = new Map([
      [1, `Janeiro`],
      [2, `Fevereiro`],
      [3, `Março`],
      [4, `Abril`],
      [5, `Maio`],
      [6, `Junho`],
      [7, `Julho`],
      [8, `Agosto`],
      [9, `Setembro`],
      [10, `Outubro`],
      [11, `Novembro`],
      [12, `Dezembro`]
  ])
  return meses.get(mes)
  }
  console.log(mesesDoAno(1))