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


// // Exemplo 01 - REST com objeto 
// const usuario = {
//     nome: "Maria",
//     idade: 25,
//     telefone: "14996699966"
// };

// const { idade, ...resto } = usuario;
// console.log(idade);
// console.log(resto);

// // Exemplo 02 - REST com array
// const arr = [1, 2, 3, 4];

// const [a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// // Exemplo 02 - REST em parametro
// function soma(...parametro) {
//     return parametro.reduce((total, next) => total + next);
// }

// function soma2(a, b, ...parametro) {
//     return parametro;
// }

// console.log(soma(1, 2, 3));
// console.log(soma2(1, 2, 3, 4, 5));

// // Exemplo 03 - SPREAD unindo arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [ ...arr1, ...arr2];
// console.log(arr3);

// // Exemplo 03 - SPREAD unindo arrays
// const usuario1 = {
//     nome: "Marcia",
//     idade: 22,
//     telefone: "14999999669"
// }

// const usuario2 = { ...usuario1, nome: "Talita" };
// console.log(usuario1);
// console.log(usuario2);

/*
    01.11 - Template literals (usar crase ao invés de aspas)
*/

// const nome = "Mario";
// const idade = 27;

// // console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");
// console.log(`Meu nome é ${nome} e tenho ${idade} anos de idade.`);

/*
    01.12 - Object Short Syntax
*/

// const nome = "Marcos";
// const idade = 27;

// const usuario = {
//     nome,
//     idade,
//     empresa: "Google"
// };
// console.log(usuario);

/*
    02.01 - Configurando e testando o Webpack
*/
// import { soma } from '../functions';
// console.log(soma(1,2));

/*
    02.02 - Export e Import
*/
// Nesse exemplo nenhuma função é default
// import { divide, subtrai } from '../functions';
// console.log(divide(1,2));
// console.log(subtrai(3,2));

// Função que não é default pode ser renomeada usando "as"
// Se for default, a função fica fora das chaves com qualquer nome
// import  somaDoisNumeros , { subtrai as sub } from '../functions';
// console.log(somaDoisNumeros(1,2));
// console.log(sub(3,2));

// import multiplicaDoisNumeros from '../multiplication';
// console.log(multiplicaDoisNumeros(1,2));

// Importa todas funções para um objeto
import * as funcoes from '../functions';
// assim é chamado a unica função default do arquivo
console.log(funcoes.default(1,2)); 
console.log(funcoes.divide(1,2));
console.log(funcoes.subtrai(3,2));