function insereLinhaEntre(primeira,segunda){
  return `${primeira}
  ${segunda}`
}
console.log(insereLinhaEntre("olá","diário"))
function apresentaPessoa(nome,idade){
return `O meu nome é ${nome} e tenho ${idade} anos`
}
console.log(apresentaPessoa("Rafael",23))

function areaDoHexagono(lado) {
  return Math.floor(6*((lado**2)* Math.sqrt(3))/10)
 }
 areaDoHexagono(10)