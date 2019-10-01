"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
    01.04 - Classes
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
    01.05 - Const & Let
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
    01.06 - Operações com array
*/
// const arr = [1, 3, 4, 5, 8, 9];
// const newArr = arr.map(function(item, index){
//     return item + index;
// });
// console.log(newArr);
// const sum = arr.reduce(function(total, next){
//     return total + next;
// });
// console.log(sum);
// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// });
// console.log(filter);
// const find = arr.find(function(item){
//     return item == 3;
// });
// console.log(find);

/*
    01.07 - Arrow function
*/
// const arr = [1, 3, 4, 5, 6];
// // Exemplo 01
// const newArr = arr.map((item) => {
//     return item * 2;
// });
// console.log(newArr);
// // Exemplo 02
// const filter = arr.filter(item => {
//     return item % 2 === 0;
// });
// console.log(filter);
// // Exemplo 03
// const find = arr.find( item => item == 5 );
// console.log(find);
// // Exemplo 04 - Não recomendado
// const teste = (x) => x+500;
// console.log(teste(2));
// const teste2 = () => ({ nome: "Marcia" });
// console.log(teste2());

/*
    01.08 - Valores padrão
*/
// // Exemplo 01
// function soma(a = 3, b = 6) {
//     return a + b
// }
// console.log(soma(1));
// console.log(soma());
// // Exemplo 02 - Com arrow function
// const soma2 = (a = 2, b = 4) => a + b;
// console.log(soma2(1));
// console.log(soma2());

/*
    01.09 - Desestruturação
*/
// const usuario = {
//     nome: "Marcia",
//     idade: 18,
//     endereco: {
//         cidade: "Jaú",
//         estado: "SP"
//     }
// };
// console.log(usuario);
// // Exemplo 01
// const { nome, idade, endereco: { cidade } } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
// // Exemplo 02
// function exibeNomeIdade( { nome, idade} ) {
//     console.log( "Nome: "+nome+", idade: "+idade );
// }
// exibeNomeIdade(usuario);

/*
    01.10 - Operadores rest/spread
*/
// Exemplo 01 - REST com objeto 
var usuario = {
  nome: "Maria",
  idade: 25,
  telefone: "14996699966"
};

var idade = usuario.idade,
    resto = _objectWithoutProperties(usuario, ["idade"]);

console.log(idade);
console.log(resto); // Exemplo 02 - REST com array

var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c); // Exemplo 02 - REST em parametro

function soma() {
  for (var _len = arguments.length, parametro = new Array(_len), _key = 0; _key < _len; _key++) {
    parametro[_key] = arguments[_key];
  }

  return parametro.reduce(function (total, next) {
    return total + next;
  });
}

function soma2(a, b) {
  for (var _len2 = arguments.length, parametro = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    parametro[_key2 - 2] = arguments[_key2];
  }

  return parametro;
}

console.log(soma(1, 2, 3));
console.log(soma2(1, 2, 3, 4, 5)); // Exemplo 03 - SPREAD unindo arrays

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3); // Exemplo 03 - SPREAD unindo arrays

var usuario1 = {
  nome: "Marcia",
  idade: 22,
  telefone: "14999999669"
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: "Talita"
});

console.log(usuario1);
console.log(usuario2);
