/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/*! exports provided: soma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./functions.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ \"./functions.js\");\n/*\r\n    01.04 - Classes\r\n*/\n// class List {\n//     constructor() {\n//         this.data = [];\n//     }\n//     add(data) {\n//         this.data.push(data);\n//         console.log(this.data);\n//     }\n// }\n// class TodoList extends List {\n//     constructor() {\n//         super();\n//         this.usuario = \"Luidy\";\n//     }\n//     mostraUsuario() {\n//         console.log(this.usuario);\n//     }\n// }\n// class Matematica {\n//     static soma(a, b) {\n//         return a + b;\n//     }\n// }\n// // Testes:\n// var MinhaLista = new TodoList();\n// document.getElementById(\"novotodo\").onclick = function() {\n//     MinhaLista.add(\"Novo todo 2\");\n// };\n// MinhaLista.mostraUsuario();\n// console.log(Matematica.soma(1, 5));\n\n/*\r\n    01.05 - Const & Let\r\n*/\n//const a = 1;\n//a = 2; // Gera um erro\n// const b = { nome : \"Marcos\" };\n// console.log(b.nome);\n// b.nome = \"José\";\n// console.log(b.nome);\n// if (1) {\n//     var y = 4;\n//     let z = 4;\n// }\n// function teste() {\n//     console.log(y); // funciona\n//     console.log(z); // gera um erro\n// }\n// teste();\n\n/*\r\n    01.06 - Operações com array\r\n*/\n// const arr = [1, 3, 4, 5, 8, 9];\n// const newArr = arr.map(function(item, index){\n//     return item + index;\n// });\n// console.log(newArr);\n// const sum = arr.reduce(function(total, next){\n//     return total + next;\n// });\n// console.log(sum);\n// const filter = arr.filter(function(item){\n//     return item % 2 === 0;\n// });\n// console.log(filter);\n// const find = arr.find(function(item){\n//     return item == 3;\n// });\n// console.log(find);\n\n/*\r\n    01.07 - Arrow function\r\n*/\n// const arr = [1, 3, 4, 5, 6];\n// // Exemplo 01\n// const newArr = arr.map((item) => {\n//     return item * 2;\n// });\n// console.log(newArr);\n// // Exemplo 02\n// const filter = arr.filter(item => {\n//     return item % 2 === 0;\n// });\n// console.log(filter);\n// // Exemplo 03\n// const find = arr.find( item => item == 5 );\n// console.log(find);\n// // Exemplo 04 - Não recomendado\n// const teste = (x) => x+500;\n// console.log(teste(2));\n// const teste2 = () => ({ nome: \"Marcia\" });\n// console.log(teste2());\n\n/*\r\n    01.08 - Valores padrão\r\n*/\n// // Exemplo 01\n// function soma(a = 3, b = 6) {\n//     return a + b\n// }\n// console.log(soma(1));\n// console.log(soma());\n// // Exemplo 02 - Com arrow function\n// const soma2 = (a = 2, b = 4) => a + b;\n// console.log(soma2(1));\n// console.log(soma2());\n\n/*\r\n    01.09 - Desestruturação\r\n*/\n// const usuario = {\n//     nome: \"Marcia\",\n//     idade: 18,\n//     endereco: {\n//         cidade: \"Jaú\",\n//         estado: \"SP\"\n//     }\n// };\n// console.log(usuario);\n// // Exemplo 01\n// const { nome, idade, endereco: { cidade } } = usuario;\n// console.log(nome);\n// console.log(idade);\n// console.log(cidade);\n// // Exemplo 02\n// function exibeNomeIdade( { nome, idade} ) {\n//     console.log( \"Nome: \"+nome+\", idade: \"+idade );\n// }\n// exibeNomeIdade(usuario);\n\n/*\r\n    01.10 - Operadores rest/spread\r\n*/\n// // Exemplo 01 - REST com objeto \n// const usuario = {\n//     nome: \"Maria\",\n//     idade: 25,\n//     telefone: \"14996699966\"\n// };\n// const { idade, ...resto } = usuario;\n// console.log(idade);\n// console.log(resto);\n// // Exemplo 02 - REST com array\n// const arr = [1, 2, 3, 4];\n// const [a, b, ...c] = arr;\n// console.log(a);\n// console.log(b);\n// console.log(c);\n// // Exemplo 02 - REST em parametro\n// function soma(...parametro) {\n//     return parametro.reduce((total, next) => total + next);\n// }\n// function soma2(a, b, ...parametro) {\n//     return parametro;\n// }\n// console.log(soma(1, 2, 3));\n// console.log(soma2(1, 2, 3, 4, 5));\n// // Exemplo 03 - SPREAD unindo arrays\n// const arr1 = [1, 2, 3];\n// const arr2 = [4, 5, 6];\n// const arr3 = [ ...arr1, ...arr2];\n// console.log(arr3);\n// // Exemplo 03 - SPREAD unindo arrays\n// const usuario1 = {\n//     nome: \"Marcia\",\n//     idade: 22,\n//     telefone: \"14999999669\"\n// }\n// const usuario2 = { ...usuario1, nome: \"Talita\" };\n// console.log(usuario1);\n// console.log(usuario2);\n\n/*\r\n    01.11 - Template literals (usar crase ao invés de aspas)\r\n*/\n// const nome = \"Mario\";\n// const idade = 27;\n// // console.log(\"Meu nome é \" + nome + \" e tenho \" + idade + \" anos.\");\n// console.log(`Meu nome é ${nome} e tenho ${idade} anos de idade.`);\n\n/*\r\n    01.12 - Object Short Syntax\r\n*/\n// const nome = \"Marcos\";\n// const idade = 27;\n// const usuario = {\n//     nome,\n//     idade,\n//     empresa: \"Google\"\n// };\n// console.log(usuario);\n\nconsole.log(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(1, 2));\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });