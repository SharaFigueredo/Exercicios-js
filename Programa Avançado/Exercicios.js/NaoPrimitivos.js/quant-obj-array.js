function determinaTamanhoDeObjeto(objeto) {
  // escreve aqui a função
  return Object.keys(objeto).length
}
const meuObjeto ={
  nome:"Shara",
  cidade:"Teófilo",
  idade:25,
  filhos:2
}
console.log(determinaTamanhoDeObjeto(meuObjeto))