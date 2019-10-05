const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

var idades = usuarios.map( item => item.idade );
// console.log(idades);

// filter retorna um array
var maiorIdade18 = usuarios.filter( item => item.idade >= 18 && item.empresa == 'Rocketseat' );
// console.log(maiorIdade18);

// Find retorna um item do array (o primeiro que satisfaz a condição)
var usuarioGoogle = usuarios.find( item => item.empresa == 'Google' );
// console.log(usuarioGoogle);

usuarios.map( item => item.idade *= 2 );
var uniOperacoes = usuarios.filter(item => item.idade <= 50);
console.log(uniOperacoes);