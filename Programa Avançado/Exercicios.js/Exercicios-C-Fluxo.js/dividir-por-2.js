function contaNumeroDeDivisoesPorDois(n) {
let cont = 0
  for (i = 0; n % 2 === 0; i++) {
    n = n / 2
    cont ++
  }
  return cont
}
console.log(contaNumeroDeDivisoesPorDois(4))
