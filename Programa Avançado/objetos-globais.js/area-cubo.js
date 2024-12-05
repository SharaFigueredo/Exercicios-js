function superficieDoParalelepipedoQuadrado(ladodabase, comprimento){
  const areabase=Math.pow(ladodabase,2)
  return 2 * areabase + 4 * (ladodabase*comprimento)
  
  }
  console.log(superficieDoParalelepipedoQuadrado(10,14))
