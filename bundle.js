"use strict";

// class List {
//     constructor() {
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }
// class TodoList extends List {
//     constructor() {
//         super();
//         this.usuario = "Luidy";
//     }
//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }
// class Matematica {
//     static soma(a, b) {
//         return a + b;
//     }
// }
// // Testes:
// var MinhaLista = new TodoList();
// document.getElementById("novotodo").onclick = function() {
//     MinhaLista.add("Novo todo 2");
// };
// MinhaLista.mostraUsuario();
// console.log(Matematica.soma(1, 5));
// 01.04
//const a = 1;
//a = 2;
var b = {
  nome: "Marcos"
};
console.log(b.nome);
b.nome = "José";
console.log(b.nome);

if (1) {
  var y = 4;
  var _z = 4;
}

function teste() {
  console.log(y); // funciona

  console.log(z); // gera um erro
}

teste();
