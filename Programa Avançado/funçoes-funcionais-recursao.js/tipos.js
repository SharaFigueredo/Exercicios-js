// Função pura - sempre retorna o mesmo resultado para mesmos inputs
const soma = (a, b) => a + b;
// composição de função
const compose = (f, g) => (x) => f(g(x));

const addUm = (x) => x + 1;
const duplicar = (x) => x * 2;

const addUmEDuplicar = compose(duplicar, addUm);
addUmEDuplicar(3); // 8   
