function fatorialN(n){
  let resultado = 1;
  let i = 1;
  while(i <= n){
      resultado *= i;
      i++;
  }
  return resultado;
}
console.log(fatorialN(4))