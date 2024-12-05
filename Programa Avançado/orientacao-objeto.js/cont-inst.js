class ContadorInstancias{
  static instancias = 0 
  constructor (){
     ContadorInstancias.instancias++
  }
}
const dia1 = new ContadorInstancias() 
const dia2 = new ContadorInstancias()
const dia3 = new ContadorInstancias()
console.log(ContadorInstancias.instancias)
