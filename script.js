let list = [
  { nome: "luis", idade: 26 },

  { nome: "norma", idade: 16 },

  { nome: "daiana", idade: 26 },

  { nome: "jorge", idade: 16 },

  { nome: "kauan", idade: 16 },

  { nome: "charles", idade: 26 },

  { nome: "marco", idade: 16 },

  { nome: "bruno", idade: 16 },
];

let adulto = list.filter((tooMuch) => tooMuch.idade >= 18);
let menos = list.filter((ofLess) => ofLess.idade <= 18);

console.log(adulto, menor);
