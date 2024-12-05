function trimestresDoAno(t) {
  if(t< 1 || t > 4){
      return "Número inválido. Por favor insira um número entre 1 e 4. ";
  }
  switch(t){
      case 1:
      return "Janeiro, Fevereiro, Março";
      case 2 :
      return"Abril, Maio, Junho";
      case 3:
      return "Julho, Agosto, Setembro";
      case 4:
      return "Outubro, Novembro, Dezembro"
  }
  
  }
  console.log(trimestresDoAno(5))