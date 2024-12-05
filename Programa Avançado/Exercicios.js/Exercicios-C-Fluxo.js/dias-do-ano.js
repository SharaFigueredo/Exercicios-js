function diaDoAno(dia, mes) {
  // Verifica se o mês é válido
  if (mes < 1 || mes > 12) {
      return "Por favor introduza um mês entre 1 e 12.";
  }

  // Verifica a validade do dia conforme o mês
  if (dia < 1 || dia > 31) {
      return "Por favor introduza um dia entre 1 e 31.";
  }
  
  if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
      return "Por favor introduza um dia entre 1 e 30.";
  }
  
  if (mes === 2 && dia > 28) {
      return "Por favor introduza um dia entre 1 e 28.";
  }

  // Calcula o dia do ano
  let diasNoAno = 0;
  
  // Soma os dias dos meses anteriores
  for (let i = 1; i < mes; i++) {
      if (i === 2) {
          diasNoAno += 28; // Considerando ano não bissexto
      } else if (i === 4 || i === 6 || i === 9 || i === 11) {
          diasNoAno += 30;
      } else {
          diasNoAno += 31;
      }
  }
  
  diasNoAno += dia; 

  return diasNoAno; 
}

// Exemplos de Uso
console.log(diaDoAno(15, 3)); // 74 - 15 de Março
console.log(diaDoAno(1, 1));  // 1 - 1 de Janeiro
console.log(diaDoAno(28, 2)); // 59 - 28 de Fevereiro
console.log(diaDoAno(30, 4)); // 120 - 30 de Abril
console.log(diaDoAno(32, 1)); // Por favor introduza um dia entre 1 e 31.
console.log(diaDoAno(29, 2)); // Por favor introduza um dia entre 1 e 28.
console.log(diaDoAno(31, 13));