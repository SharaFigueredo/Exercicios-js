// function aplica(n,func){
//   return func(n);
// }
// aplica(5,(n) => n * n);

// // uma funcão para retornar a idade
// aplica(19,(idade) => `TENHO ${idade}`)

//super digito 
function superdigito(string){
  if (string.length ===1){
    return string
  }
  for(let i=0 ; i<string.length;i++){
    newSuperDigit += perseInt(string[i])
  }
  return superdigito(String(newSuperDigit))
}