function somatorioAteN(n){
  let soma = 0;
  let i = 0;
  while(i <= n){
      soma += i;
      i++
  }
  return soma;
}
console.log(somatorioAteN(5))
