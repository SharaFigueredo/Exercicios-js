function tempoEmPalavras(h, m) {
  // Arrays com números por extenso
  const numerosPorExtenso = [
      'zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove',
      'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete',
      'dezoito', 'dezenove', 'vinte', 'vinte e um', 'vinte e dois', 'vinte e três',
      'vinte e quatro', 'vinte e cinco', 'vinte e seis', 'vinte e sete', 'vinte e oito',
      'vinte e nove', 'trinta'
  ];

  // Validação de entrada
  if (h < 0 || h > 23 || m < 0 || m > 59) {
      return "Hora ou minuto inválido";
  }

  // Casos especiais de horas
  if (h === 0 && m === 0) return "meia noite em ponto";
  if (h === 12 && m === 0) return "meio dia em ponto";

  // Ajuste da hora para o formato 12 horas
  let horaAjustada = h;
  if (h > 12) horaAjustada = h - 12;
  if (h === 0) horaAjustada = 12;

  // Casos especiais de minutos
  if (m === 0) {
      return `${numerosPorExtenso[horaAjustada]} ${h === 0 ? 'da manhã' : ''} em ponto`;
  }
  if (m === 15) {
      return `um quarto para as ${numerosPorExtenso[horaAjustada]}`;
  }
  if (m === 30) {
      return `meia para as ${numerosPorExtenso[horaAjustada]}`;
  }

  // Para minutos depois de 30, calculamos quanto falta para a próxima hora
  if (m > 30) {
      const minutosRestantes = 60 - m;
      return `${numerosPorExtenso[minutosRestantes]} para as ${numerosPorExtenso[(horaAjustada + 1) > 12 ? 1 : horaAjustada + 1]}`;
  }

  // Caso padrão: minutos normais
  return `${numerosPorExtenso[m]} minutos para as ${numerosPorExtenso[horaAjustada]}`;
}

// Exemplos de uso
console.log(tempoEmPalavras(0, 0));  // "meia noite em ponto"
console.log(tempoEmPalavras(12, 0)); // "meio dia em ponto"
console.log(tempoEmPalavras(2, 15)); // "um quarto para as dois"
console.log(tempoEmPalavras(4, 30)); // "meia para as quatro"
console.log(tempoEmPalavras(5, 45)); // "quinze para as seis"


