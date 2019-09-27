"use strict";

/*
    01.03 - Classes
*/
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

/*
    01.04 - Const & Let
*/
//const a = 1;
//a = 2; // Gera um erro
// const b = { nome : "Marcos" };
// console.log(b.nome);
// b.nome = "José";
// console.log(b.nome);
// if (1) {
//     var y = 4;
//     let z = 4;
// }
// function teste() {
//     console.log(y); // funciona
//     console.log(z); // gera um erro
// }
// teste();

/*
    01.05 - Operações com array
*/
var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item == 3;
});
console.log(find);
