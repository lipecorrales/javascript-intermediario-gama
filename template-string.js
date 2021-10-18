let meuNome = 'Philippe';
let meuSobrenome = 'Corrales';
let minhaProfissao = 'Developer';

// Sem template String
console.log('Olá, eu sou ' + meuNome + ' ' + meuSobrenome + ' minha profissão é: ' + minhaProfissao);

console.log(`Olá, eu sou ${meuNome} ${meuSobrenome} e minha profissão é: ${minhaProfissao}`);

console.log(`O resultado da soma de 1 + 5 = ${1 + 5}`);

console.log(`O objeto json ${{ chave: 'valor'}}`);

let meuObjeto = {
    chave: 'novo valores'
}