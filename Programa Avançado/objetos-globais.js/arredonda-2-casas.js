// //toFixed(1) formata o número para ter exatamente 1 casa decimal
// parseFloat() converte o resultado de volta para número (pois toFixed() retorna uma string)
function arredondarAsDecimas(d){
  return parseFloat(d.toFixed(1))
}
console.log(arredondarAsDecimas(5.43))