
class Mesa{
  constructor (tampo){
    this.pernas=0
    this.tampo = tampo
  }
  montaPerna(perna){
    if(perna instanceof Perna){
      this.perna++
    }
    return this
  }
  estaMontada(mesa){
    if(this.pernas===4){
      return true 
    }
    return false
  }
}

  class Perna{
  }
  class Tampo{
  }

