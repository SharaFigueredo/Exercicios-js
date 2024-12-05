function diaEmPalavras(dia, mes, ano) {
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

  if (dia < 1 || dia > 31) {
      return "Por favor introduza um dia entre 1 e 31.";
  }
  if (mes < 1 || mes > 12) {
      return "Por favor introduza um mês entre 1 e 12.";
  }
  if (ano < 2000 || ano > 2030) {
      return "Por favor introduza um ano entre 2000 e 2030.";
  }
  if ([4,6,9,11].includes(mes) && dia > 30) {
      return "Por favor introduza um dia entre 1 e 30";
  }

  if (mes === 2) {
      const bissexto = (ano % 4 === 0 && ano % 100 != 0) || (ano % 400 === 0) 
          if(bissexto && dia > 29){
          return "Por favor introduza um dia entre 1 e 29."
          } else if( !bissexto && dia > 28) {
          return "Por favor introduza um dia entre 1 e 28"
      }
  }
  function numeroPorExtenso(numero){
  const numeros = new Map([
      [0, ''],
      [1, 'um'],
      [2, 'dois'],
      [3, 'três'],
      [4, 'quatro'],
      [5, 'cinco'],
      [6, 'seis'],
      [7, 'sete'],
      [8, 'oito'],
      [9, 'nove'],
      [10, 'dez'],
      [11, 'onze'],
      [12, 'doze'],
      [13, 'treze'],
      [14, 'quatorze'],
      [15, 'quinze'],
      [16, 'dezesseis'],
      [17, 'dezessete'],
      [18, 'dezoito'],
      [19, 'dezenove'],
      [20, 'vinte'],
      [30, 'trinta']
  ])
  if (numero <= 20) return numeros.get(numero)
  const dezena = Math.floor(numero / 10) * 10
  const unidade = numero % 10
  return numeros.get(dezena) + (unidade > 0 ? ` e ` + numeros.get(unidade) : ``)
}

let anoEmPalavras = ` `
if (ano === 2000 ){
  anoEmPalavras = ` dois mil `
}else{
  anoEmPalavras = ` dois mil e ` + numeroPorExtenso(ano - 2000)
}
return `${numeroPorExtenso(dia)} de ${meses.get(mes)} de ${anoEmPalavras}`
}
console.log(diaEmPalavras( 4, 4, 2022))